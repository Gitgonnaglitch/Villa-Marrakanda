import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marrakanda — Maison d'hôte de luxe à Marrakech",
  description: "Menu, activités et WiFi — Marrakanda, votre maison d'hôte de luxe à Marrakech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
