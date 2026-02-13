import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const _poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salao Belo Cabeleireiros | Salao de Beleza em Presidente Prudente",
  description:
    "Salao Belo Cabeleireiros - Ha anos transformando autoestima em Presidente Prudente. Cortes, coloracao, mechas, tratamentos capilares e muito mais. Agende pelo WhatsApp!",
  keywords:
    "salao de beleza, cabeleireiro, presidente prudente, corte feminino, coloracao, mechas, tratamento capilar, salao belo",
  openGraph: {
    title: "Salao Belo Cabeleireiros",
    description:
      "Beleza, Sofisticacao e Cuidado em Cada Detalhe. Agende pelo WhatsApp!",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#c4a265",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${_playfair.variable} ${_poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
