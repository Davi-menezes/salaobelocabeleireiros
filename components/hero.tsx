import { Phone, Star } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-salon.jpg"
        alt="Interior do Salao Belo Cabeleireiros"
        fill
        className="object-cover object-center blur-[0.5px]"
        priority
        quality={100}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Rating Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-background/15 px-4 py-2 backdrop-blur-sm">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-background/90">
            5.0 - 96 avaliacoes
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold leading-tight tracking-wide text-background md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Beleza, Sofisticacao e Cuidado em Cada Detalhe
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-background/85 md:text-xl">
          Ha anos transformando autoestima em Presidente Prudente
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5518996655525"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-background shadow-lg transition-transform hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="rounded-full border-2 border-background/30 px-8 py-4 text-base font-medium text-background transition-colors hover:border-background/60 hover:bg-background/10"
          >
            Nossos Servicos
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
