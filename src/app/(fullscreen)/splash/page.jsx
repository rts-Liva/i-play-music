import SplashLogo from "@/components/splash-logo";
import '@/scss/pages/splash-screen.scss';

async function SplashScreenPage() {
    return (
        <>
            <main className="splash">
                <SplashLogo />
                <h1 className="heading splash__title">iPlayMusic</h1>
            </main>
        </>
    );
}

export default SplashScreenPage;