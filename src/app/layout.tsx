import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Portal das Plantas que Nutrem",
    template: "%s | Portal das Plantas que Nutrem",
  },
  description:
    "Portal educativo e catálogo progressivo de Plantas Alimentícias Não Convencionais (PANCs), com curadoria técnica e governança editorial.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portal das Plantas que Nutrem",
    description:
      "Explore espécies de PANCs com informações de uso culinário, segurança e curadoria técnica.",
    siteName: "Portal das Plantas que Nutrem",
    locale: "pt_BR",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Portal das Plantas que Nutrem",
    description:
      "Explore espécies de PANCs com informações de uso culinário, segurança e curadoria técnica.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
