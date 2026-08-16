import { useEffect, useState } from "react";
import { shop, contact } from "../content";
import Icon from "./Icon";
import styles from "./Navbar.module.css";

const links = [
  { href: "#hem", label: "Hem" },
  { href: "#tjanster", label: "Tjänster" },
  { href: "#priser", label: "Priser" },
  { href: "#hitta", label: "Hitta hit" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.bar} ${scrolled ? styles.barScrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#hem" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark} aria-hidden="true">
            <Icon name="key" />
          </span>
          <span className={styles.logoText}>{shop.short}</span>
        </a>

        <div className={styles.right}>
          <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              className={styles.mobileCall}
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              onClick={() => setOpen(false)}
            >
              Ring {contact.phone}
            </a>
          </nav>

          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className={`btn btn--accent ${styles.callBtn}`}
          >
            <Icon name="phone" />
            {contact.phone}
          </a>

          <button
            className={styles.burger}
            aria-label="Meny"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
