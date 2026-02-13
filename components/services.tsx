import { Scissors, Paintbrush, Droplets, Sun, Sparkles, Wind, FlaskConical, Waves } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Corte Feminino",
    description: "Cortes modernos e personalizados para realcar sua beleza natural.",
  },
  {
    icon: Scissors,
    title: "Corte Masculino",
    description: "Cortes masculinos com estilo e precisao para o visual perfeito.",
  },
  {
    icon: Wind,
    title: "Escova",
    description: "Escovas impecaveis que deixam seus cabelos com brilho e movimento.",
  },
  {
    icon: Paintbrush,
    title: "Coloracao",
    description: "Coloracoes vibrantes e duradouras com produtos de alta qualidade.",
  },
  {
    icon: Sun,
    title: "Mechas",
    description: "Mechas que iluminam e dao dimensao aos seus fios com naturalidade.",
  },
  {
    icon: FlaskConical,
    title: "Tratamentos Capilares",
    description: "Tratamentos profundos para recuperar a saude e vitalidade dos cabelos.",
  },
  {
    icon: Droplets,
    title: "Hidratacao",
    description: "Hidratacao profunda que devolve maciez e brilho aos seus fios.",
  },
  {
    icon: Waves,
    title: "Progressiva",
    description: "Alisamento progressivo com tecnicas seguras e resultados incriveis.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Nossos servicos
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Servicos que Transformam</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Oferecemos uma variedade completa de servicos para cuidar da sua beleza com excelencia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-primary">
                <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-4 border-t border-border pt-4">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  Consulte valores
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5518996655525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
