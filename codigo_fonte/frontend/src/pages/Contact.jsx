import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Mail, Clock } from "lucide-react";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);

    fetch("http://localhost:4000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Falha no envio da mensagem.");
        return response.json();
      })
      .then(() => {
        toast({
          title: "Mensagem Enviada!",
          description:
            "Obrigado por entrar em contato. Responderemos em breve.",
        });
        reset();
      })
      .catch((error) => {
        console.error("Erro no formulário de contato:", error);
        toast({
          title: "Erro ao Enviar",
          description:
            "Houve um problema ao enviar sua mensagem. Tente novamente.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-lg text-gray-600">
            Estamos aqui para responder suas dúvidas e ouvir suas sugestões
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  {...register("name", { required: "Seu nome é obrigatório." })}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Seu email é obrigatório.",
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="subject">Assunto</Label>
                <Input
                  id="subject"
                  {...register("subject", {
                    required: "O assunto é obrigatório.",
                  })}
                />
                {errors.subject && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  rows="4"
                  {...register("message", {
                    required: "A mensagem é obrigatória.",
                  })}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-[#001F3C] text-white hover:bg-[#001F3C]/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Enviar Mensagem"
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#001F3C] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Localização</h3>
                    <p className="text-gray-600">
                      Instituto de Ciências Exatas e Tecnologia - ICET
                      <br />
                      Universidade Federal do Amazonas
                      <br />
                      Bloco D, Sala 308
                      <br />
                      Av. Nossa Senhora do Rosário, 3863
                      <br />
                      Tiradentes, Itacoatiara - AM
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#001F3C] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">rafael.santos@ufam.edu.br</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#001F3C] mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Horário de Funcionamento
                    </h3>
                    <p className="text-gray-600">
                      Segunda a Sábado: 8h às 22h
                      <br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
              <p className="text-gray-600">
                Siga-nos nas redes sociais para ficar por dentro das novidades e
                acompanhar nosso trabalho.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/navir-ufam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001F3C] hover:text-[#001F3C]/80"
                >
                  GitHub
                </a>
                <a
                  href="www.linkedin.com/company/navir-ufam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001F3C] hover:text-[#001F3C]/80"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/navir_ufam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#001F3C] hover:text-[#001F3C]/80"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
