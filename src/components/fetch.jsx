import { cookies } from "next/headers";

async function Fetch(url) {
    const cookieStore = await cookies();
    const access_token = cookieStore.get('ipm_access_token');

    const response = await fetch(`https://api.spotify.com/v1/${url}`, {
        headers: {
            'Authorization': `Bearer ${access_token.value}`
        }
    });

    const data = await response.json();
    return data;

}

export default Fetch;