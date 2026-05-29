"use client";

import { QRCodeSVG } from "qrcode.react";

type Lang = "fr" | "en";

const WIFI_STRING = "WIFI:T:WPA;S:Indoor Wifi;P:Marrakech2025;;";

const copy = {
  fr: {
    overline: "Connexion",
    title: "Wi-Fi",
    lede: "Connectez-vous au réseau de la maison en un scan.",
    name: "Indoor Wifi",
    inst: "Pointez l'appareil photo de votre téléphone sur le QR code pour vous connecter instantanément.",
    steps: [
      "Ouvrez l'appareil photo de votre téléphone",
      "Pointez sur le QR code ci-dessus",
      "Acceptez la connexion Wi-Fi proposée",
    ],
  },
  en: {
    overline: "Connection",
    title: "Wi-Fi",
    lede: "Connect to the house network with a single scan.",
    name: "Indoor Wifi",
    inst: "Point your phone camera at the QR code to connect instantly.",
    steps: [
      "Open your phone's camera app",
      "Point it at the QR code above",
      "Accept the Wi-Fi connection prompt",
    ],
  },
};

export default function Wifi({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section className="section wifi-section" id="wifi">
      <div className="wrap">
        <div className="sec-head">
          <span className="overline">{t.overline}</span>
          <h2>{t.title}</h2>
          <p className="lede">{t.lede}</p>
        </div>

        <div className="wifi-card">
          <div className="qr-box">
            <QRCodeSVG
              value={WIFI_STRING}
              size={176}
              bgColor="#ffffff"
              fgColor="#211810"
              level="M"
            />
          </div>
          <div className="wifi-name">{t.name}</div>
          <div className="wifi-inst">{t.inst}</div>
          <ol className="wifi-steps">
            {t.steps.map((step, i) => (
              <li key={i}>
                <span className="step-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
