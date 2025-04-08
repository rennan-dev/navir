import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Research = () => {
  const areas = [
    {
      title: "Automação",
      description: "Automação é a área que estuda e desenvolve sistemas capazes de executar tarefas de forma autônoma ou com mínima intervenção humana, aumentando eficiência e precisão em processos industriais e cotidianos.",
      image: "automation"
    },
    {
      title: "Visão Computacional",
      description: "Visão Computacional é a área que permite que computadores e dispositivos \"enxerguem\" e interpretem imagens e vídeos, sendo aplicada em reconhecimento facial, análise de imagens médicas, veículos autônomos, entre outros.",
      image: "computer-vision"
    },
    {
      title: "Inteligência Artificial",
      description: "Inteligência Artificial (IA) é o campo que busca criar máquinas e sistemas capazes de simular a inteligência humana, como aprender, raciocinar, tomar decisões e resolver problemas.",
      image: "ai"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Em quais áreas trabalhamos?</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nosso laboratório concentra-se em áreas estratégicas da tecnologia moderna,
            desenvolvendo pesquisas e soluções inovadoras.
          </p>
        </motion.div>

        <div className="space-y-16">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.2) }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img 
                    className="w-full h-[400px] object-cover"
                    alt={`${area.title}`}
                   src="" />
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-bold">{area.title}</h2>
                <p className="text-lg text-gray-700">{area.description}</p>
                <Link to="/contact">
                  <Button className="bg-[#001F3C] text-white hover:bg-[#001F3C]/90">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Research;