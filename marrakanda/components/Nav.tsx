"use client";

type Lang = "fr" | "en";

const labels = {
  fr: { menu: "Menu", activities: "Activités", wifi: "Wi-Fi", toggle: "EN" },
  en: { menu: "Menu", activities: "Activities", wifi: "Wi-Fi", toggle: "FR" },
};

export default function Nav({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  const t = labels[lang];
  return (
    <header className="topbar">
      <div className="wrap">
        <a href="#top" className="brand">MARRAKANDA</a>
        <nav>
          <a href="#menu">{t.menu}</a>
          <a href="#activites">{t.activities}</a>
          <a href="#wifi">{t.wifi}</a>
          <button className="lang-toggle" onClick={onToggle}>{t.toggle}</button>
        </nav>
      </div>
    </header>
  );
}
