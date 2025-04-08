import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-6">Quem somos?</h1>
            <p className="text-lg text-gray-700 mb-6">
              O NAVIR (Núcleo de Automação, Visão Computacional, Inteligência Artificial e Robótica) 
              é um laboratório de pesquisa voltado ao desenvolvimento de soluções inovadoras nas áreas 
              de tecnologia e engenharia. Atuamos na integração entre teoria e prática, promovendo 
              projetos aplicados, formação de talentos e avanços científicos que impactam positivamente 
              a sociedade.
            </p>
            <Link to="/contact">
              <Button className="bg-[#001F3C] text-white hover:bg-[#001F3C]/90">
                Entre em Contato
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              className="w-full h-[400px] object-cover"
              alt="NAVIR"
             src="" />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Nossa Missão</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inovação",
                description: "Desenvolver soluções tecnológicas inovadoras que impactam positivamente a sociedade."
              },
              {
                title: "Educação",
                description: "Formar profissionais altamente qualificados nas áreas de automação, visão computacional, IA e robótica."
              },
              {
                title: "Pesquisa",
                description: "Conduzir pesquisas de ponta que contribuam para o avanço científico e tecnológico."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + (index * 0.2) }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;