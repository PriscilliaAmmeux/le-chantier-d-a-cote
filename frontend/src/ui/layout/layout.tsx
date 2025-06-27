import Footer from "../footer/footer";
import Header from "../header/header";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section>
      <div className="layout-header">
        <Header />
      </div>
      {children}
      <Footer />
    </section>
  );
}
