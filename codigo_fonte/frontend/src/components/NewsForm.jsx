import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export const NewsForm = ({ onSuccess }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("description", data.description);
    formData.append("from_name", data.from_name);
    formData.append("from_email", data.from_email);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }
    fetch("http://localhost:4000/api/submit-news", {
      method: "POST",
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Falha ao enviar. O servidor respondeu com um erro.");
      }
      return response.json();
    })
    .then(data => {
      console.log("SUCCESS!", data);
      alert("Notícia enviada com sucesso para revisão! Obrigado por contribuir.");
      reset();
      onSuccess();
    })
    .catch((err) => {
      console.error("FAILED...", err);
      alert("Ocorreu um erro ao enviar a notícia. Verifique o console para mais detalhes.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="from_name">Seu Nome</Label>
        <Input id="from_name" {...register("from_name", { required: "Seu nome é obrigatório" })} />
        {errors.from_name && <p className="text-red-500 text-sm mt-1">{errors.from_name.message}</p>}
      </div>
      <div>
        <Label htmlFor="from_email">Seu Email</Label>
        <Input id="from_email" type="email" {...register("from_email", { required: "Seu email é obrigatório" })} />
        {errors.from_email && <p className="text-red-500 text-sm mt-1">{errors.from_email.message}</p>}
      </div>
      <div>
        <Label htmlFor="title">Título da Notícia</Label>
        <Input id="title" {...register("title", { required: "O título é obrigatório" })} />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>
      <div>
        <Label htmlFor="date">Data do Acontecimento</Label>
        <Input id="date" type="date" {...register("date", { required: "A data é obrigatória" })} />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
      </div>
      <div>
        <Label htmlFor="description">Descrição</Label>
        <Textarea id="description" {...register("description", { required: "A descrição é obrigatória" })} />
        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
      </div>
      <div>
        <Label htmlFor="image">Imagem</Label>
        <Input id="image" type="file" {...register("image")} accept="image/*" />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Enviar Notícia"}
      </Button>
    </form>
  );
};