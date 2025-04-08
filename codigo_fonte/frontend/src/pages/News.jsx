import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const News = () => {
  const news = [
    {
      title: "NAVIR entra em parceria com a motorola",
      date: "2025-04-01",
      description: "",
      image: "parceria com motorola"
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
          <h1 className="text-4xl font-bold mb-6">Notícias e Atualizações</h1>
          <p className="text-lg text-gray-700">
            Fique por dentro das últimas novidades e conquistas do NAVIR
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.2) }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  alt={item.title}
                 src="" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Calendar size={16} className="mr-2" />
                  {new Date(item.date).toLocaleDateString('pt-BR')}
                </div>
                
                <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <button className="text-[#001F3C] font-medium hover:underline">
                  Ler mais →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default News;