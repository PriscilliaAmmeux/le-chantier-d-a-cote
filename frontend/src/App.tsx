import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Missions from "./pages/Missions/missions";
import Convergences from "./pages/Convergences/convergences";
import Faq from "./pages/Faq/faq";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/Contact/contact";
import Activities from "./pages/Activities/activities";
import About from "./pages/About/about";
import Article from "./pages/Article/article";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/convergences" element={<Convergences />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
