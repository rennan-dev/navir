import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Research from "@/pages/Research";
import News from "@/pages/News";
import Members from "@/pages/Members";
import Contact from "@/pages/Contact";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AnimatePresence mode="wait">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/research" element={<Research />} />
              <Route path="/news" element={<News />} />
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