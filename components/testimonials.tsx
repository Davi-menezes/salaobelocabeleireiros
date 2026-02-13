import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mayara Marchiori",
    text: "Trabalho e incrivel, eles sao maravilhosos! Produtos de alta qualidade. Sou cliente desde os 16 anos e super indico!",
  },
  {
    name: "Luis007enois fps",
    text: "Atendimento impecavel, local muito organizado!",
  },
  {
    name: "Rita Spolador",
    text: "Profissionais maravilhosos, otimo atendimento, lugar aconchegante. Meu lugar nao mudaria por nada.",
  },
  {
    name: "Cinthia M. Molina",
    text: "Trabalho de excelencia, profissionais de alto padrao, ambiente aconchegante. Muito satisfeita!",
  },
  {
    name: "Giovana Aguiar",
    text: "Excelentes profissionais, ambiente aconchegante e otimo atendimento! Super recomendo.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">O que nossos clientes dizem</span>
          </h2>

          {/* Overall Rating */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground">
              {"5.0"} <span className="font-normal text-muted-foreground">{"(96 avaliacoes no Google)"}</span>
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-lg md:p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent" />

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
                {`"${testimonial.text}"`}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
