import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover"
            alt="NAVIR background"
           src="./images/background.png" />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            NAVIR
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Núcleo de Automação, Visão Computacional, Inteligência Artificial e Robótica
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/contact">
              <Button className="bg-white text-[#001F3C] hover:bg-white/90">
                Entre em Contato
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Áreas de Atuação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automação",
                description: "Desenvolvimento de sistemas autônomos e eficientes",
                image: "automation"
              },
              {
                title: "Visão Computacional",
                description: "Processamento e análise avançada de imagens",
                image: "computer-vision"
              },
              {
                title: "Inteligência Artificial",
                description: "Soluções inteligentes para problemas complexos",
                image: "ai"
              },
              {
                title: "Robótica",
                description: "Inovação em sistemas robóticos",
                image: "robotics"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <img 
                    className="w-full h-full object-cover"
                    alt={`${feature.title}`}
                   src="" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;