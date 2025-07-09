import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { NewsForm } from "./NewsForm";

export const SubmitNewsModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enviar uma Notícia</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo para sugerir uma nova notícia. Sua contribuição será revisada pela equipe.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <NewsForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};