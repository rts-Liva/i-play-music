import WalkThrough from "@/components/walk-through";
import '@/scss/pages/walkthrough.scss';

export const metadata = {
    title: 'Walkthrough'
};

function WalkThroughPage() {
    return (
        <>
            <img src="/badges.svg" alt="background pattern" className="walkthrough__image" />
            <WalkThrough />
        </>
    );
}

export default WalkThroughPage;