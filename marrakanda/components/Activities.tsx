type Lang = "fr" | "en";

type Activity = {
  icon: string;
  color: string;
  nameFr: string;
  nameEn: string;
  descFr: string;
  descEn: string;
  priceFr: string;
  priceEn: string;
  detailFr: string;
  detailEn: string;
  durationFr: string;
  durationEn: string;
};

const activities: Activity[] = [
  {
    icon: "🏍️",
    color: "var(--clay)",
    nameFr: "Quad",
    nameEn: "Quad Biking",
    descFr: "Traversez les pistes ocre de la palmeraie et des dunes aux alentours de Marrakech.",
    descEn: "Ride through the ochre trails of the palm grove and surrounding dunes near Marrakech.",
    priceFr: "À partir de 25 €",
    priceEn: "From €25",
    detailFr: "25 € / quad · 30 € si 2 personnes (chauffeur + passager)",
    detailEn: "€25 / quad · €30 for 2 (driver + passenger)",
    durationFr: "1 heure",
    durationEn: "1 hour",
  },
  {
    icon: "🚙",
    color: "var(--bordeaux)",
    nameFr: "Buggy",
    nameEn: "Buggy",
    descFr: "Adrénaline garantie sur les pistes tout-terrain à bord d'un buggy biplace.",
    descEn: "Guaranteed adrenaline on off-road trails in a two-seater buggy.",
    priceFr: "60 € / buggy",
    priceEn: "€60 / buggy",
    detailFr: "60 € pour 2 personnes",
    detailEn: "€60 for 2 people",
    durationFr: "1 heure",
    durationEn: "1 hour",
  },
  {
    icon: "🏜️",
    color: "var(--saffron-600)",
    nameFr: "Agafay — Déjeuner / Dîner",
    nameEn: "Agafay — Lunch / Dinner",
    descFr: "Repas face au désert de pierres d'Agafay, avec option accès piscine pour une journée inoubliable.",
    descEn: "Dine facing the Agafay stone desert, with optional pool access for an unforgettable day.",
    priceFr: "À partir de 20 € / pers.",
    priceEn: "From €20 / person",
    detailFr: "20 € / pers. sans piscine · 30 € / pers. avec accès piscine",
    detailEn: "€20 / person without pool · €30 / person with pool access",
    durationFr: "Demi-journée",
    durationEn: "Half day",
  },
  {
    icon: "🚐",
    color: "var(--olive-700)",
    nameFr: "Transport",
    nameEn: "Transport",
    descFr: "Navettes aéroport, transferts centre-ville et excursions en van confortable (8 ou 17 places).",
    descEn: "Airport shuttles, city transfers, and excursions in a comfortable van (8 or 17 seats).",
    priceFr: "À partir de 30 €",
    priceEn: "From €30",
    detailFr: "Aéroport: 30€ (8pl.) / 60€ (17pl.) · Centre-ville A/R: 50€ / 90€ · Agafay: 90€ / 150€ · Ourika: 90€ / 150€ · Essaouira: 170€ / 210€ · Ouzoud: 160€ / 220€ · Mise à dispo journée: 90€ / 140€",
    detailEn: "Airport: €30 (8p) / €60 (17p) · City centre R/T: €50 / €90 · Agafay: €90 / €150 · Ourika: €90 / €150 · Essaouira: €170 / €210 · Ouzoud: €160 / €220 · Full-day disposal: €90 / €140",
    durationFr: "Selon trajet",
    durationEn: "Per journey",
  },
  {
    icon: "💆",
    color: "var(--pool-700)",
    nameFr: "Massage à domicile",
    nameEn: "In-house Massage",
    descFr: "Profitez d'un massage relaxant directement dans l'intimité de la villa, par un praticien qualifié.",
    descEn: "Enjoy a relaxing massage in the privacy of the villa, performed by a qualified therapist.",
    priceFr: "50 € / pers.",
    priceEn: "€50 / person",
    detailFr: "50 € par personne · 2 personnes simultanément maximum",
    detailEn: "€50 per person · Maximum 2 simultaneous guests",
    durationFr: "Sur demande",
    durationEn: "On request",
  },
  {
    icon: "🔥",
    color: "#c0392b",
    nameFr: "Cracheur de feu",
    nameEn: "Fire Breather",
    descFr: "Un spectacle de feu époustouflant pour animer vos soirées et émerveiller vos invités.",
    descEn: "A breathtaking fire show to liven up your evenings and dazzle your guests.",
    priceFr: "160 €",
    priceEn: "€160",
    detailFr: "Prestation de 30 minutes",
    detailEn: "30-minute performance",
    durationFr: "30 minutes",
    durationEn: "30 minutes",
  },
  {
    icon: "💃",
    color: "#8e44ad",
    nameFr: "Danseuses orientales",
    nameEn: "Oriental Dancers",
    descFr: "Envoûtez vos soirées avec deux prestations de danse orientale aux costumes somptueux.",
    descEn: "Enchant your evenings with two oriental dance performances in sumptuous costumes.",
    priceFr: "150 €",
    priceEn: "€150",
    detailFr: "2 prestations de 15 minutes chacune",
    detailEn: "2 performances × 15 minutes each",
    durationFr: "2 × 15 min",
    durationEn: "2 × 15 min",
  },
  {
    icon: "🥁",
    color: "var(--saffron)",
    nameFr: "Gnawa",
    nameEn: "Gnawa",
    descFr: "Musique ancestrale marocaine aux rythmes envoûtants — une immersion culturelle unique.",
    descEn: "Ancient Moroccan music with mesmerising rhythms — a unique cultural immersion.",
    priceFr: "140 €",
    priceEn: "€140",
    detailFr: "Prestation de 45 minutes",
    detailEn: "45-minute performance",
    durationFr: "45 minutes",
    durationEn: "45 minutes",
  },
  {
    icon: "🎷",
    color: "var(--pool)",
    nameFr: "Saxophoniste",
    nameEn: "Saxophonist",
    descFr: "Ambiance jazzy ou lounge pour vos dîners, soirées et moments privilégiés.",
    descEn: "Jazz or lounge ambiance for your dinners, evenings, and special moments.",
    priceFr: "Sur demande",
    priceEn: "On request",
    detailFr: "Tarif selon durée — demandez-nous",
    detailEn: "Price according to duration — ask us",
    durationFr: "À définir",
    durationEn: "To be defined",
  },
  {
    icon: "🥂",
    color: "var(--bordeaux-700)",
    nameFr: "Réception d'invités",
    nameEn: "Guest Reception",
    descFr: "Organisez un déjeuner ou un dîner de réception dans un cadre exceptionnel.",
    descEn: "Host a reception lunch or dinner in an exceptional setting.",
    priceFr: "Prix sur demande",
    priceEn: "Price on request",
    detailFr: "Tarif selon nombre de convives et prestations",
    detailEn: "Price according to guests and services",
    durationFr: "Selon événement",
    durationEn: "Per event",
  },
];

