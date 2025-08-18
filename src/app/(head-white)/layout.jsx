import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HeadWhiteLayout({ children }) {
  return (
    <>
      <Header navigateReturn={false} colour="light" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}