import { contact, mapEmbedUrl, mapDirectionsUrl, openingHours } from "../content";
import Icon from "./Icon";
import styles from "./Location.module.css";

export default function Location() {
  const { street, zip, city } = contact.address;

  return (
    <section id="hitta" className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Hitta hit</span>
          <h2>Var vi ligger</h2>
          <p>Välkommen in till oss! Centralt beläget i Billdal.</p>
        </div>

        <div className={styles.wrap}>
          <div className={styles.mapBox}>
            <iframe
              title={`Karta till ${street}, ${city}`}
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className={styles.info}>
            <div className={styles.row}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name="pin" />
              </span>
              <div>
                <h3 className={styles.rowTitle}>Adress</h3>
                <p className={styles.rowText}>
                  {street}
                  <br />
                  {zip} {city}
                </p>
              </div>
            </div>

            <div className={styles.row}>
              <span className={styles.icon} aria-hidden="true">
                <Icon name="clock" />
              </span>
              <div>
                <h3 className={styles.rowTitle}>Öppettider</h3>
                {openingHours.map((o) => (
                  <p key={o.day} className={styles.rowText}>
                    {o.day}: {o.time}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noreferrer"
              className={`btn btn--accent ${styles.dirBtn}`}
            >
              <Icon name="pin" />
              Vägbeskrivning
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
