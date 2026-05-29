type Lang = "fr" | "en";

const copy = {
  fr: {
    overline: "Marrakech · Maison d'hôte",
    title: "Marrakanda",
    sub: "Un jardin de luxe au cœur de la palmeraie — où chaque détail est une invitation à la sérénité.",
    cta1: "Découvrir le menu",
    cta2: "Voir les activités",
  },
  en: {
    overline: "Marrakech · Guest House",
    title: "Marrakanda",
    sub: "A luxury garden retreat in the heart of the palm grove — where every detail invites serenity.",
    cta1: "Explore the menu",
    cta2: "See activities",
  },
};

export default function Hero({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="hero" id="top">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/dron.jpg" alt="Marrakanda vue aérienne" className="hero-img" />
      <div className="wrap">
        <span className="overline">{t.overline}</span>
        <h1>{t.title}</h1>
        <p className="sub">{t.sub}</p>
        <div className="hero-ctas">
          <a href="#menu" className="btn btn-primary">{t.cta1}</a>
          <a href="#activites" className="btn btn-ghost">{t.cta2}</a>
        </div>
      </div>
    </section>
  );
}