const copy = {
  fr: {
    overline: "Expériences",
    title: "Nos Activités",
    lede: "De l'aventure à la détente, vivez Marrakech autrement.",
    contact: "Pour toute réservation ou renseignement, adressez-vous à la réception.",
  },
  en: {
    overline: "Experiences",
    title: "Our Activities",
    lede: "From adventure to relaxation, discover Marrakech differently.",
    contact: "For any booking or enquiry, please contact the front desk.",
  },
};

export default function Activities({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="section activities-section" id="activites">
      <div className="wrap">
        <div className="sec-head">
          <span className="overline">{t.overline}</span>
          <h2>{t.title}</h2>
          <p className="lede">{t.lede}</p>
        </div>

        <div className="act-grid">
          {activities.map((act) => (
            <div className="act-card" key={act.nameFr}>
              <div
                className="act-color-bar"
                style={{ background: act.color }}
              />
              <div className="act-body">
                <div className="act-icon">{act.icon}</div>
                <div className="act-name">{lang === "fr" ? act.nameFr : act.nameEn}</div>
                <div className="act-desc">{lang === "fr" ? act.descFr : act.descEn}</div>
                <div className="act-footer">
                  <div>
                    <div className="act-price">{lang === "fr" ? act.priceFr : act.priceEn}</div>
                    <div className="act-price-detail">{lang === "fr" ? act.detailFr : act.detailEn}</div>
                  </div>
                  <div className="act-duration">{lang === "fr" ? act.durationFr : act.durationEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="act-contact-note">{t.contact}</p>
      </div>
    </section>
  );
}
