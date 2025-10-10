import { BrowserRouter, Routes, Route } from "react-router-dom";
import Missions from "./pages/Missions/missions";
import Faq from "./pages/Faq/faq";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/Contact/contact";
import Activities from "./pages/Activities/activities";
import About from "./pages/About/about";
import Article from "./pages/Article/Article";
import LegalNotices from "./pages/LegalNotices/legalNotices";
import PrivacyPolicy from "./pages/PrivacyPolicy/privacyPolicy";
import Accueil from "./pages/Accueil/accueil";
import Convergence from "./pages/Convergence/convergence";
import ScrollToTop from "./components/scrollToTop/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/convergence" element={<Convergence />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legalNotices" element={<LegalNotices />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
