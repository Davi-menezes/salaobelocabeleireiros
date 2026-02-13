import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold tracking-wide">
              Salao Belo
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              Beleza, sofisticacao e cuidado em cada detalhe. Ha anos
              transformando autoestima em Presidente Prudente.
            </p>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Endereco
              </h4>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-background/70">
              Rua Joao Ceribelli Pacca, 337
              <br />
              Jardim Everest
              <br />
              Presidente Prudente - SP
              <br />
              CEP: 19066-140
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Horario
              </h4>
            </div>
            <div className="mt-3 space-y-1 text-sm text-background/70">
              <p>Ter a Sex: 09:40 - 19:30</p>
              <p>Sabado: 09:40 - 18:00</p>
              <p>Dom e Seg: Fechado</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <h4 className="text-sm font-semibold uppercase tracking-wider">
                Contato
              </h4>
            </div>
            <a
              href="tel:+5518996655525"
              className="mt-3 block text-sm text-background/70 transition-colors hover:text-background"
            >
              (18) 99665-5525
            </a>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/salaobelocabeleireiros/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background/70 transition-colors hover:border-background/50 hover:text-background"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/50">
            {"© 2026 Salao Belo Cabeleireiros. Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
