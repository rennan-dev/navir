import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Members = () => {
  const members = [
    {
      name: "Rafael Baitola",
      role: "Graduando",
      area: "Inteligência Artificial",
    },
    {
      name: "Méric",
      role: "Graduando",
      area: "Frontend",
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
          <h1 className="text-4xl font-bold mb-6">Nossa Equipe</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Conheça os pesquisadores e estudantes que fazem parte do NAVIR
          </p>
          <Link to="/contact" className="inline-block mt-6">
            <Button className="bg-[#001F3C] text-white hover:bg-[#001F3C]/90">
              Junte-se à Nossa Equipe
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover"
                  alt={`${member.name} - ${member.role}`}
                 src="" />
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <p className="text-[#001F3C] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.area}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Members;