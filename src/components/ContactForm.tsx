import { useState } from "react";
import type { FormEvent } from "react";
import { contact, contactForm } from "../content";
import Icon from "./Icon";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "sent" | "error";

// Mottagaren sätts med miljövariabeln VITE_FORMSUBMIT_CODE (se .env.local),
// så mejladressen finns varken i koden eller på sidan.
const endpoint = contactForm.code
  ? `https://formsubmit.co/ajax/${encodeURIComponent(contactForm.code)}`
  : "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Utan mottagarkod skickas inget – då visar vi hellre inget formulär alls
  // än ett som tyst slutar fungera. I utvecklingsläge påminner vi om varför.
  if (!endpoint) {
    if (!import.meta.env.DEV) return null;
    return (
      <p className={styles.devNote}>
        Kontaktformuläret är dolt: <code>VITE_FORMSUBMIT_CODE</code> saknas i{" "}
        <code>.env.local</code>. Se README.md → Kontaktformulär.
      </p>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={`${styles.panel} ${styles.done}`} aria-live="polite">
        <span className={styles.doneIcon} aria-hidden="true">
          <Icon name="mail" />
        </span>
        <h3>{contactForm.successTitle}</h3>
        <p>{contactForm.successText}</p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => setStatus("idle")}
        >
          Skicka ett till
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <div className={styles.panel}>
      <div className={styles.head}>
        <h3>{contactForm.title}</h3>
        <p>{contactForm.text}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* FormSubmits egna inställningar – skickas med, syns inte. */}
        <input type="hidden" name="_subject" value={contactForm.subject} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {/* Honungsfälla mot skräppost: människor ser den inte, robotar fyller i. */}
        <input
          type="text"
          name="_honey"
          className={styles.honey}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>Namn</span>
            <input
              type="text"
              name="Namn"
              required
              autoComplete="name"
              placeholder="Ditt namn"
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>E-post</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="din@mejl.se"
            />
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>
            Telefon <em>(valfritt)</em>
          </span>
          <input
            type="tel"
            name="Telefon"
            autoComplete="tel"
            placeholder="07X-XXX XX XX"
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Meddelande</span>
          <textarea
            name="Meddelande"
            rows={5}
            required
            placeholder="Vad kan vi hjälpa dig med?"
          />
        </label>

        <div className={styles.actions}>
          <button
            type="submit"
            className="btn btn--accent"
            disabled={sending}
            aria-busy={sending}
          >
            <Icon name="mail" />
            {sending ? "Skickar…" : contactForm.buttonLabel}
          </button>
          <span className={styles.small}>
            Vi använder uppgifterna bara för att svara dig.
          </span>
        </div>

        <p className={styles.status} role="status" aria-live="polite">
          {status === "error" ? (
            <span className={styles.error}>
              {contactForm.errorText}{" "}
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                {contact.phone}
              </a>
            </span>
          ) : null}
        </p>
      </form>
    </div>
  );
}
