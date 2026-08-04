import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import Capabilities from "./pages/Capabilities";
import WearGuard from "./pages/WearGuard";
import Engineering from "./pages/Engineering";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <ScrollProgress />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/wearguard" element={<WearGuard />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
