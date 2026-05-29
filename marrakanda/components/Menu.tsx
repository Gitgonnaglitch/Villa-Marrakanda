type Lang = "fr" | "en";

const starters = [
  "Salade Maïs Thon Haricot Riz",
  "Trio de Salades marocaines mixtes",
  "Salade de mozzarella et tomates",
  "Soupe harira marocaine",
  "Velouté de légumes",
  "Salade Niçoise",
];

const moroccan = [
  "Couscous",
  "Seffa",
  "Tanjia",
  "Tajine au poulet et au citron",
  "Tajine de bœuf et pruneaux",
  "Tajine végétarien",
  "Grillades de poulet",
  "Grillades Mixtes",
  "Pastilla individuelle — Poulet ou Poisson",
];

const western = [
  "Pizza Margarita",
  "Pizza végétarienne",
  "Pizza Viande Hachée",
  "Pâtes bolognaise",
  "Pâtes champignons crémeux",
  "Gratin Viande hachée",
  "Gratin Poulet",
];

const kids = [
  "Cheeseburger avec frites",
  "Cordon Bleu avec frites",
  "Nuggets avec frites",
];

const desserts = [
  "Mhalabia",
  "Rouleaux de printemps au riz et à la cannelle",
  "Salade de fruits de saison",
  "Sélection de biscuits marocains avec thé à la menthe",
  "Tarte aux pommes",
  "Crème caramel",
  "Fruits de saison",
];

const copy = {
  fr: {
    overline: "Restauration",
    title: "Notre Menu",
    lede: "Une cuisine généreuse entre saveurs marocaines et touches méditerranéennes.",
    cat_starters: "Entrées",
    cat_moroccan: "Plats marocains",
    cat_western: "Plats occidentaux",
    cat_kids: "Menu Enfant",
    cat_dessert: "Desserts",
    tarifs_title: "Formules & Tarifs",
    adult_full_label: "Adulte — Formule Complète",
    adult_full_desc: "Entrée + Plat + Dessert",
    adult_part_label: "Adulte — Formule Partielle",
    adult_part_desc: "Entrée + Plat  ou  Plat + Dessert",
    child_full_label: "Enfant — Formule Complète",
    child_full_desc: "Moins de 12 ans · Entrée + Plat + Dessert",
    child_part_label: "Enfant — Formule Partielle",
    child_part_desc: "Moins de 12 ans · Entrée + Plat  ou  Plat + Dessert",
    notice: [
      "Merci de déclarer toute allergie alimentaire avant la commande.",
      "Tout le groupe choisit le même plat, entrée et dessert.",
      "Toute demande supplémentaire fera l'objet d'une facturation additionnelle.",
    ],
    per_person: "€ / pers.",
  },
  en: {
    overline: "Dining",
    title: "Our Menu",
    lede: "A generous cuisine blending Moroccan flavours with Mediterranean touches.",
    cat_starters: "Starters",
    cat_moroccan: "Moroccan Dishes",
    cat_western: "Western Dishes",
    cat_kids: "Kids' Menu",
    cat_dessert: "Desserts",
    tarifs_title: "Set Menus & Pricing",
    adult_full_label: "Adult — Full Set Menu",
    adult_full_desc: "Starter + Main + Dessert",
    adult_part_label: "Adult — Partial Set Menu",
    adult_part_desc: "Starter + Main  or  Main + Dessert",
    child_full_label: "Child — Full Set Menu",
    child_full_desc: "Under 12 · Starter + Main + Dessert",
    child_part_label: "Child — Partial Set Menu",
    child_part_desc: "Under 12 · Starter + Main  or  Main + Dessert",
    notice: [
      "Please declare any food allergies before ordering.",
      "All guests at the table choose the same dish, starter and dessert.",
      "Any additional requests will be charged separately.",
    ],
    per_person: "€ / person",
  },
};

function CategoryCard({
  title,
  items,
  cls,
  icon,
}: {
  title: string;
  items: string[];
  cls: string;
  icon: string;
}) {
  return (
    <div className={`menu-category ${cls}`}>
      <div className="cat-header">
        <span style={{ fontSize: "1.3rem" }}>{icon}</span>
        <h3>{title}</h3>
      </div>
      <ul className="menu-items-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item} className="menu-item-row">
            <span className="item-name">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Menu({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="section menu-section" id="menu">
      <div className="wrap">
        <div className="sec-head">
          <span className="overline">{t.overline}</span>
          <h2>{t.title}</h2>
          <p className="lede">{t.lede}</p>
        </div>

        <div className="menu-grid">
          <CategoryCard title={t.cat_starters} items={starters} cls="cat-starters" icon="🥗" />
          <CategoryCard title={t.cat_moroccan} items={moroccan} cls="cat-moroccan" icon="🏺" />
          <CategoryCard title={t.cat_western}  items={western}  cls="cat-western"  icon="🍕" />
          <CategoryCard title={t.cat_kids}     items={kids}     cls="cat-kids"     icon="⭐" />
          <CategoryCard title={t.cat_dessert}  items={desserts} cls="cat-dessert"  icon="🍮" />
        </div>

        {/* Tarifs */}
        <div className="tarifs-block">
          <h3>{t.tarifs_title}</h3>
          <div className="tarifs-grid">
            <div className="tarif-card">
              <div className="tarif-label">{t.adult_full_label}</div>
              <div className="tarif-price">15 <span className="unit">{t.per_person}</span></div>
              <div className="tarif-desc">{t.adult_full_desc}</div>
            </div>
            <div className="tarif-card">
              <div className="tarif-label">{t.adult_part_label}</div>
              <div className="tarif-price">12 <span className="unit">{t.per_person}</span></div>
              <div className="tarif-desc">{t.adult_part_desc}</div>
            </div>
            <div className="tarif-card">
              <div className="tarif-label">{t.child_full_label}</div>
              <div className="tarif-price">8 <span className="unit">{t.per_person}</span></div>
              <div className="tarif-desc">{t.child_full_desc}</div>
            </div>
            <div className="tarif-card">
              <div className="tarif-label">{t.child_part_label}</div>
              <div className="tarif-price">6 <span className="unit">{t.per_person}</span></div>
              <div className="tarif-desc">{t.child_part_desc}</div>
            </div>
          </div>

          <div className="menu-notice" style={{ marginTop: "var(--sp-5)" }}>
            {t.notice.map((n, i) => (
              <span key={i}>ℹ️ {n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
