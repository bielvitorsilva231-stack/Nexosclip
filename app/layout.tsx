import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description = "Achadinhos gamer da Nexus Clip. Seu próximo upgrade começa aqui.";

export const metadata: Metadata = {
  title: "Nexus Clip | Achadinhos gamer",
  description,
  openGraph: {
    title: "Nexus Clip | Achadinhos gamer",
    description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
