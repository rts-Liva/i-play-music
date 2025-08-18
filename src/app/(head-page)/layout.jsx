import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HeadLayout({ children }) {
  return (
    <>
      <Header navigateReturn={false} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}