import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { day: "Segunda-feira", time: "Fechado" },
  { day: "Terca-feira", time: "09:40 - 19:30" },
  { day: "Quarta-feira", time: "09:40 - 19:30" },
  { day: "Quinta-feira", time: "09:40 - 19:30" },
  { day: "Sexta-feira", time: "09:40 - 19:30" },
  { day: "Sabado", time: "09:40 - 18:00" },
  { day: "Domingo", time: "Fechado" },
];

export function Location() {
  return (
    <section id="localizacao" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Localizacao
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Venha nos visitar</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d800!2d-51.4300899!3d-22.1070373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f77b013ce889%3A0x6b5ecffcb0973569!2sSal%C3%A3o%20Belo%20Cabeleireiros!5e0!3m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="min-h-[400px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao do Salao Belo Cabeleireiros no Google Maps"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Endereco
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Rua Joao Ceribelli Pacca, 337
                    <br />
                    Jardim Everest
                    <br />
                    Presidente Prudente - SP
                    <br />
                    CEP: 19066-140
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Plus Code: VHV9+5X
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Telefone / WhatsApp
                  </h3>
                  <a
                    href="tel:+5518996655525"
                    className="mt-2 inline-block text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    (18) 99665-5525
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Horario de Funcionamento
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {hours.map((item) => (
                      <li
                        key={item.day}
                        className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-foreground/80">
                          {item.day}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            item.time === "Fechado"
                              ? "text-muted-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
