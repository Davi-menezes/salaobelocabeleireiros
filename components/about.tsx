import Image from "next/image";
import { Award, Heart, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Produtos Premium",
    description: "Utilizamos apenas produtos de alta qualidade para garantir os melhores resultados.",
  },
  {
    icon: Users,
    title: "Profissionais Experientes",
    description: "Equipe altamente qualificada com anos de experiencia no mercado da beleza.",
  },
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Um espaco organizado e confortavel pensado para voce se sentir em casa.",
  },
  {
    icon: Award,
    title: "Excelencia no Atendimento",
    description: "Clientes fieis ha anos comprovam a qualidade do nosso trabalho.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/about-salon.jpg"
                alt="Profissionais do Salao Belo trabalhando"
                fill
                className="object-cover object-center"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-primary/20" />
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre nos
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Sobre o Salao Belo</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              No Salao Belo Cabeleireiros, acreditamos que cada detalhe faz a diferenca. Com
              profissionais experientes e apaixonados pelo que fazem, oferecemos servicos de
              excelencia em um ambiente acolhedor e sofisticado. Utilizamos produtos de alta
              qualidade e tecnicas modernas para realcar a beleza unica de cada cliente.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Ha anos, somos referencia em beleza em Presidente Prudente, conquistando a
              confianca e fidelidade de clientes que nos escolhem como seu espaco de cuidado
              e transformacao.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
