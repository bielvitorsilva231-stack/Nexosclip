import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const description = "Achadinhos gamer da Nexos Clip. Achados para deixar seu setup com a sua cara.";

export const metadata: Metadata = {
  title: "Nexos Clip | Achadinhos gamer",
  description,
  openGraph: {
    title: "Nexos Clip | Achadinhos gamer",
    description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
