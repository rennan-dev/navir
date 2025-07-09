import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Research from "@/pages/Research";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetails";
import Members from "@/pages/Members";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/members" element={<Members />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </AnimatePresence>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;