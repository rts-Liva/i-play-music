import Header from "@/components/header";
import SvgGradient from "@/components/svg-gradient";

export default function NoFooterLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <SvgGradient />
    </>
  );
}