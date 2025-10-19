"use client";

import Script from "next/script";

const SETTINGS = {
  sidebar: {
    position: "left",
    width: "300px",
    link: "https://my.meetergo.com/infotechhilfepro",
    buttonText: "Termin buchen",
    buttonIcon: "CalendarPlus2",
    buttonPosition: "middle-left",
    backgroundColor: "#208bee",
    textColor: "#FFFFFF",
  },
};

export default function MeetergoSidebar() {
  return (
    <>
      <Script id="meetergo-config" strategy="afterInteractive">
        {`window.meetergoSettings = ${JSON.stringify(SETTINGS)};`}
      </Script>
      <Script
        id="meetergo-loader"
        src="https://embed.meetergo.com/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
