import Footer from "../footer/footer";
import Header from "../header/header";
import "./layout.css";

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
      <div className="layout-children"> {children}</div>

      <Footer />
    </section>
  );
}
