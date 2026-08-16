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
  components/           ← Hero, Services, Prices (flikar), Location, Contact …
  index.css            ← färgtema och globala stilar
```
