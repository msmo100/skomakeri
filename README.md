# Sko & Nyckelservice – hemsida

One-page-sida byggd med **Vite + React + TypeScript** (vanlig CSS med CSS Modules, inget ramverk).
Tema: blått & vitt (skylten) + varm grädde/orange (prislistorna).

## Kör lokalt

```bash
npm install      # första gången
npm run dev      # startar på http://localhost:5173
```

## Ändra innehåll

Allt innehåll (namn, adress, telefon, öppettider, tjänster och ALLA priser)
ligger på ETT ställe:

**`src/content.ts`** – öppna, byt ut texterna, spara. Sidan uppdateras direkt.

Priserna är indelade i två flikar (`priceTabs`):
- **Sko, nyckel & skrädderi** – Skomakeri + Skrädderi/reparation
- **Kemtvätt & tvätt** – kostymer, ytterplagg, skinn, textil, mattor m.m.

Lägg till/ta bort rader fritt. Skriv `"från 150:-"` så visas "från" i mindre stil.

### Google Maps-kartan

1. Gå till [maps.google.com](https://maps.google.com) och sök din adress.
2. Klicka **Dela → Bädda in en karta**.
3. Kopiera adressen som står inuti `src="..."`.
4. Klistra in den som `mapEmbedUrl` i `src/content.ts`.

## Kontaktformulär

Formuläret i "Hör av dig"-sektionen skickar mejl via den kostnadsfria tjänsten
**FormSubmit** (formsubmit.co) – ingen egen server behövs. Mottagaradressen
står varken på sidan eller i koden, utan i filen `.env.local` (som aldrig
följer med till GitHub):

```
VITE_FORMSUBMIT_CODE=din-hemliga-kod
```

### Aktivera (görs en gång)

1. Skriv in mottagarens mejladress i `.env.local`, starta sidan
   (`npm run dev`) och skicka ett testmeddelande via formuläret.
2. FormSubmit mejlar en aktiveringslänk till adressen – klicka på den.
3. Du får då en **hemlig kod** (en lång slumpsträng). Byt ut adressen mot koden
   i `.env.local`:

   ```
   VITE_FORMSUBMIT_CODE=din-hemliga-kod
   ```

   Efter det finns mejladressen ingenstans i den publicerade sidan – bara koden,
   som bara FormSubmit kan koppla till adressen.
4. Kör `npm run build` igen så att den nya koden kommer med.

### Vid publicering

Miljövariabeln måste finnas även hos webbhotellet:

- **Netlify / Vercel / Cloudflare Pages:** lägg till `VITE_FORMSUBMIT_CODE`
  under projektets *Environment variables* och bygg om.
- **Vanligt webbhotell (FTP):** `.env.local` används vid `npm run build` på din
  dator – ladda sedan upp `dist/` som vanligt.

Saknas variabeln visas **inget formulär alls** på sidan (telefon- och
adresskorten finns kvar). Det är avsiktligt – bättre än ett formulär som tyst
slutar skicka.

### Byta mottagare

Byt värdet i `.env.local` (och hos webbhotellet) och gör om aktiveringen ovan.
Texterna i formuläret ändrar du i `src/content.ts` under `contactForm`.

## Publicera (bygg för webben)

```bash
npm run build    # skapar mappen dist/
```

Ladda upp innehållet i `dist/` till valfritt webbhotell, eller använd
**Netlify**, **Vercel** eller **Cloudflare Pages** gratis (dra & släpp
`dist`-mappen, eller koppla ett Git-repo).

## Struktur

```
src/
  content.ts            ← ändra allt innehåll & priser här
  components/           ← Hero, Services, Prices (flikar), Location, Contact,
                          ContactForm …
.env.local              ← mottagare för kontaktformuläret (delas inte)
  index.css            ← färgtema och globala stilar
```
