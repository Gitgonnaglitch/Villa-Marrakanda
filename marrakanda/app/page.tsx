"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Activities from "@/components/Activities";
import Wifi from "@/components/Wifi";

type Lang = "fr" | "en";

const footerCopy = {
  fr: { tagline: "Maison d'hôte de luxe · Marrakech", copy: "© 2025 Marrakanda · Tous droits réservés" },
  en: { tagline: "Luxury Guest House · Marrakech", copy: "© 2025 Marrakanda · All rights reserved" },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const toggle = () => setLang((l) => (l === "fr" ? "en" : "fr"));
  const f = footerCopy[lang];

  return (
    <>
      <Nav lang={lang} onToggle={toggle} />
      <Hero lang={lang} />
      <Menu lang={lang} />
      <Activities lang={lang} />
      <Wifi lang={lang} />
      <footer className="footer">
        <div className="wrap">
          <div>
            <div className="brand">MARRAKANDA</div>
            <div className="tagline">{f.tagline}</div>
          </div>
          <div className="copy">{f.copy}</div>
        </div>
      </footer>
    </>
  );
}
