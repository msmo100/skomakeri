import { services } from "../content";
import Icon from "./Icon";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="tjanster" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Vad vi gör</span>
          <h2>Tjänster under ett tak</h2>
          <p>
            Från nyslagna klackar till nykemtvättad kostym – lämna in, så fixar
            vi det med hantverksstolthet.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <article key={s.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name={s.icon} />
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
