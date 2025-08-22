'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function GET(request) {
    const code = request.nextUrl.searchParams.get('code');
    const cookieStore = await cookies();

    const CLIENT = process.env.CLIENT_ID;
    const SECRET = process.env.CLIENT_SECRET;
    const CALLBACK = process.env.CALLBACK_URL;

    const response = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(CLIENT + ':' + SECRET)}`
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${CALLBACK}`
    });

    const data = await response.json();

    cookieStore.set({
        name: 'ipm_access_token',
        value: data.access_token,
        maxAge: data.expires_in
    });

    cookieStore.set({
        name: 'ipm_refresh_token',
        value: data.refresh_token,
        maxAge: 60 * 60 * 24 * 30
    });

    redirect('/walk-through');
}