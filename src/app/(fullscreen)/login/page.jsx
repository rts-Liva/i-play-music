import { FaSpotify } from "react-icons/fa6";
import Link from "next/link";
import '@/scss/pages/login.scss';

export const metadata = {
    title: 'Login'
};

function LoginPage() {
    return (
        <>
            <h1 className="heading login__heading">log in</h1>
            <form className="login__form">
                <div>
                    <label htmlFor="username" className="sub-heading login__form__label">username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        className="login__form__input"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sub-heading login__form__label">password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="login__form__input"
                        required
                    />
                </div>
                <button type="submit" className="login__form__btn">log in</button>
            </form>
            <p className="text login__text">or</p>
            <Link href={
                `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.CLIENT_ID}&scope=user-read-private%20user-read-email&redirect_uri=${process.env.CALLBACK_URL}`
            } className="login__spotify">
                Login with Spotify <FaSpotify className="login__spotify-icon" />
            </Link>
        </>
    );
}

export default LoginPage;