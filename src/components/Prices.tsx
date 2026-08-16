import { useState, type CSSProperties } from "react";
import { priceTabs } from "../content";
import styles from "./Prices.module.css";

export default function Prices() {
  const [active, setActive] = useState(priceTabs[0].id);
  const current = priceTabs.find((t) => t.id === active) ?? priceTabs[0];

  return (
    <section id="priser" className="section section--paper">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Vad kostar det?</span>
          <h2>Priser</h2>
          <p>
            Ungefärliga priser inkl. moms. Vi ger dig alltid ett exakt pris på
            plats – välkommen in med ditt plagg för en offert.
          </p>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Priskategorier">
          {priceTabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={tab.id === active}
              className={`${styles.tab} ${
                tab.id === active ? styles.tabActive : ""
              }`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={styles.masonry}
          style={
            {
              "--cols": String(Math.min(3, current.groups.length)),
            } as CSSProperties
          }
        >
          {current.groups.map((group) => (
            <div key={group.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <ul className={styles.list}>
                {group.items.map((item) => {
                  const from = item.price.toLowerCase().startsWith("från");
                  const price = from ? item.price.slice(4).trim() : item.price;
                  return (
                    <li key={item.name}>
                      <span className={styles.name}>{item.name}</span>
                      <span className={styles.dots} aria-hidden="true" />
                      <span className={styles.price}>
                        {from && <em>från </em>}
                        {price}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Priserna är vägledande och kan variera beroende på material och skick.
          Har du en fråga? <a href="#kontakt">Kontakta oss</a> gärna.
        </p>
      </div>
    </section>
  );
}
