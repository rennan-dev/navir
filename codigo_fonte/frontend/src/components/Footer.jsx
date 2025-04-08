import React from "react";
import { Github, Instagram, Linkedin, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#001F3C] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MapPin size={20} />
              Localização
            </h3>
            <p className="text-sm text-gray-300">
              Instituto de Ciências Exatas e Tecnologia - ICET<br />
              Universidade Federal do Amazonas<br />
              Bloco D, Sala 308<br />
              Av. Nossa Senhora do Rosário, 3863<br />
              Tiradentes, Itacoatiara - AM
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Clock size={20} />
              Horário de Funcionamento
            </h3>
            <div className="text-sm text-gray-300">
              <p>Segunda a Sábado: 8h às 22h</p>
              <p>Domingo: Fechado</p>
            </div>
            <div className="pt-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Mail size={20} />
                Contato
              </h3>
              <p className="text-sm text-gray-300">rafael.santos@ufam.edu.br</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors p-2 bg-white/10 rounded-full"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors p-2 bg-white/10 rounded-full"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors p-2 bg-white/10 rounded-full"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} NAVIR. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;