"use client";

import { useState } from "react";
import { Phone, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Ola! Meu nome e ${formData.name}. ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5518996655525?text=${encoded}`, "_blank");
  };

  const handlePhoneClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const phoneNumber = "18996655525";
    
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Número copiado!", {
        description: "O número de telefone foi copiado para sua área de transferência.",
        duration: 3000,
      });
    } catch (err) {
      toast.error("Erro ao copiar", {
        description: "Não foi possível copiar o número. Tente novamente.",
        duration: 3000,
      });
    }
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Contato
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Entre em contato</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Estamos prontos para atender voce. Agende seu horario agora mesmo!
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Contact Options */}
          <div className="flex flex-col gap-6">
            <a
              href="https://wa.me/5518996655525"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] transition-transform group-hover:scale-110">
                <MessageCircle className="h-7 w-7 text-background" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Envie uma mensagem e agende seu horario
                </p>
                <p className="mt-2 text-lg font-semibold text-[#25D366]">
                  (18) 99665-5525
                </p>
              </div>
            </a>

            <button
              onClick={handlePhoneClick}
              className="group flex w-full items-center gap-6 rounded-2xl border border-border bg-background p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-8"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary transition-transform group-hover:scale-110">
                <Phone className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Telefone
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Clique para copiar o numero
                </p>
                <p className="mt-2 text-lg font-semibold text-primary">
                  (18) 99665-5525
                </p>
              </div>
            </button>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-background p-6 md:p-8"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Envie uma mensagem
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Preencha o formulario e entraremos em contato via WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="(18) 99999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  placeholder="Qual servico voce deseja agendar?"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                Enviar pelo WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
