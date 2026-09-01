import { contact } from "../content";
import Icon from "./Icon";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="kontakt" className="section section--paper">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Säg hej!</span>
          <h2>Hör av dig</h2>
          <p>
            Ring, kom förbi eller skicka ett meddelande – vi svarar gärna på
            dina frågor!
          </p>
        </div>

        <div className={styles.grid}>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className={styles.card}
          >
            <span className={styles.icon} aria-hidden="true">
              <Icon name="phone" />
            </span>
            <span className={styles.label}>Ring oss</span>
            <span className={styles.value}>{contact.phone}</span>
          </a>

          <a href="#hitta" className={styles.card}>
            <span className={styles.icon} aria-hidden="true">
              <Icon name="pin" />
            </span>
            <span className={styles.label}>Besök oss</span>
            <span className={styles.value}>
              {contact.address.street}, {contact.address.city}
            </span>
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
