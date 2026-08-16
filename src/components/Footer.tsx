import { shop, contact } from "../content";
import Icon from "./Icon";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            <Icon name="key" />
          </span>
          <div>
            <div className={styles.name}>{shop.name}</div>
            <div className={styles.tagline}>{shop.tagline}</div>
          </div>
        </div>

        <div className={styles.meta}>
          <p>
            {contact.address.street}, {contact.address.zip}{" "}
            {contact.address.city}
          </p>
          <p>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              {contact.phone}
            </a>
          </p>
        </div>
      </div>
      <div className={styles.copy}>
        © {new Date().getFullYear()} {shop.name}. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
