import Header from "@/components/header";
import Footer from "@/components/footer";

export default function WhiteLayout({ children }) {
  return (
    <>
      <Header colour="light" />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}