import { shop, openingHours, contact } from "../content";
import Icon from "./Icon";
import styles from "./Hero.module.css";

const pills = ["Skomakeri", "Nyckelservice", "Skrädderi", "Kemtvätt"];

export default function Hero() {
  const today = new Date().getDay(); // 0 = söndag
  const todayIndex = today === 0 ? 2 : today === 6 ? 1 : 0;

  return (
    <section id="hem" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Hej och välkommen in!</span>
          <h1 className={styles.title}>
            Vi lagar, förnyar &amp; tar hand om det du håller kärt!
          </h1>
          <p className={styles.lead}>{shop.intro}</p>

          <ul className={styles.pills}>
            {pills.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="#priser" className="btn btn--primary">
              Se prislistan
              <Icon name="arrow" />
            </a>
            <a href="#hitta" className="btn btn--ghost">
              <Icon name="pin" />
              Hitta hit
            </a>
          </div>

          <p className={styles.note}>
            Ingen tidsbokning – kom bara förbi disken, så löser vi det
            tillsammans.
          </p>
        </div>

        <aside className={styles.card} aria-label="Öppettider">
          <div className={styles.cardHead}>
            <span className={styles.cardIcon} aria-hidden="true">
              <Icon name="clock" />
            </span>
            <h3 className={styles.cardTitle}>Öppettider</h3>
          </div>
          <ul className={styles.hours}>
            {openingHours.map((row, i) => (
              <li
                key={row.day}
                className={i === todayIndex ? styles.today : ""}
              >
                <span>{row.day}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
          <a
            className={styles.cardCall}
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
          >
            <Icon name="phone" />
            {contact.phone}
          </a>
        </aside>
      </div>
    </section>
  );
}
