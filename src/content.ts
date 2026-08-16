// =============================================================================
//  INNEHÅLL — ändra allt här. Ingen kodkunskap behövs, byt bara ut texterna.
// =============================================================================

export const shop = {
  name: "Sko & Nyckelservice | Billdal",       // Butikens namn
  short: "Sko & Nyckelservice | Billdal",             // Kort namn (navbar/footer)
  tagline: "Skomakeri, nyckelservice, skrädderi & kemtvätt",
  intro:
    "Din lokala hantverkare för sko- och nyckelservice, skräddning och " +
    "kemtvätt. Vi lagar, förnyar och tar hand om det du håller kärt – med " +
    "hantverksstolthet och personlig service över disk.",
};

export const contact = {
  phone: "073-698 02 50",
  address: {
    street: "Kungsporten 1G",
    zip: "427 50",
    city: "Billdal",
  },
};

export const openingHours = [
  { day: "Måndag–Fredag", time: "09:00 – 18:00" },
  { day: "Lördag", time: "09:00 – 14:00" },
  { day: "Söndag", time: "Stängt" },
];

// Kort presentation av tjänsterna (visas i "Tjänster"-sektionen).
export const services = [
  {
    icon: "shoe",
    title: "Skomakeri",
    text: "Klackning, sulning, lädersulning, putsning och lagning – vi ger dina skor nytt liv.",
  },
  {
    icon: "key",
    title: "Nyckelservice",
    text: "Nyckelkopiering på minuten för hem, kontor och fastighet.",
  },
  {
    icon: "scissors",
    title: "Skrädderi & reparation",
    text: "Kortning, uppläggning, byte av dragkedja och knappar – vi ändrar så det sitter.",
  },
  {
    icon: "hanger",
    title: "Kemtvätt",
    text: "Kostym, klänning, ytterplagg, skinn och päls – professionell kemtvätt med omsorg.",
  },
  {
    icon: "bed",
    title: "Textil & hem",
    text: "Täcken, kuddar, madrasser, gardiner och möbelklädsel tvättas fräscha.",
  },
  {
    icon: "rug",
    title: "Mattvätt",
    text: "Trasmattor, Wilton, äkta mattor och Kinamattor – varsam tvätt per kvadratmeter.",
  },
];

// Google Maps.
export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2140.0762202790957!2d11.958373977197283!3d57.56215465119975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464fec3884b2bbad%3A0xdc549b42a3f49402!2sKungsporten%201G%2C%20427%2050%20Billdal!5e0!3m2!1ssv!2sse!4v1786718926180!5m2!1ssv!2sse";

// Länk som öppnar vägbeskrivning i Google Maps
export const mapDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Kungsporten+1G,+427+50+Billdal";

// =============================================================================
//  PRISER — indelat i två flikar. Lägg till/ta bort rader fritt.
// =============================================================================

export type PriceItem = { name: string; price: string };
export type PriceGroup = { title: string; items: PriceItem[] };
export type PriceTab = { id: string; label: string; groups: PriceGroup[] };

