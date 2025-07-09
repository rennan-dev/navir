import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowLeft } from "lucide-react";
import { newsData } from "../data/newsData";

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Notícia não encontrada</h1>
        <Link to="/news" className="text-[#001F3C] hover:underline flex items-center">
          <ArrowLeft size={18} className="mr-2" />
          Voltar para todas as notícias
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/news" className="text-[#001F3C] hover:underline flex items-center">
            <ArrowLeft size={18} className="mr-2" />
            Voltar para todas as notícias
          </Link>
        </div>

        <article>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center text-gray-500 text-sm mb-8">
            <Calendar size={16} className="mr-2" />
            {new Date(article.date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
          </div>

          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <img src={article.image} alt={article.title} className="w-full object-cover" />
          </div>

          <div className="prose lg:prose-xl max-w-none text-gray-800">
            {article.content}
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default NewsDetail;