export const priceTabs: PriceTab[] = [
  {
    id: "sko",
    label: "Sko, nyckel & skrädderi",
    groups: [
      {
        title: "Skomakeri",
        items: [
          { name: "Klackning, dam", price: "260:-" },
          { name: "Klackning, herr", price: "280:-" },
          { name: "Sulning & klackning, dam", price: "380:-" },
          { name: "Sulning & klackning, herr", price: "400:-" },
          { name: "Lädersulning", price: "650:-" },
          { name: "Tåbitar", price: "160:-" },
          { name: "Bakfoder skor", price: "220:-/st" },
          { name: "Putsning", price: "180:-" },
          { name: "Reparation dragkedja", price: "350:-/st" },
          { name: "Inläggssula, vanlig", price: "90:-" },
          { name: "Inläggssula, läder", price: "180:-" },
          { name: "Nycklar", price: "från 150:-" },
        ],
      },
      {
        title: "Skrädderi & reparation",
        items: [
          { name: "Byxor", price: "200:-" },
          { name: "Skor", price: "280:-/st" },
          { name: "Jacka", price: "400:-" },
          { name: "Klänning", price: "360:-" },
          { name: "Overall", price: "180:-" },
          { name: "Kortning byxor", price: "140:-/st" },
          { name: "Benvidd, båda sidor", price: "480:-/st" },
          { name: "Kortning klänning", price: "400:-" },
          { name: "Korta skjorta", price: "180:-" },
          { name: "Ärmkortning till kavaj", price: "360:-/st" },
          { name: "Kortning jacka", price: "360:-/st" },
          { name: "Knappar inkl. reparation", price: "100:-/st" },
          { name: "Kortning av gardin", price: "180:-/st" },
        ],
      },
    ],
  },
  {
    id: "kemtvatt",
    label: "Kemtvätt & tvätt",
    groups: [
      {
        title: "Kostymer & dräkter",
        items: [
          { name: "Kostym, dräkt", price: "380:-" },
          { name: "Kavaj", price: "210:-" },
          { name: "Byxa, kjol", price: "200:-" },
          { name: "Väst, kortbyxa", price: "150:-" },
          { name: "Tröja, kofta", price: "190:-" },
          { name: "Frack", price: "450:-" },
          { name: "Smoking", price: "400:-" },
          { name: "Slips, fluga, scarf", price: "150:-" },
          { name: "Klänning", price: "340:-" },
          { name: "Klänning (lång)", price: "400:-" },
          { name: "Aftonklänning", price: "600:-" },
          { name: "Brudklänning", price: "från 700:-" },
          { name: "Dopklänning", price: "340:-" },
          { name: "Skjorta", price: "60:-" },
          { name: "Skjortor, 5 st", price: "150:-" },
          { name: "Skjorta, vikt", price: "75:-" },
          { name: "Frackskjorta", price: "120:-" },
        ],
      },
      {
        title: "Ytterplagg",
        items: [
          { name: "Jacka", price: "från 300:-" },
          { name: "Kappa, rock", price: "380:-" },
          { name: "Dunjacka", price: "460:-" },
          { name: "Dunjacka, extra tjock", price: "600:-" },
          { name: "Mössa", price: "150:-" },
          { name: "Halsduk / sjal", price: "180:-" },
          { name: "Overall", price: "370:-" },
          { name: "Termobyxa", price: "280:-" },
        ],
      },
      {
        title: "Skinn, mocka & päls",
        items: [
          { name: "Skinn-, mockajacka", price: "620:-" },
          { name: "Pälsplagg", price: "760:-" },
          { name: "Pälskappa", price: "1000:-" },
          { name: "Åkpåse, fårskinn", price: "420:-" },
        ],
      },
      {
        title: "Hushållstvätt",
        items: [
          { name: "Dukar", price: "210:-/kg" },
          { name: "Tvätt & tork", price: "130:-/kg" },
          { name: "Handduk", price: "70:-/st" },
          { name: "T-shirt, piké", price: "80:-/st" },
          { name: "Servetter, näsduk", price: "70:-/st" },
          { name: "Lakan / påslakan / örngott", price: "180:-/kg" },
        ],
      },
      {
        title: "Madrass, kudde & täcke",
        items: [
          { name: "Täcke", price: "340:-" },
          { name: "Täcke (dubbel)", price: "480:-" },
          { name: "Duntäcke", price: "430:-" },
          { name: "Duntäcke (dubbel)", price: "550:-" },
          { name: "Kudde", price: "160:-" },
          { name: "Dunkudde", price: "220:-" },
          { name: "Överkast", price: "440:-" },
          { name: "Överkast (dubbel)", price: "570:-" },
          { name: "Filt", price: "280:-" },
          { name: "Sovsäck", price: "400:-" },
          { name: "Madrass", price: "550:-" },
          { name: "Madrass (dubbel)", price: "740:-" },
        ],
      },
      {
        title: "Gardiner & möbelklädsel",
        items: [
          { name: "Gardiner", price: "100:-/m²" },
          { name: "Gardiner (fodrade)", price: "120:-/m²" },
          { name: "Möbelöverdrag", price: "200:-/kg" },
        ],
      },
      {
        title: "Mattor",
        items: [
          { name: "Gummi / trasmattor / plast", price: "160:-/kvm" },
          { name: "Wilton / röllakan", price: "200:-/kvm" },
          { name: "Äkta / ryamattor", price: "240:-/kvm" },
          { name: "Gabbe / kinamattor", price: "250:-/kvm" },
        ],
      },
    ],
  },
];
