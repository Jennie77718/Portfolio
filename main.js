/* Texte in zwei Sprachen. Reihenfolge in Projekttexten: [Englisch, Deutsch] */
const TEXTS = {
  en: {
    rights:
      "© 2026 Jennifer Brunner and the credited photographers. All images, photos and graphics on this website are protected by copyright. They may not be copied, downloaded, reused, edited, published or used commercially without prior written permission.",
    ytNote:
      'The trailer is hosted on YouTube. It only loads after you click. YouTube/Google may then receive data such as your IP address and set cookies. More in the <a href="datenschutz.html#youtube">privacy policy</a>.',
    nWork: "WORK",
    nAbout: "ABOUT",
    nContact: "CONTACT",

    svc: "SKILLS",
    s1: "<h3>Identity</h3><p>Logo</p><p>Brand Manual</p><p>Naming</p>",
    s2: "<h3>Print</h3><p>Editorial</p><p>Poster</p><p>Typography</p>",
    s3: "<h3>Digital</h3><p>Web Design</p><p>Motion Graphic</p><p>Social Media</p>",
    ai: "I’m Jennie, a fifth semester communication design student at HTW Berlin, working towards a Bachelor of Arts. I’m currently working part-time at the Berliner Grabmal Manufaktur, where I’m in charge of graphic design and manage client communication throughout the design process. I use design to evoke emotion, connect people, and open up new ways of understanding one another.",
    bbId: "ID card",
    bbProps: "A selection of props we designed",
    bbExPr: "Exhibition and premiere",
    bbSet: "Set · KPD District Office",
    bbSetBy: "Drawn by Josefin Steiner",
    bbPost: "Election posters",
    bbStamp: "Examples of stamps and postmarks we produced",
    bbMake: "Making of",
    bbPrem: "Premiere",
    mYear: "Year",
    mCat: "Category",
    mCtx: "Context",
    mRole: "Role",
    mSw: "Software",
    cSub: "Let's connect!",
    fName: "Name",
    fMail: "Email",
    fFrom: "Where are you from?",
    fOrg: "Company (optional)",
    fMsg: "Your message",
    fOk: 'I agree that my details will be used to answer my inquiry. More in the <a href="datenschutz.html#kontakt">privacy policy</a>.',
    fSend: "Send",
    sending: "Sending …",
    sent: "Thank you! Your message has been sent.",
    fail: "That didn't work. Your email program will open instead.",
    missing: "Please fill in the highlighted fields.",
    back: "Back to overview",
    all: "All",
    soon: "Projects in this category are coming soon.",
    backTo: c => "Back to " + c,
    prev: "Previous",
    next: "Next",
    expo: "Exhibition view",
    swipe: "Swipe →",
    swipeClick: "Swipe or click →",
    ytl: "Watch on YouTube ↗",
    film: "Teaser",
    tryH: "Try it yourself!",
    openTool: "Open tool",
    tryTool: "Type a word, pick a waste category and watch your own poster build itself.",
    exhib: "Exhibition",
    play: "Load YouTube video",
    vnote: "Babylon Berlin, season 5 – official trailer (ARD).",
  },
  de: {
    rights:
      "© 2026 Jennifer Brunner und die genannten Fotograf*innen. Alle auf dieser Website gezeigten Bilder, Fotos und Grafiken sind urheberrechtlich geschützt. Sie dürfen ohne vorherige schriftliche Genehmigung nicht kopiert, heruntergeladen, weiterverwendet, bearbeitet, veröffentlicht oder kommerziell genutzt werden.",
    ytNote:
      'Der Trailer liegt bei YouTube. Er wird erst nach deinem Klick geladen. Dabei können Daten wie deine IP-Adresse an YouTube/Google übertragen und Cookies gesetzt werden. Mehr in der <a href="datenschutz.html#youtube">Datenschutzerklärung</a>.',
    nWork: "ARBEITEN",
    nAbout: "ÜBER MICH",
    nContact: "KONTAKT",

    svc: "KENNTNISSE",
    s1: "<h3>Identität</h3><p>Logo</p><p>Brand Manual</p><p>Naming</p>",
    s2: "<h3>Print</h3><p>Editorial</p><p>Plakat</p><p>Typografie</p>",
    s3: "<h3>Digital</h3><p>Webdesign</p><p>Motion Graphic</p><p>Social Media</p>",
    ai: "Ich bin Jennie und studiere im fünften Semester Kommunikationsdesign an der HTW Berlin mit dem Ziel Bachelor of Arts. Derzeit arbeite ich in Teilzeit bei der Berliner Grabmal Manufaktur, wo ich für das Grafikdesign verantwortlich bin und die Kundenkommunikation während des gesamten Gestaltungsprozesses betreue. Ich nutze Design, um Emotionen zu wecken, Menschen zu verbinden und neue Wege zu öffnen, einander zu verstehen.",
    bbId: "Ausweis",
    bbProps: "Eine Auswahl der Requisiten, die wir gestaltet haben",
    bbExPr: "Ausstellung und Premiere",
    bbSet: "Set · KPD-Bezirksbüro",
    bbSetBy: "Gezeichnet von Josefin Steiner",
    bbPost: "Wahlplakate",
    bbStamp: "Beispiele für Briefmarken und Poststempel, die wir hergestellt haben",
    bbMake: "Making-of",
    bbPrem: "Premiere",
    mYear: "Jahr",
    mCat: "Kategorie",
    mCtx: "Kontext",
    mRole: "Rolle",
    mSw: "Software",
    cSub: "Let's connect!",
    fName: "Name",
    fMail: "E-Mail",
    fFrom: "Woher kommst du?",
    fOrg: "Unternehmen (optional)",
    fMsg: "Deine Nachricht",
    fOk: 'Ich bin einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage verwendet werden. Mehr dazu in der <a href="datenschutz.html#kontakt">Datenschutzerklärung</a>.',
    fSend: "Senden",
    sending: "Wird gesendet …",
    sent: "Danke! Deine Nachricht wurde gesendet.",
    fail: "Das hat nicht geklappt. Stattdessen öffnet sich dein E-Mail-Programm.",
    missing: "Bitte fülle die markierten Felder aus.",
    back: "Zurück zur Übersicht",
    all: "Alle",
    soon: "Projekte in dieser Kategorie folgen bald.",
    backTo: c => "Zurück zu " + c,
    prev: "Zurück",
    next: "Weiter",
    expo: "Ausstellungsansicht",
    swipe: "Swipe →",
    swipeClick: "Swipe oder klicken →",
    ytl: "Auf YouTube ansehen ↗",
    film: "Teaser",
    tryH: "Probier es selbst aus!",
    openTool: "Tool öffnen",
    tryTool: "Gib ein Wort ein, wähle eine Abfallkategorie und sieh zu, wie dein eigenes Plakat entsteht.",
    exhib: "Ausstellung",
    play: "YouTube-Video laden",
    vnote: "Babylon Berlin, Staffel 5 – offizieller Trailer (ARD).",
  },
};

/* Bilder und Videos: u = Datei, r = Seitenverhältnis, v = Video, p = Vorschaubild, ph = grauer Platzhalter */
const MEDIA = {
  person1_01: { u: "person1_01.jpg", r: 0.6665 },
  person1_02: { u: "person1_02.jpg", r: 0.6665 },
  person1_03: { u: "person1_03.jpg", r: 0.6665 },
  person1_04: { u: "person1_04.jpg", r: 0.6665 },
  person1_05: { u: "person1_05.jpg", r: 0.6665 },
  person2_01: { u: "person2_01.jpg", r: 0.6665 },
  person2_02: { u: "person2_02.jpg", r: 0.6665 },
  person2_03: { u: "person2_03.jpg", r: 0.6665 },
  person2_04: { u: "person2_04.jpg", r: 0.6665 },
  person2_05: { u: "person2_05.jpg", r: 0.6665 },
  IMG_1069: { u: "IMG_1069.jpg", r: 1.3333 },
  IMG_1073: { u: "IMG_1073.jpg", r: 0.75 },
  bb_01: { u: "bb_01.jpg", r: 1.5003 },
  bb_02: { u: "bb_02.jpg", r: 1.5631 },
  bb_03: { u: "bb_03.jpg", r: 1.5631 },
  bb_04: { u: "bb_04.jpg", r: 1.5631 },
  ph_01: { u: "ph_01.jpg", r: 0.6665 },
  ph_02: { u: "ph_02.jpg?v=2", r: 0.6665 },
  ph_03: { u: "ph_03.jpg", r: 0.6665 },
  mm_v: { u: "muellmaxxing.mp4", r: 1.7778, v: 1, p: "muellmaxxing.jpg" },
  mag_v: { u: "magazin.mp4", r: 1.7778, v: 1, p: "magazin.jpg" },
};

/* Kategorien (hide = nur intern, nicht als Filter sichtbar) */
const CATEGORIES = [
  { n: ["Brand", "Brand"] },
  { n: ["Editorial", "Editorial"] },
  { n: ["Photography", "Fotografie"] },
  { n: ["Poster", "Plakat"] },
  { n: ["Motion", "Motion"] },
  { hide: 1, n: ["Web", "Web"] },
  { hide: 1, n: ["Props", "Requisiten"] },
  { hide: 1, n: ["Brand Campaign", "Markenkampagne"] },
  { hide: 1, n: ["Art Direction", "Art Direction"] },
  { n: ["Print", "Print"] },
];

/* Projekte: o = Reihenfolge, pr/iy/ph/fs/hv/vs/hd = Art der Projektseite */
const PROJECTS = [
  {
    n: "Props Babylon Berlin",
    t: [6, 9],
    pr: 1,
    o: 2,
    y: 2026,
    fr: [
      "Semester project, in partnership with Josefin Steiner and in collaboration with Schein Kollektiv",
      "Semesterprojekt, in Partnerschaft mit Josefin Steiner und in Kollaboration mit Schein Kollektiv",
    ],
    ro: [
      "Type design, concept, layout, print, photography",
      "Schriftentwicklung, Konzept, Layout, Print, Fotografie",
    ],
    sw: "Illustrator, InDesign, Photoshop",
    im: "bb_02",
    st: ["bb_01"],
    bg: "#efe3c8",
    fg: "#000",
    d: [
      [
        "For the fifth season of the series Babylon Berlin, we created graphic props for the KPD district office of the character Liselotte Storch. We worked in collaboration with Schein Kollektiv, a company that produces graphic props for productions such as The Hunger Games and Babylon Berlin.",
        "Our task was to design various documents and printed materials that would fit convincingly into the historical setting shortly before the Nazi seizure of power in 1933. The main challenge was to make the props look new and well preserved while still conveying the characteristic historical and old-fashioned aesthetic of the period.",
      ],
      [
        "Für die fünfte Staffel der Serie Babylon Berlin haben wir grafische Requisiten für das KPD-Bezirksbüro der Figur Liselotte Storch gestaltet. Dabei haben wir mit Schein Kollektiv zusammengearbeitet, einem Unternehmen, das grafische Requisiten für Produktionen wie Die Tribute von Panem und Babylon Berlin herstellt.",
        "Unsere Aufgabe war es, verschiedene Dokumente und Drucksachen zu gestalten, die sich überzeugend in das historische Setting kurz vor der Machtergreifung 1933 einfügen. Die größte Herausforderung bestand darin, die Requisiten neu und gut erhalten wirken zu lassen und trotzdem die typische historische, altmodische Ästhetik der Zeit zu vermitteln.",
      ],
    ],
    nt: [
      "Fourth-semester project, in collaboration with Josefin Steiner.",
      "Projekt im vierten Semester, in Zusammenarbeit mit Josefin Steiner.",
    ],
    hero: "bb_01",
    big: ["bb_02", "bb_03", "bb_04"],
    yt: "ZrMnQizCoOY",
  },
  {
    n: "Inyeon",
    t: [1, 9],
    iy: 1,
    o: 3,
    y: 2026,
    fr: [
      "Three-hour exercise to develop a handful of layouts",
      "Dreistündige Übung, um eine Handvoll Layouts zu entwickeln",
    ],
    ro: [
      "Concept, text, layout, photography (all photos are my own), print",
      "Konzept, Text, Layout, Fotografie (alle Fotos sind von mir), Print",
    ],
    sw: "InDesign, Photoshop, Lightroom",
    st: ["iy_cover"],
    bg: "#acb6be",
    fg: "#000",
    d: [
      [
        "This project was an exercise for a bigger editorial project, where we had three hours to design a week from our lives in at least twelve layouts.\\nI included it in my portfolio to give insight into my personal experiences.",
      ],
      [
        "Dieses Projekt war eine Übung für ein größeres Editorial-Projekt: Wir hatten drei Stunden Zeit, eine Woche aus unserem Leben in mindestens zwölf Layouts zu gestalten.\\nIch habe es in mein Portfolio aufgenommen, um Einblick in meine persönlichen Erfahrungen zu geben.",
      ],
    ],
  },
  {
    n: "Dasein",
    t: [2],
    ph: 1,
    o: 4,
    y: 2025,
    fr: [
      "End-of-semester submission, photography course, 2 weeks",
      "Endsemesterabgabe, Fotografiekurs, Zeitraum 2 Wochen",
    ],
    ro: ["Photographer, communication", "Fotografin, Kommunikation"],
    sw: "Lightroom",
    st: ["person2_03"],
    im: "person2_03",
    hero: "IMG_1069",
    bg: "#000",
    fg: "#fff",
    d: [
      [
        "Hospice is not only a place of farewell.\\nIt is a place where we encounter life: openly, honestly, and without restraint.\\nMrs. F. and Mr. S. showed me what that truly means. They fill their days with humor and warmth, finding joy in life even during the most difficult moments.",
        "Mr. S. once said, “Sometimes I still hope that something in my mind will click and that everything will be alright again.” Four days later, he passed away.\\nSome words stay with us. So do some people. They remind us how fragile life is and how beautiful it can be when we are still able to feel it.",
      ],
      [
        "Das Hospiz ist nicht nur ein Ort des Abschieds.\\nEs ist ein Ort, an dem wir dem Leben begegnen: offen, ehrlich und ohne Zurückhaltung.\\nFrau F. und Herr S. haben mir gezeigt, was das wirklich bedeutet. Sie füllen ihre Tage mit Humor und Wärme und finden selbst in den schwersten Momenten Freude am Leben.",
        "Herr S. sagte einmal: „Manchmal hoffe ich noch, dass in meinem Kopf etwas klick macht und alles wieder gut wird.“ Vier Tage später ist er gestorben.\\nManche Worte bleiben. Manche Menschen auch. Sie erinnern uns daran, wie zerbrechlich das Leben ist und wie schön es sein kann, solange wir es noch spüren.",
      ],
    ],
  },
  {
    n: "Editorial Shoot",
    t: [2],
    o: 7,
    fs: 1,
    y: 2025,
    fr: ["Semester project, photography", "Semesterprojekt Fotografie"],
    sw: "Lightroom",
    ro: ["Photographer, concept", "Fotografin, Konzept"],
    st: ["ph_02"],
    bg: "#ddd",
    fg: "#000",
    d: [
      [
        "In collaboration with a fashion designer and model, I conceptualized and produced the editorial shoot. As art director and photographer, I developed the visual concept, directed the models and established the project's overall aesthetic.",
        "Drawing on Berlin's nightlife, Joe Strassner and the opulent sensuality of the 1920s, the series explores femininity as confident, playful and self-determined. The imagery portrays women who embrace their sexuality and sensuality for themselves rather than for the gaze of others.",
      ],
      [
        "In Zusammenarbeit mit einer Modedesignerin und einem Model habe ich das Editorial-Shooting konzipiert und produziert. Als Art Director und Fotografin habe ich das visuelle Konzept entwickelt, die Models angeleitet und die Gesamtästhetik des Projekts geprägt.",
        "Inspiriert vom Berliner Nachtleben, von Joe Strassner und der opulenten Sinnlichkeit der 1920er-Jahre erkundet die Serie Weiblichkeit als selbstbewusst, verspielt und selbstbestimmt. Die Bilder zeigen Frauen, die ihre Sexualität und Sinnlichkeit für sich selbst leben und nicht für den Blick anderer.",
      ],
    ],
  },
  {
    n: "Heim",
    t: [2],
    o: 1,
    hd: "ph_03",
    bg: "#ddd",
    fg: "#000",
    d: ["Preview – this project will be uploaded soon.", "Vorschau – dieses Projekt wird bald hochgeladen."],
  },
  {
    n: "Trenn dich",
    t: [3, 4, 0],
    o: 1,
    y: 2026,
    ro: [
      "Concept, strategy, programming, presentation",
      "Konzept, Strategie, Programmieren, Vortrag",
    ],
    sw: "Visual Studio Code",
    tool: "bsr-tool.html",
    film: "bsr-aufruf",
    loops: [
      ["bsr-feed", 0.5625],
      ["bsr-praesentation.jpg", 1.5],
      ["bsr-unsorted", 0.7492],
    ],
    hv: "mm_v",
    st: ["mm_v"],
    bg: "#efe9dc",
    fg: "#000",
    d: [
      [
        "For the BSR, Berlin's city cleaning service, we developed a fictional campaign that aims to raise awareness of waste separation, especially among young people, for whom it will matter more and more as climate change and global warming become increasingly urgent.",
        "At its heart is a generative tool built on the principle of a trash alphabet, which turns words into posters and social media posts. Our vision is for the tool to live on the BSR website, where people from all over Berlin can submit their own ideas and statements, often drawn from youth slang and wordplay around trash and recycling. It can get playful: the name of someone you would happily throw out, or terms like Trash Out instead of Crash Out, Trennungsgrund or Glass Skin.",
        "The tool works with five separate waste categories, including glass, where the sorting rules have become stricter this year, packaging and organic waste.",
      ],
      [
        "Für die BSR, die Berliner Stadtreinigung, haben wir eine fiktive Kampagne entwickelt, die vor allem junge Menschen für Mülltrennung sensibilisieren soll – ein Thema, das durch Klimawandel und Erderwärmung immer wichtiger wird.",
        "Herzstück ist ein generatives Tool nach dem Prinzip eines Müll-Alphabets, das Wörter in Plakate und Social-Media-Posts verwandelt. Unsere Vision: Das Tool lebt auf der BSR-Website, und Menschen aus ganz Berlin reichen eigene Ideen und Statements ein, oft aus Jugendsprache und Wortspielen rund um Müll und Recycling. Das darf auch verspielt sein: der Name von jemandem, den man gern entsorgen würde, oder Begriffe wie Trash Out statt Crash Out, Trennungsgrund oder Glass Skin.",
        "Das Tool arbeitet mit fünf getrennten Abfallkategorien, darunter Glas, bei dem die Trennregeln dieses Jahr strenger geworden sind, Verpackungen und Bioabfall.",
      ],
    ],
    nt: [
      "Short-term project week in the fifth semester, in collaboration with Philine Krüger. Made in three days.",
      "Kurzprojektwoche im fünften Semester, in Zusammenarbeit mit Philine Krüger. Entstanden in drei Tagen.",
    ],
  },
  {
    n: "Infektionskrankheiten",
    t: [1, 9],
    o: 8,
    y: 2025,
    fm: ["Magazine", "Magazin"],
    ro: ["Layout, print, concept", "Layout, Print, Konzept"],
    sw: "InDesign",
    vs: "mag_v",
    st: ["mag_v"],
    after: "magazin-uebersicht.jpg",
    bg: "#f5bfd9",
    fg: "#000",
    d: [
      [
        "For our end-of-semester project, we were asked to design a magazine or book around a given text. We chose infectious diseases, a subject that reaches far beyond hospitals and clinics.",
        "The magazine explains, in plain language, what infections are, how they spread, which diseases have shaped history and how we can protect ourselves. Bold typography, pink and black and a mix of photography and illustration are meant to make the topic inviting: something to leaf through with curiosity, not fear.",
      ],
      [
        "Für unser Endsemesterprojekt sollten wir zu einem vorgegebenen Text ein Magazin oder Buch gestalten. Wir haben uns für Infektionskrankheiten entschieden, ein Thema, das weit über Krankenhäuser und Kliniken hinausgeht.",
        "Das Magazin erklärt in einfacher Sprache, was Infektionen sind, wie sie sich verbreiten, welche Krankheiten Geschichte geschrieben haben und wie wir uns schützen können. Kräftige Typografie, Pink und Schwarz und eine Mischung aus Fotografie und Illustration sollen das Thema einladend machen: zum neugierigen Durchblättern, nicht zum Fürchten.",
      ],
    ],
    nt: [
      "End-of-semester project, in partnership with Marlene Müller, supervised by Prof. Jürgen Huber.",
      "Endsemesterprojekt, in Partnerschaft mit Marlene Müller, unter Betreuung von Prof. Jürgen Huber.",
    ],
  },
  {
    n: "NO.72",
    t: [0],
    o: 5,
    hd: "ph_m72",
    st: ["ph_m72"],
    bg: "#ececec",
    fg: "#000",
    d: ["Preview – this project will be uploaded soon.", "Vorschau – dieses Projekt wird bald hochgeladen."],
  },
];
Object.assign(MEDIA, {
  iy_cover: { u: "inyeon-mockup.jpg", r: 1.3333 },
  ph_m72: { u: "", r: 0.8, ph: 1 }, // Platzhalter, bis das Foto da ist
});
/* Fehlt die deutsche Fassung, wird die englische angezeigt */
PROJECTS.forEach(p =>
  ["d", "nt", "fr", "ro", "fm"].forEach(k => {
    if (Array.isArray(p[k]) && p[k].length === 1) p[k].push(p[k][0]);
  }),
);

/* Falls Bilder/Videos doch in einem Unterordner liegen (z. B. fs/), werden sie dort gesucht. */
document.addEventListener(
  "error",
  e => {
    const el = e.target;
    if (!el || !/^(IMG|VIDEO)$/.test(el.tagName)) return;
    const src = el.getAttribute("src");
    if (!src || /^(https?:|data:|blob:)/.test(src)) return;
    const dirs = ["fs/", "im/", "media/", "media/fs/", "media/im/"],
      k = +(el.dataset.fb || 0);
    if (k >= dirs.length) return;
    el.dataset.fb = k + 1;
    el.setAttribute("src", dirs[k] + src.split("/").pop());
  },
  true,
);

const placeholderTile = n => `<div class="phc"><span>${n}</span></div>`;
const $ = s => document.querySelector(s);
let lang = "en",
  lastCat = null;
const langIndex = () => (lang === "de" ? 1 : 0),
  categoryName = i => CATEGORIES[i].n[langIndex()],
  tags = p =>
    p.t
      .filter(i => !CATEGORIES[i].hide)
      .map(categoryName)
      .join(", "),
  T = k => TEXTS[lang][k];

let activeCategory = null,
  catOpen = false;
function workCard(p, n, i) {
  const m = p.st && MEDIA[p.st[0]],
    ar = m ? m.r : [3 / 4, 1, 4 / 3, 4 / 5][i % 4];
  const media = m
    ? m.ph
      ? placeholderTile(p.n)
      : m.v
        ? `<video src="${m.u}" poster="${m.p || ""}" autoplay muted loop playsinline preload="auto"></video>`
        : `<img src="${m.u}" alt="${p.n}" loading="lazy" draggable="false">`
    : `<div class="mph" style="background:${p.bg};color:${p.fg}"><span>${p.n}</span></div>`;
  return {
    ar,
    html: `<a class="mc" href="#work/${n}"><div class="mm" style="aspect-ratio:${ar}">${media}</div><div class="mt"><b>${p.n}</b><span>${meta(p)}</span></div></a>`,
  };
}
function work() {
  {
    const ops = [null, ...CATEGORIES.map((_, i) => i).filter(i => !CATEGORIES[i].hide)]
        .map(
          (i, j) =>
            `<a style="--i:${j}" href="#work${i == null ? "" : "/cat/" + (i + 1)}"${(i == null ? activeCategory == null : activeCategory === i) ? ' aria-current="true"' : ""}>${i == null ? T("all") : categoryName(i)}</a>`,
        )
        .join(""),
      ce = $("#cats");
    ce.innerHTML = `<button type="button" class="ctog" aria-expanded="${catOpen}">${T("cats")}<i aria-hidden="true"></i></button><div class="copts">${ops}</div>`;
    ce.classList.toggle("open", catOpen);
    ce.querySelector(".ctog").onclick = () => {
      catOpen = !catOpen;
      ce.classList.toggle("open", catOpen);
      ce.querySelector(".ctog").setAttribute("aria-expanded", catOpen);
    };
  }
  if (activeCategory == null) {
    fisheye();
    return;
  }
  const list = PROJECTS.map((p, i) => [p, i + 1])
    .filter(([p]) => p.st && MEDIA[p.st[0]] && p.t.includes(activeCategory))
    .sort((a, b) => (a[0].o || 99) - (b[0].o || 99) || a[1] - b[1]);
  const rows = [];
  for (let i = 0; i < list.length; i += 4) rows.push(list.slice(i, i + 4));
  let n = 0;
  const html = rows
    .map(row => {
      const cards = row.map(([p, k]) => ({ ...workCard(p, k, n++), r: MEDIA[p.st[0]].v ? 1.5 : MEDIA[p.st[0]].r })),
        sum = cards.reduce((a, c) => a + c.r, 0);
      return `<div class="jrow" style="max-width:calc(${sum.toFixed(3)} * 40vh + ${(cards.length - 1) * 3}vw)">${cards.map(c => `<div style="flex:${c.r} 1 0">${c.html}</div>`).join("")}</div>`;
    })
    .join("");
  $("#stream").innerHTML = rows.length
    ? `<div class="mas2">${html}</div>`
    : `<p class="msoon">${T("soon")}</p>`;
  document.querySelectorAll("#stream .mc").forEach((e, i) => {
    e.style.setProperty("--d", (i % 8) * 0.06 + "s");
  });
}

/* Work · All: eine Spalte, Fisheye-Scroll – Bilder ploppen in der Mitte stark auf und schrumpfen beim Wegscrollen */
const ORDER = [
  "Trenn dich",
  "Props Babylon Berlin",
  "NO.72",
  "Inyeon",
  "Dasein",
  "Editorial Shoot",
  "Infektionskrankheiten",
];
let feRaf = 0;
function fisheye() {
  const items = ORDER.map(n => {
    const i = PROJECTS.findIndex(p => p.n === n);
    return i < 0 ? null : [PROJECTS[i], i + 1];
  }).filter(x => x && MEDIA[x[0].st[0]]);
  const media = ([p]) => {
    const m = MEDIA[p.st[0]];
    return m.ph
      ? placeholderTile(p.n)
      : m.v
        ? `<video src="${m.u}" poster="${m.p || ""}" autoplay muted loop playsinline preload="auto"></video>`
        : `<img src="${m.u}" alt="${p.n}" draggable="false">`;
  };
  $("#stream").innerHTML =
    `<div class="fe" id="fe"><div class="fe-st" id="fest">${items.map((x, k) => `<a class="fe-i" href="#work/${x[1]}" data-r="${MEDIA[x[0].st[0]].r || 1.5}">${media(x)}</a>`).join("")}
 <p class="fe-cap" id="fecap"></p><ol class="fe-n">${items.map((x, k) => `<li><a href="#work/${x[1]}">${x[0].n}</a></li>`).join("")}</ol></div></div>`;
  const fe = $("#fe"),
    st = $("#fest"),
    els = [...st.querySelectorAll(".fe-i")],
    names = [...st.querySelectorAll(".fe-n li")];
  const erf = x => {
    const t = 1 / (1 + 0.3275911 * Math.abs(x)),
      y =
        1 -
        ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
          t *
          Math.exp(-x * x);
    return x < 0 ? -y : y;
  };
  let V = [],
    H = 0,
    W = 0,
    hh = 0,
    range = 0;
  const KMIN = 0.16,
    KMAX = 1.85;
  function layout() {
    const hd = document.querySelector("header");
    hh = hd ? hd.offsetHeight : 90;
    document.documentElement.style.setProperty("--hh", hh + "px");
    st.style.top = hh + "px";
    st.style.height = innerHeight - hh + "px";
    H = Math.max(300, innerHeight - hh);
    W = st.clientWidth || innerWidth;
    const mob = innerWidth < 800,
      maxW = mob ? (W - 32) / KMAX : W * 0.42,
      gap = H * 0.035;
    let y = 0;
    V = els.map(e => {
      const r = +e.dataset.r;
      let h = mob ? (H - 70) / KMAX : H * 0.5,
        w = h * r;
      if (w > maxW) {
        w = maxW;
        h = w / r;
      }
      const o = { top: y, h, w };
      y += h + gap;
      return o;
    });
    const c0 = V[0].top + V[0].h / 2,
      cl = V[V.length - 1].top + V[V.length - 1].h / 2;
    range = cl - c0;
    fe.style.height = H + range + "px";
    V.c0 = c0;
  }
  function frame() {
    feRaf = 0;
    if (!document.body.contains(fe)) return;
    const s = Math.min(range, Math.max(0, hh - fe.getBoundingClientRect().top)),
      focus = V.c0 + s,
      sig = H * 0.27;
    const Rf = x => KMIN * x + (((KMAX - KMIN) * sig * Math.sqrt(Math.PI)) / 2) * erf(x / sig);
    let best = 0,
      bd = 1e9;
    V.forEach((v, i) => {
      const t = H / 2 + Rf(v.top - focus),
        b = H / 2 + Rf(v.top + v.h - focus),
        k = (b - t) / v.h,
        e = els[i];
      e.style.transform = `translate3d(0,${t.toFixed(1)}px,0) scale(${k.toFixed(4)})`;
      e.style.width = v.w + "px";
      e.style.height = v.h + "px";
      e.style.zIndex = Math.round(k * 100);
      e.style.opacity = b < -20 || t > H + 20 ? 0 : 1;
      const d = Math.abs(v.top + v.h / 2 - focus);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    names.forEach((n, i) => n.classList.toggle("on", i === best));
    {
      const cp = document.getElementById("fecap"),
        it = items[best];
      if (cp && it && cp.dataset.i != best) {
        cp.dataset.i = best;
        cp.innerHTML = `<b>${it[0].n}</b><span>${meta(it[0])}</span>`;
      }
    }
  }
  const req = () => {
    if (!feRaf) feRaf = requestAnimationFrame(frame);
  };
  scrollTo(0, 0);
  layout();
  frame();
  requestAnimationFrame(() => {
    layout();
    frame();
  });
  if (!window.feBound) {
    window.feBound = 1;
    addEventListener(
      "scroll",
      () => {
        window.feReq && window.feReq();
      },
      { passive: true },
    );
    addEventListener("resize", () => {
      window.feLay && window.feLay();
    });
  }
  window.feReq = req;
  window.feLay = () => {
    if (document.body.contains(fe)) {
      layout();
      req();
    }
  };
}

function project(k) {
  const p = PROJECTS[k - 1],
    all = PROJECTS.map((_, i) => i + 1)
      .filter(i => PROJECTS[i - 1].st || i === k)
      .sort((a, b) => (PROJECTS[a - 1].o || 99) - (PROJECTS[b - 1].o || 99) || a - b),
    inC = lastCat != null && p.t.includes(lastCat),
    l = inC ? all.filter(i => PROJECTS[i - 1].t.includes(lastCat)) : all,
    ix = l.indexOf(k),
    pr = l[(ix - 1 + l.length) % l.length],
    nx = l[(ix + 1) % l.length],
    back = inC
      ? `<a href="#work/cat/${lastCat + 1}">${T("backTo")(categoryName(lastCat))}</a>`
      : `<a href="#work">${T("back")}</a>`;
  $("#project").innerHTML = p.iy
    ? inyeon(p, back, ix, l, pr, nx)
    : p.fs
      ? fashion(p, back, ix, l, pr, nx)
      : p.vs
        ? `<div class="proj full"><div class="bar">${back}</div>${head(p, ix, l, `<video src="${MEDIA[p.vs].u}" poster="${MEDIA[p.vs].p}" autoplay muted loop playsinline></video>`)}${p.after ? `<div class="aftw"><img class="zoom" src="${p.after}" alt="${p.n}" loading="lazy"></div>` : ""}${l.length > 1 ? `<div class="pn"><a href="#work/${pr}">${T("prev")}</a><a href="#work/${nx}">${T("next")}</a></div>` : ""}</div>`
        : p.hv
          ? `<div class="proj full bb gt"><div class="bar">${back}</div>${head(p, ix, l, `<video src="${MEDIA[p.hv].u}" poster="${MEDIA[p.hv].p}" autoplay muted loop playsinline></video>`)}${p.after ? `<div class="aftw"><img class="zoom" src="${p.after}" alt="${p.n}" loading="lazy"></div>` : ""}${p.tool ? `<div class="toolw"><div class="tcta"><h2>${T("tryH")}</h2><p>${T("tryTool")}</p></div><iframe class="toolf" src="${p.tool}#en" title="${p.n} – Tool" loading="lazy"></iframe><button type="button" class="toolopen" data-tool="${p.tool}">${T("openTool")}</button></div>` : ""}${p.film ? `<div class="filmw"><p class="lbl2">${T("film")}</p><video class="film" src="${p.film}.mp4" poster="${p.film}.jpg" controls playsinline preload="metadata"></video></div>` : ""}${p.loops ? `<div class="loops">${p.loops.map(([f, r]) => (!/\.jpg$/.test(f) ? `<div style="flex:${r}"><video src="${f}.mp4" poster="${f}.jpg" autoplay muted loop playsinline preload="auto" style="aspect-ratio:${r}"></video></div>` : `<div style="flex:${r}"><img class="zoom" src="${f}" alt="${p.n}" loading="lazy" style="display:block;width:100%;height:auto;aspect-ratio:${r};cursor:zoom-in"></div>`)).join("")}</div>` : ""}${l.length > 1 ? `<div class="pn"><a href="#work/${pr}">${T("prev")}</a><a href="#work/${nx}">${T("next")}</a></div>` : ""}</div>`
          : p.hd
            ? `<div class="proj full"><div class="bar">${back}</div>${head(p, ix, l, MEDIA[p.hd].ph ? placeholderTile(p.n) : `<img class="zoom" src="${MEDIA[p.hd].u}" alt="${p.n}">`)}${l.length > 1 ? `<div class="pn"><a href="#work/${pr}">${T("prev")}</a><a href="#work/${nx}">${T("next")}</a></div>` : ""}</div>`
            : p.pr
              ? props(p, back, ix, l, pr, nx)
              : p.ph
                ? photo(p, back, ix, l, pr, nx)
                : `<div class="proj full"><div class="bar">${back}</div>${head(p, ix, l, placeholderTile(p.n))}</div>`;
}
/* Einheitliche Projekt-Gliederung: links Zähler, Titel, Text, Steckbrief – rechts Foto/Video */
const pad2 = n => String(n).padStart(2, "0");
function head(p, ix, l, right) {
  const txt = []
    .concat(p.d[langIndex()])
    .map(t => `<p>${String(t).replace(/\\n|\n/g, " ")}</p>`)
    .join("");
  const v = x => (x == null || x === "" ? "–" : Array.isArray(x) ? x[langIndex()] : x);
  const cats =
    p.t
      .filter(i => !CATEGORIES[i].hide)
      .map(i => `<a href="#work/cat/${i + 1}">${categoryName(i).toUpperCase()}</a>`)
      .join(" / ") || "–";
  const rows = [
    [T("mYear"), v(p.y)],
    [T("mCat"), cats],
    [T("mCtx"), v(p.fr || p.nt)],
    [T("mRole"), v(p.ro)],
    [T("mSw"), v(p.sw)],
  ];
  return `<div class="pin${p.vs ? " pinc" : ""}"><div class="pinl"><p class="pcnt">${pad2(ix + 1)} / ${pad2(l.length)}</p><h1>${p.n}</h1>
 <div class="pcols"><div class="ptxt">${txt}</div><dl class="pdl">${rows.map(([k, x]) => `<dt>${k}</dt><dd>${x}</dd>`).join("")}</dl></div></div>
 <div class="pinr">${right}</div></div>`;
}
const DASEIN_SERIES = [
  "person1_01",
  "person1_02",
  "person1_03",
  "person1_05",
  "person1_04",
  "person2_02",
  "person2_05",
  "person2_03",
  "person2_01",
  "person2_04",
];
const meta = p => tags(p) + (p.y ? ", " + p.y : "");
function fashion(p, back, ix, l, pr, nx) {
  const f = (src, c, cls = "") =>
      `<figure class="fsf ${cls}" style="${c}"><div class="cur"><img class="zoom" src="${src}" alt="${p.n}" loading="lazy" decoding="async" draggable="false"></div></figure>`,
    u = n => `fs${String(n).padStart(2, "0")}.jpg?v=2`;
  const look = (no, label, body) =>
    `<section class="look"><div class="lookh"><span class="lookn">${no}</span><span class="lookl">${label}</span></div><div class="fsg">${body}</div></section>`;
  return `<div class="proj full fsp"><div class="bar">${back}</div>
 ${head(p, ix, l, `<img class="zoom" src="${MEDIA.ph_02.u}" alt="${p.n}">`)}
 ${look(
   "01",
   "Look",
   f(u(2), "grid-column:2/8") +
     f(u(1), "grid-column:9/12;margin-top:34vh") +
     f(MEDIA.ph_02.u, "grid-column:1/5;margin-top:22vh") +
     f(u(4), "grid-column:5/9;margin-top:30vh") +
     f(u(5), "grid-column:9/13;margin-top:38vh") +
     f(u(3), "grid-column:4/10;margin-top:24vh"),
 )}
 ${look(
   "02",
   "Look",
   f(u(6), "grid-column:1/6") +
     f(u(7), "grid-column:7/12;margin-top:26vh") +
     f(u(11), "grid-column:2/5;margin-top:36vh") +
     f(u(8), "grid-column:6/12;margin-top:18vh") +
     f(u(9), "grid-column:3/7;margin-top:22vh") +
     f(u(10), "grid-column:8/12;margin-top:34vh"),
 )}
 ${l.length > 1 ? `<div class="pn"><a href="#work/${pr}">${T("prev")}</a><a href="#work/${nx}">${T("next")}</a></div>` : ""}</div>`;
}
function props(p, back, ix, l, pr, nx) {
  const z = (k, i) => `<img class="zoom" src="${MEDIA[k].u}" alt="${p.n} ${i + 1}" draggable="false">`,
    im = (u, r, alt, c = "") =>
      `<div class="${c}" style="flex:${r} 1 0"><img class="zoom" src="${u}" alt="${alt}" loading="lazy" style="aspect-ratio:${r}"></div>`;
  return `<div class="proj full bb"><div class="bar">${back}</div>
 ${head(
   p,
   ix,
   l,
   `<div class="idw"><div class="idsw"><svg class="clip" viewBox="0 0 40 110" aria-hidden="true"><path d="M14 104V22a10 10 0 0 1 20 0v70a16 16 0 0 1-32 0V16" fill="none" stroke="url(#cg)" stroke-width="3.2" stroke-linecap="round"/><defs><linearGradient id="cg" x1="0" x2="1"><stop offset="0" stop-color="#8d939a"/><stop offset=".5" stop-color="#f2f3f4"/><stop offset="1" stop-color="#7d838a"/></linearGradient></defs></svg><img class="zoom" src="bb-ausweis.webp" alt="${T("bbId")}" draggable="false"></div></div>
 `,
 )}
 <div class="bb2 bbtr"><div>${z(p.hero, 0)}</div>
 <div><div class="vid" id="vid" data-yt="${p.yt}"><button class="vplay" type="button"><i></i><span>${T("play")}</span></button><p class="ytnote">${T("ytNote")}</p></div>
  <p class="vnote">${T("vnote")} <a href="https://www.youtube.com/watch?v=${p.yt}" target="_blank" rel="noopener noreferrer">${T("ytl")}</a></p></div></div>
 <p class="lbl2 bbl2">${T("bbProps")}</p>
 <div class="bigs">${p.big.map((k, i) => `<div class="rv">${z(k, i + 1)}</div>`).join("")}</div>
 <p class="lbl2 bbl2">${T("bbPost")}</p>
 <div class="bbsl"><div class="bbslt">${[1, 2, 3].map(n => `<img class="zoom" src="bb-wahlplakat-${n}.jpg" alt="${T("bbPost")}" loading="lazy" style="aspect-ratio:.707">`).join("")}<img class="zoom" src="bb-kalender.webp" alt="${T("bbPost")}" loading="lazy" style="aspect-ratio:1.466"></div><p class="bbslh">${T("swipe")}</p></div>
 <p class="lbl2 bbl2">${T("bbStamp")}</p>
 <div class="jr bbst">${im("bb-marken.webp", 1.508, T("bbStamp"), "pap")}${im("bb-stempel-berlin.webp", 1, T("bbStamp"), "pap")}${im("bb-stempel-stuttgart.webp", 1.032, T("bbStamp"), "pap")}</div>
 <div class="jr">${im("bb-making-of.jpg", 1.3333, T("bbMake"))}<div style="flex:1.7778 1 0"><video src="bb-props-loop.mp4" poster="bb-props-loop.jpg" autoplay muted loop playsinline preload="auto" style="display:block;width:100%;height:auto;aspect-ratio:1.7778"></video></div></div>
 <p class="lbl2 bbl2">${T("bbSet")}<span class="bbby">${T("bbSetBy")}</span></p>
 <div class="jr">${im("bb-set-hall.jpg", 1.4087, "Set")}${im("bb-set-desk.jpg", 1, "Set")}</div>
 <p class="lbl2 bbl2">${T("bbExPr")}</p>
 <div class="jr">${im("bb-expo-1.jpg", 0.6665, T("exhib"))}${im("bb-plakat.jpg", 0.7072, T("exhib"))}${im("bb-expo-2.jpg", 0.6665, T("exhib"))}${im("bb-premiere.jpg", 1.3333, T("bbPrem"))}</div>
 ${l.length > 1 ? `<div class="pn"><a href="#work/${pr}">${T("prev")}</a><a href="#work/${nx}">${T("next")}</a></div>` : ""}</div>`;
}
/* Großansicht eines Bildes; schließt per Klick oder Escape */
function lightbox(im, after) {
  const box = $("#lb"),
    big = box.querySelector("img");
  big.src = im.src;
  big.alt = im.alt;
  box.classList.add("on");
  box.setAttribute("aria-hidden", "false");
  const close = () => {
    box.classList.remove("on");
    box.setAttribute("aria-hidden", "true");
    removeEventListener("keydown", onKey);
    after && after();
  };
  const onKey = e => {
    if (e.key === "Escape") close();
  };
  box.onclick = close;
  addEventListener("keydown", onKey);
}
/* Inyeon: Cover im Header, Video, Übersicht, Blätterbuch (ziehen oder klicken) */
const INYEON_TEXTS = {
  en: {
    ov: "All spreads at a glance",
    flip: "Leaf through it yourself",
    hint: "Drag a page or click it to turn",
    cover: "Cover",
    prev: "Previous page",
    next: "Next page",
  },
  de: {
    ov: "Alle Doppelseiten auf einen Blick",
    flip: "Selbst durchblättern",
    hint: "Seite ziehen oder anklicken zum Umblättern",
    cover: "Cover",
    prev: "Vorherige Seite",
    next: "Nächste Seite",
  },
};
Object.assign(TEXTS.en, { cats: "Categories" });
Object.assign(TEXTS.de, { cats: "Kategorien" });
const INYEON_PAGES = 25,
  inyeonPage = n => `inyeon-p${String(n).padStart(2, "0")}.jpg`;
function inyeon(p, back, ix, l, pr, nx) {
  const t = INYEON_TEXTS[lang] || INYEON_TEXTS.en,
    leaves = [];
  for (let k = 0; 2 * k + 1 <= INYEON_PAGES; k++) {
    const f = 2 * k + 1,
      b = f + 1 <= INYEON_PAGES ? f + 1 : 0;
    leaves.push(
      `<div class="iyb-leaf" data-k="${k}"><div class="iyb-f fr"><img src="${inyeonPage(f)}" alt="${f === 1 ? t.cover : f}" loading="lazy" draggable="false"><i class="sh"></i></div>${b ? `<div class="iyb-f bk"><img src="${inyeonPage(b)}" alt="${b}" loading="lazy" draggable="false"><i class="sh"></i></div>` : ""}</div>`,
    );
  }
  return `<div class="proj full iy"><div class="bar">${back}</div>${head(p, ix, l, `<img class="iy-cov" src="inyeon-mockup.jpg" alt="${p.n}">`)}
 <section class="iy-sec"><p class="iy-lbl">${t.ov}</p><img class="iy-ov" src="inyeon-uebersicht.jpg" alt="${p.n} – ${t.ov}" loading="lazy"></section>
 <section class="iy-sec iy-flip"><div class="iyb" id="iyb" tabindex="0" role="group" aria-label="${p.n} – ${t.flip}">
  <div class="iyb-stage"><div class="iyb-book" id="iybk"><div class="iyb-base"><i class="bl"></i><i class="br"></i></div>${leaves.join("")}</div></div>
  <div class="iyb-ctl"><button type="button" class="iyb-btn" data-d="-1" aria-label="${t.prev}">←</button><span class="iyb-n" id="iybn"></span><button type="button" class="iyb-btn" data-d="1" aria-label="${t.next}">→</button></div>
  <p class="iyb-hint">${t.hint}</p></div></section>
 ${l.length > 1 ? `<div class="pn"><a href="#work/${pr}">${T("prev")}</a><a href="#work/${nx}">${T("next")}</a></div>` : ""}</div>`;
}
function iyInit() {
  const root = $("#iyb"),
    book = $("#iybk");
  if (!root || !book) return;
  document
    .querySelectorAll("#project .iy-cov,#project .iy-ov")
    .forEach(im => (im.onclick = () => lightbox(im)));
  const t = INYEON_TEXTS[lang] || INYEON_TEXTS.en,
    leaves = [...book.querySelectorAll(".iyb-leaf")],
    last = leaves.length - 1,
    bl = book.querySelector(".bl"),
    num = $("#iybn");
  let cur = 0,
    act = null,
    raf = 0,
    drag = null;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  function draw() {
    leaves.forEach((lf, k) => {
      const p = act && act.k === k ? act.p : k < cur ? 1 : 0;
      lf.style.transform = `perspective(2600px) rotateY(${(-180 * p).toFixed(2)}deg)`;
      lf.style.zIndex = act && act.k === k ? 100 : p >= 0.5 ? k + 1 : 60 - k;
      const fs = lf.querySelector(".fr .sh"),
        bs = lf.querySelector(".bk .sh");
      if (fs) fs.style.opacity = (clamp(p * 2, 0, 1) * 0.5).toFixed(3);
      if (bs) bs.style.opacity = (clamp((1 - p) * 2, 0, 1) * 0.5).toFixed(3);
    });
    const p0 = act && act.k === 0 ? act.p : cur > 0 ? 1 : 0;
    book.style.transform = `translateX(${(-25 * (1 - p0)).toFixed(3)}%)`;
    bl.style.opacity = p0.toFixed(3);
    const s = act ? (act.p > 0.5 ? act.k + 1 : act.k) : cur;
    num.textContent = s === 0 ? t.cover : `${2 * s} – ${2 * s + 1} / ${INYEON_PAGES}`;
  }
  function settle() {
    if (!act) return;
    cancelAnimationFrame(raf);
    cur = act.to ? act.k + 1 : act.k;
    act = null;
    draw();
  }
  function tween(to) {
    act.to = to;
    const from = act.p,
      d = Math.abs(to - from),
      dur = reduce ? 0 : 200 + 650 * d,
      t0 = performance.now();
    const step = now => {
      const u = dur ? Math.min(1, (now - t0) / dur) : 1,
        e = 1 - Math.pow(1 - u, 3);
      act.p = from + (to - from) * e;
      draw();
      if (u < 1) raf = requestAnimationFrame(step);
      else settle();
    };
    raf = requestAnimationFrame(step);
  }
  function go(d) {
    settle();
    if (d > 0 && cur < last) {
      act = { k: cur, p: 0 };
      tween(1);
    } else if (d < 0 && cur > 0) {
      act = { k: cur - 1, p: 1 };
      tween(0);
    }
  }
  const geo = () => {
    const r = book.getBoundingClientRect();
    return { spine: r.left + r.width / 2, half: r.width / 2 };
  };
  const pos = (x, g) => Math.acos(clamp((x - g.spine) / g.half, -1, 1)) / Math.PI;
  book.addEventListener("pointerdown", e => {
    if (e.button > 0) return;
    settle();
    const g = geo(),
      fwd = e.clientX >= g.spine;
    if (fwd ? cur >= last : cur <= 0) return;
    const base = pos(e.clientX, g);
    drag = {
      fwd,
      g,
      x0: e.clientX,
      base,
      k: fwd ? cur : cur - 1,
      sc: 1 / Math.max(0.35, Math.abs(1 - 2 * base)),
      mv: false,
    };
    try {
      book.setPointerCapture(e.pointerId);
    } catch (_) {}
    book.classList.add("grab");
  });
  book.addEventListener("pointermove", e => {
    if (!drag) return;
    if (!drag.mv && Math.abs(e.clientX - drag.x0) < 6) return;
    if (!drag.mv) {
      drag.mv = true;
      act = { k: drag.k, p: drag.fwd ? 0 : 1 };
    }
    const q = (pos(e.clientX, drag.g) - drag.base) * drag.sc;
    act.p = clamp((drag.fwd ? 0 : 1) + q, 0, 1);
    drag.x = e.clientX;
    draw();
  });
  const up = () => {
    if (!drag) return;
    const d = drag;
    drag = null;
    book.classList.remove("grab");
    if (!d.mv) {
      go(d.fwd ? 1 : -1);
      return;
    }
    const dx = (d.x ?? d.x0) - d.x0,
      done = d.fwd ? act.p > 0.5 || dx < -0.25 * d.g.half : act.p < 0.5 || dx > 0.25 * d.g.half;
    tween(d.fwd ? (done ? 1 : 0) : done ? 0 : 1);
  };
  book.addEventListener("pointerup", up);
  book.addEventListener("pointercancel", up);
  root.querySelectorAll(".iyb-btn").forEach(b => (b.onclick = () => go(+b.dataset.d)));
  root.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  });
  draw();
}
function propsInit() {
  const v = $("#vid");
  // Zwei-Klick-Lösung: Erst nach dem Klick wird der Player von youtube-nocookie.com geladen
  if (v)
    v.querySelector(".vplay").onclick = () => {
      const id = encodeURIComponent(v.dataset.yt);
      if (!/^https?:$/.test(location.protocol)) {
        window.open("https://www.youtube.com/watch?v=" + id, "_blank", "noopener,noreferrer");
        return;
      }
      const f = document.createElement("iframe");
      f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
      f.title = "Babylon Berlin – Trailer";
      f.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
      f.allowFullscreen = true;
      f.referrerPolicy = "strict-origin-when-cross-origin";
      v.replaceChildren(f);
      v.classList.add("on");
    };
  document.querySelectorAll("#project .bbslt").forEach(t => {
    let d = 0,
      x0 = 0,
      s0 = 0,
      mv = 0;
    t.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse") return;
      d = 1;
      mv = 0;
      x0 = e.clientX;
      s0 = t.scrollLeft;
      t.style.scrollSnapType = "none";
      e.preventDefault();
    });
    addEventListener("pointermove", e => {
      if (!d) return;
      mv = Math.max(mv, Math.abs(e.clientX - x0));
      t.scrollLeft = s0 - (e.clientX - x0);
    });
    addEventListener("pointerup", () => {
      if (!d) return;
      d = 0;
      t.style.scrollSnapType = "";
      t.dataset.mv = mv;
    });
  });
  document.querySelectorAll("#project .zoom").forEach(
    im =>
      (im.onclick = () => {
        const t = im.closest(".bbslt");
        if (t && +t.dataset.mv > 6) {
          t.dataset.mv = 0;
          return;
        }
        lightbox(im);
      }),
  );
}
function photo(p, back, ix, l, pr, nx) {
  const paras = p.d[langIndex()].map(t => `<p>${t.replace(/\\n|\n/g, " ")}</p>`).join(""),
    img = (k, i) => `<img src="${MEDIA[k].u}" alt="${p.n} ${i + 1}" draggable="false">`;
  return `<div class="proj full"><div class="bar">${back}</div>
 ${head(p, ix, l, `<div class="hbox" id="hbox"><img class="phero" src="${MEDIA[p.hero || p.im].u}" alt="${p.n}"><img class="hpop" src="${MEDIA.IMG_1073.u}" alt="${T("expo")}"></div>`)}
 <div class="expo"><div class="ex2"><div class="ov" id="ov">${DASEIN_SERIES.map((k, i) => `<div class="rv ${i < 5 ? "r1" : "r2"}" style="--d:${(i % 5) * 0.07 + Math.floor(i / 5) * 0.12}s;--i:${i % 5}">${img(k, i)}</div>`).join("")}</div></div></div>
 <div class="car"><div class="track" id="track">${DASEIN_SERIES.map((k, i) => `<div class="ti">${img(k, i)}</div>`).join("")}</div><button class="swipe" id="swipe">${T("swipeClick")}</button></div>
 ${l.length > 1 ? `<div class="pn"><a href="#work/${pr}">${T("prev")}</a><a href="#work/${nx}">${T("next")}</a></div>` : ""}</div>`;
}
function reveal() {
  const els = document.querySelectorAll("#project .rv");
  if (!("IntersectionObserver" in window)) return els.forEach(e => e.classList.add("in"));
  const io = new IntersectionObserver(
    es =>
      es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  els.forEach(e => io.observe(e));
}
let auto = null;
function carousel() {
  const t = $("#track");
  let x0 = 0,
    s0 = 0,
    down = false;
  const step = () => {
    const it = t.querySelector(".ti");
    if (!it) return;
    const w = it.getBoundingClientRect().width + 16,
      end = t.scrollLeft + t.clientWidth >= t.scrollWidth - 4;
    t.scrollTo({
      left: end ? 0 : Math.round((t.scrollLeft + w) / w) * w,
      behavior: reduce ? "auto" : "smooth",
    });
  };
  const start = () => {
    clearInterval(auto);
    auto = setInterval(() => {
      if (!document.contains(t)) return clearInterval(auto);
      if (!down && !document.hidden) step();
    }, 5000);
  };
  let vis = false;
  clearInterval(auto);
  t.scrollLeft = 0;
  const run = () => {
    if (vis) start();
    else clearInterval(auto);
  };
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      es => {
        vis = es[0].isIntersecting;
        run();
        if (!document.contains(t)) io.disconnect();
      },
      { threshold: 0.6 },
    );
    io.observe(t);
  } else {
    vis = true;
    run();
  }
  $("#swipe").onclick = () => {
    step();
    run();
  };
  let moved = 0;
  t.addEventListener("pointerdown", e => {
    moved = e.clientX;
  });
  t.addEventListener("click", e => {
    const im = e.target.closest(".ti img");
    if (!im || Math.abs(e.clientX - moved) > 6) return;
    clearInterval(auto);
    lightbox(im, run);
  });
  ["pointerdown", "touchstart"].forEach(ev => t.addEventListener(ev, run, { passive: true }));
  t.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse") return;
    down = true;
    x0 = e.clientX;
    s0 = t.scrollLeft;
    t.classList.add("drag");
  });
  addEventListener("pointermove", e => {
    if (down) t.scrollLeft = s0 - (e.clientX - x0);
  });
  addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    t.classList.remove("drag");
  });
}
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
/* Mobile: Menü, Tool im Vollbild */
{
  const mb = document.getElementById("mbtn"),
    mm = document.getElementById("mmenu");
  const set = o => {
    document.body.classList.toggle("mopen", o);
    mb.setAttribute("aria-expanded", o);
    mm.setAttribute("aria-hidden", !o);
  };
  mb.onclick = () => {
    lp.classList.remove("on");
    set(!document.body.classList.contains("mopen"));
  };
  const lb = document.getElementById("lbtn"),
    lp = document.getElementById("lpop");
  lb.onclick = e => {
    e.stopPropagation();
    const o = !lp.classList.contains("on");
    lp.classList.toggle("on", o);
    lb.setAttribute("aria-expanded", o);
  };
  lp.addEventListener("click", e => {
    if (e.target.closest("button")) setTimeout(() => lp.classList.remove("on"), 150);
  });
  document.addEventListener("click", e => {
    if (!e.target.closest(".mright")) lp.classList.remove("on");
  });
  mm.addEventListener("click", e => {
    if (e.target.closest("a")) set(false);
  });
  addEventListener("hashchange", () => set(false));
  const ov = document.getElementById("toolov"),
    fr = document.getElementById("toolfr");
  document.addEventListener("click", e => {
    const b = e.target.closest(".toolopen");
    if (!b) return;
    fr.src = b.dataset.tool + "#" + (lang === "de" ? "de" : "en");
    ov.classList.add("on");
    ov.setAttribute("aria-hidden", "false");
    document.body.classList.add("toolon");
  });
  document.getElementById("toolx").onclick = () => {
    ov.classList.remove("on");
    ov.setAttribute("aria-hidden", "true");
    document.body.classList.remove("toolon");
    fr.src = "about:blank";
  };
}
/* Startseite: Kacheln im Hintergrund. Die Buchstaben von "PORTFOLIO JENNIE GRAPHIC DESIGN" erscheinen
   nacheinander, je eine halbe Sekunde. Desktop: drei Kacheln (links, Mitte, rechts, dann wieder links),
   Handy: eine Kachel, Buchstabe für Buchstabe.
   Alle Buchstaben sind gleich hoch und stehen mittig in ihrer Kachel, ohne abgeschnitten zu werden. */
const Tiles = (() => {
  let SEQ = "PORTFOLIO JENNIE GRAPHIC DESIGN "; // Leerzeichen = leere Kachel zwischen den Wörtern
  while (SEQ.length % 3) SEQ += " "; // damit jede Runde wieder in der linken Kachel beginnt
  const STEP = 500,
    FAM = 'Helvetica, "Helvetica Neue", Arial, sans-serif',
    mobile = matchMedia("(max-width:900px)"),
    tiles = [...document.querySelectorAll(".tile")],
    texts = tiles.map(t => t.querySelector("text")),
    ctx = document.createElement("canvas").getContext("2d");
  let i = 0,
    timer = 0,
    running = false,
    size = null;
  const count = () => (mobile.matches ? 1 : 3);

  // Buchstabe mittig in die Kachel setzen; ist er breiter als die Kachel, wird er nur so weit
  // schmaler gemacht, dass er ganz hineinpasst (Höhe bleibt immer gleich).
  function place(k) {
    const t = texts[k],
      ch = t.textContent;
    if (!size || !ch.trim()) return;
    ctx.font = `400 ${size.f}px ${FAM}`;
    const m = ctx.measureText(ch),
      inkW = m.actualBoundingBoxLeft + m.actualBoundingBoxRight,
      inkC = (m.actualBoundingBoxRight - m.actualBoundingBoxLeft) / 2,
      sx = Math.min(1, (size.w * size.fill) / inkW);
    t.setAttribute("x", 0);
    t.setAttribute("y", size.base);
    t.setAttribute("transform", `translate(${size.w / 2} 0) scale(${sx} 1) translate(${-inkC} 0)`);
  }

  // Größe wie in der Skizze: Desktop 87 % der Kachelhöhe, mittig; Handy 81 %, oben in der Kachel,
  // auf dem Handy minimal breiter als der Bildschirm, damit links und rechts kein weißer Rand bleibt
  function layout() {
    const r = tiles[0].getBoundingClientRect();
    if (!r.height) return;
    ctx.font = `400 100px ${FAM}`;
    const capR = ctx.measureText("H").actualBoundingBoxAscent / 100,
      mob = mobile.matches,
      f = (r.height * (mob ? 0.81 : 0.87)) / capR,
      cap = f * capR;
    size = { f, w: r.width, h: r.height, fill: mob ? 1.03 : 0.96, base: mob ? r.height * 0.01 + cap : (r.height - cap) / 2 + cap };
    texts.forEach((t, k) => {
      t.setAttribute("font-size", f);
      place(k);
    });
  }

  function step() {
    const k = i % count();
    texts[k].textContent = SEQ[i];
    place(k);
    i = (i + 1) % SEQ.length;
    timer = setTimeout(step, STEP);
  }

  function start() {
    clearTimeout(timer);
    running = true;
    i = 0;
    texts.forEach(t => (t.textContent = ""));
    layout();
    step();
  }

  addEventListener("resize", () => running && layout());
  mobile.addEventListener("change", () => running && start());

  return {
    start,
    stop() {
      running = false;
      clearTimeout(timer);
    },
  };
})();

/* Startseite: Fotos oben links wechseln alle 2 Sekunden. Das Kästchen passt sich dem Foto an:
   Querformat liegt, Hochformat ist das gleiche Kästchen hochkant gedreht, beides oben links bündig. */
const HomePhotos = (() => {
  const box = document.querySelector(".home-photo"),
    imgs = [...box.querySelectorAll("img")];
  let i = 0,
    timer = 0;

  function fit() {
    const im = imgs[i];
    if (!im.naturalWidth) return (im.onload = fit);
    const r = im.naturalWidth / im.naturalHeight;
    // Querformat darf eine eigene Breite haben (--lw), Hochformat bleibt bei --pw
    box.style.width = r >= 1 ? "var(--lw, var(--pw))" : `calc(var(--pw) * ${r})`;
    box.style.height = r >= 1 ? `calc(var(--lw, var(--pw)) / ${r})` : "var(--pw)";
  }

  function show(n) {
    imgs[i].classList.remove("on");
    i = n;
    imgs[i].classList.add("on");
    fit();
  }

  return {
    start() {
      clearInterval(timer);
      show(0);
      timer = setInterval(() => show((i + 1) % imgs.length), 2000);
    },
    stop() {
      clearInterval(timer);
    },
  };
})();

/* Startseite: Scrollen oder Wischen führt zu Work, zum ersten Projekt (Trenn dich).
   Dort bleibt die Seite stehen, bis die Scrollbewegung zu Ende ist; erst das nächste Scrollen läuft normal. */
{
  let lock = false,
    quiet = 0,
    touchY = null;
  const release = () => {
    clearTimeout(quiet);
    quiet = setTimeout(() => (lock = false), 450);
  };
  const toWork = () => {
    if (!document.body.classList.contains("home")) return false;
    lock = true;
    location.hash = "work";
    return true;
  };
  addEventListener(
    "wheel",
    e => {
      if (lock || (e.deltaY > 8 && toWork())) {
        e.preventDefault();
        release();
      }
    },
    { passive: false },
  );
  addEventListener("touchstart", e => (touchY = e.touches[0].clientY), { passive: true });
  addEventListener(
    "touchmove",
    e => {
      if (lock || (touchY != null && touchY - e.touches[0].clientY > 40 && toWork())) e.preventDefault();
    },
    { passive: false },
  );
  addEventListener("touchend", () => lock && release(), { passive: true });
  addEventListener("keydown", e => {
    if (["ArrowDown", "PageDown", " "].includes(e.key) && toWork()) {
      e.preventDefault();
      release();
    }
  });
}

/* Startseite (Desktop): Intro wie eine Arbeitsfläche in InDesign.
   1  Schwarz, nur weiße Buchstaben
   2  Maus zieht leere Kästchen für Video und Foto
   3  Klick → weiß, hellgraue Buchstaben, Video + Fotos (wechseln alle 2 s), Text tippt sich
   4  Video wird auf 560 px gezogen (bis dahin bleibt es scharf)
   5  Pipette: Goldgelb aus dem Video für die Buchstaben
   6  Textrahmen schmaler bis an die Hilfslinie
   7  Klick aufs Foto → Raster; Querformat-Fotos bis zur nächsten Spaltenlinie
   8  Text in die rechte Spalte über das Video
   9  Farbeimer: Hintergrund wird Gold, Buchstaben weiß
   10 Taxi-Foto groß ziehen → danach geht es automatisch zu Work (erstes Projekt)
   Scrollen bricht das Intro ab und führt sofort zu Work. Auf dem Handy und bei „weniger Bewegung“ gibt es kein Intro. */
const Intro = (() => {
  const vid = document.querySelector(".me"),
    photo = document.querySelector(".home-photo"),
    txt = document.querySelector(".hello"),
    span = txt.querySelector("span"),
    tilesEl = document.querySelector(".tiles"),
    ORIGINAL = span.innerHTML,
    GOLD = "#c9a96a",
    LIGHT = "#d9dbd7",
    BLUE = "#1e7bff",
    PINK = "#e2337d",
    desktop = matchMedia("(min-width:901px)"),
    calm = matchMedia("(prefers-reduced-motion: reduce)");
  // Text für das Tippen (Umbruch nach „Brunner,“)
  const parts = [...span.childNodes]
    .map(n => (n.nodeName === "BR" ? "\n" : n.textContent))
    .join("")
    .replace("Brunner, ", "Brunner,\n");

  const css = document.createElement("style");
  css.textContent = `
    body, header { transition: background-color .35s, color .35s; }
    body.cx-dark, body.cx-dark header { background: #000 !important; color: #fff; }
    body.cx-dark main { background: #000; }
    .tile text { transition: fill .6s ease; }
    body.cx-dark .tile text { fill: #fff !important; }
    .home-photo, .me { transition: opacity .3s; }
    .cx-hide { opacity: 0 !important; }
    .cx-cur { position: fixed; left: 0; top: 0; z-index: 9999; pointer-events: none; will-change: transform; }
    .cx-box { position: fixed; z-index: 9985; pointer-events: none; border: 1.5px solid #fff; opacity: 0; }
    .cx-box.on { opacity: 1; }
    .cx-box::after { content: ""; position: absolute; inset: 0; background:
      linear-gradient(to top right, transparent calc(50% - .75px), rgba(255,255,255,.5) 50%, transparent calc(50% + .75px)),
      linear-gradient(to top left, transparent calc(50% - .75px), rgba(255,255,255,.5) 50%, transparent calc(50% + .75px)); }
    .cx-sel { position: fixed; z-index: 9990; pointer-events: none; outline: 1.5px solid var(--c); opacity: 0; transition: opacity .2s; }
    .cx-sel.on { opacity: 1; }
    .cx-sel i { position: absolute; width: 9px; height: 9px; background: #fff; border: 1.5px solid var(--c); }
    .cx-tip { position: fixed; z-index: 9995; pointer-events: none; background: ${BLUE}; color: #fff; font: 12px/1 "Instrument Sans", sans-serif; padding: 6px 8px; border-radius: 3px; white-space: pre; opacity: 0; transition: opacity .2s; }
    .cx-tip.on { opacity: 1; }
    .cx-guide { position: fixed; top: var(--hh, 90px); bottom: 0; width: 1px; z-index: 9980; background: ${PINK}; opacity: 0; transition: opacity .3s; }
    .cx-guide.on { opacity: .6; }
    .cx-panel { position: fixed; top: calc(var(--hh, 90px) + 20px); right: 40px; width: 220px; z-index: 9990; background: #f4f4f4; border: 1px solid #ddd; box-shadow: 0 8px 24px rgba(0,0,0,.1); padding: 12px 14px; font: 12px/1.3 "Instrument Sans", sans-serif; color: #000; opacity: 0; transform: translateY(-6px); transition: opacity .25s, transform .25s; }
    .cx-panel.on { opacity: 1; transform: none; }
    .cx-panel b { display: block; font-weight: 500; letter-spacing: .06em; margin-bottom: 8px; }
    .cx-row { display: flex; align-items: center; gap: 8px; margin-top: 10px; }
    .cx-sw { width: 30px; height: 30px; border: 1px solid #ccc; transition: background .3s; }
    .cx-drop { width: 30px; height: 30px; border: 1px solid #ccc; display: grid; place-items: center; background: #fff; }
    .cx-drop.on { outline: 2px solid ${BLUE}; }
    .cx-loupe { position: fixed; z-index: 9998; width: 54px; height: 54px; border-radius: 50%; border: 3px solid #fff; box-shadow: 0 4px 14px rgba(0,0,0,.35); opacity: 0; transition: opacity .2s; pointer-events: none; }
    .cx-loupe.on { opacity: 1; }
    .cx-grid { position: fixed; top: var(--hh, 90px); bottom: 0; left: 0; right: 0; z-index: 9970; pointer-events: none; opacity: 0; transition: opacity .35s; }
    .cx-grid.on { opacity: 1; }
    .cx-grid .v { position: absolute; top: 0; bottom: 0; width: 1px; background: rgba(226, 51, 125, .55); }
    .cx-grid .h { position: absolute; left: 0; right: 0; height: 1px; background: rgba(226, 51, 125, .55); }
    body.cx-gold, body.cx-gold header { background: ${GOLD} !important; transition: background-color .6s ease; }
    .cx-caret { display: inline-block; width: 2px; height: .95em; margin-left: 2px; vertical-align: -.1em; background: currentColor; animation: cxb .8s steps(1) infinite; }
    @keyframes cxb { 50% { opacity: 0; } }
  `;
  document.head.appendChild(css);

  const el = (cls, html = "") => {
    const d = document.createElement("div");
    d.className = cls;
    d.innerHTML = html;
    document.body.appendChild(d);
    return d;
  };
  const ARROW_W = `<svg width="24" height="32" viewBox="0 0 26 34"><path d="M2 2 L2 27 L8.5 21 L13 31.5 L17.5 29.5 L13 19.5 L22 19.5 Z" fill="#fff" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
  const ARROW = ARROW_W.replace('fill="#fff" stroke="#000"', 'fill="#000" stroke="#fff"');
  const CROSS = `<svg width="22" height="22" viewBox="0 0 22 22"><path d="M11 1v20M1 11h20" stroke="#fff" stroke-width="1.6"/></svg>`;
  const BUCKET = `<svg width="28" height="28" viewBox="0 0 24 24"><path d="M5 11.5 11.5 5l7 7-6.5 6.5a1.5 1.5 0 0 1-2.1 0L5 13.6a1.5 1.5 0 0 1 0-2.1z" fill="#fff" stroke="#000" stroke-width="1.4" stroke-linejoin="round"/><path d="M8.2 2.5 12 6.3" stroke="#000" stroke-width="1.4" stroke-linecap="round"/><path d="M5.3 12h12.9" stroke="#000" stroke-width="1.2"/><path d="M20.5 14.5c0 0 1.8 2.3 1.8 3.4a1.8 1.8 0 0 1-3.6 0c0-1.1 1.8-3.4 1.8-3.4z" fill="#c9a96a" stroke="#000" stroke-width="1.2"/></svg>`;
  const DROPPER = `<svg width="26" height="26" viewBox="0 0 24 24"><path d="M19.5 4.5a2.4 2.4 0 0 0-3.4 0l-2.3 2.3-1-1-1.4 1.4 1 1-7.1 7.1-.8 3.6 3.6-.8 7.1-7.1 1 1 1.4-1.4-1-1 2.3-2.3a2.4 2.4 0 0 0 0-3.4z" fill="#000" stroke="#fff" stroke-width="1.2"/></svg>`;
  let cur, tip, loupe, boxV, boxP, selV, selT, selP, gL, panel, grid = null;
  function build() {
    cur = el("cx-cur", ARROW_W),
      tip = el("cx-tip"),
      loupe = el("cx-loupe"),
      boxV = el("cx-box"),
      boxP = el("cx-box"),
      selV = el("cx-sel", "<i></i>".repeat(8)),
      selT = el("cx-sel", "<i></i>".repeat(8)),
      selP = el("cx-sel", "<i></i>".repeat(8)),
      gL = el("cx-guide"),
      panel = el(
        "cx-panel",
        `<b>FARBE · BUCHSTABEN</b>Pipette aus dem Video<div class="cx-row"><span class="cx-sw" id="cxsw" style="background:#d9dbd7"></span><span class="cx-drop" id="cxdrop">${DROPPER.replace('width="26" height="26"', 'width="18" height="18"')}</span><span id="cxhex">#D9DBD7</span></div>`,
      );
    selV.style.setProperty("--c", BLUE);
    selT.style.setProperty("--c", PINK);
    selP.style.setProperty("--c", BLUE);
  }

  const SPEED = 0.55; // < 1 = schneller
  const ABORT = new Error("intro-abort");
  let token = 0;
  const sleep = ms => {
    const my = token;
    return new Promise((res, rej) => setTimeout(() => (my === token ? res() : rej(ABORT)), ms * SPEED));
  };
  const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let cx = 0,
    cy = 0;
  const put = (x, y) => {
    cx = x;
    cy = y;
    cur.style.transform = `translate(${x - 2}px, ${y - 2}px)`;
  };
  const tween = (ms, fn) =>
    new Promise((res, rej) => {
      ms *= SPEED;
      const my = token,
        s = performance.now();
      const step = now => {
        if (my !== token) return rej(ABORT);
        const t = Math.min(1, (now - s) / ms);
        fn(ease(t));
        t < 1 ? requestAnimationFrame(step) : res();
      };
      requestAnimationFrame(step);
    });
  const move = (x, y, ms = 700) => {
    const x0 = cx,
      y0 = cy;
    return tween(ms, t => put(x0 + (x - x0) * t, y0 + (y - y0) * t));
  };
  const click = async () => {
    cur.style.transition = "transform .08s";
    cur.style.transform += " scale(.85)";
    await sleep(110);
    cur.style.transition = "";
    };
  const place = (node, r) => Object.assign(node.style, { left: r.L + "px", top: r.T + "px", width: r.W + "px", height: r.H + "px" });
  function frame(sel, r) {
    place(sel, r);
    const pts = [[0, 0], [0.5, 0], [1, 0], [0, 0.5], [1, 0.5], [0, 1], [0.5, 1], [1, 1]];
    [...sel.children].forEach((h, i) => {
      h.style.left = pts[i][0] * r.W - 5 + "px";
      h.style.top = pts[i][1] * r.H - 5 + "px";
    });
    return r;
  }
  const rect = n => {
    const b = n.getBoundingClientRect();
    return { L: b.left, T: b.top, W: b.width, H: b.height };
  };
  const textRect = () => {
    const rg = document.createRange();
    rg.selectNodeContents(txt);
    const r = rg.getBoundingClientRect(),
      b = txt.getBoundingClientRect();
    return { L: b.left, T: r.top - 6, W: b.width, H: Math.max(r.height, 30) + 12 };
  };

  // Flattersatz, der wie Blocksatz wirkt: Schriftgröße, Zeilenzahl und Umbrüche werden gemeinsam so gewählt,
  // dass die größte Lücke am rechten Rand so klein wie möglich ist – auch die letzte Zeile läuft fast voll.
  // Regeln: kein „A“, „I“, „In“, „The“, „I’m“ am Zeilenende; Wortpaare mit festem Leerzeichen
  // (Jennifer Brunner, a young, in Berlin, I love, I’m just, a little) bleiben zusammen.
  // Danach bekommt jede Zeile eine winzige Laufweite (höchstens 0,04 em), die den Rest der Lücke schließt.
  function balance(text, W, maxH) {
    const words = text.replace(/\n/g, " ").replace(/and\u00a0/g, "and ").trim().split(/ +/),
      fam = getComputedStyle(txt).fontFamily,
      ctx = document.createElement("canvas").getContext("2d"),
      WEAK = new Set(["A", "I", "IN", "THE", "I’M", "I'M"]),
      n = words.length;
    let best = null;
    for (let f = 46; f >= 24; f -= 0.25) {
      ctx.font = `400 ${f}px ${fam}`;
      const sp = ctx.measureText(" ").width,
        pre = [0];
      words.forEach(w => pre.push(pre[pre.length - 1] + ctx.measureText(w.toUpperCase()).width));
      const lw = (i, j) => pre[j] - pre[i] + sp * (j - i - 1);
      for (let K = 6; K <= 15; K++) {
        const lh = maxH / (K * f);
        if (lh < 1.05 || lh > 1.45) continue;
        const C = Array.from({ length: K + 1 }, () => Array(n + 1).fill(null)),
          P = Array.from({ length: K + 1 }, () => Array(n + 1).fill(-1));
        C[0][0] = [0, 0];
        for (let k = 1; k <= K; k++)
          for (let j = 1; j <= n; j++)
            for (let i = j - 1; i >= 0; i--) {
              const w = lw(i, j);
              if (w > W) break;
              if (!C[k - 1][i] || (j < n && WEAK.has(words[j - 1].toUpperCase()))) continue;
              const sl = W - w,
                v = [Math.max(C[k - 1][i][0], sl), C[k - 1][i][1] + sl * sl],
                o = C[k][j];
              if (!o || v[0] < o[0] - 0.5 || (Math.abs(v[0] - o[0]) <= 0.5 && v[1] < o[1])) {
                C[k][j] = v;
                P[k][j] = i;
              }
            }
        if (!C[K][n]) continue;
        const worst = C[K][n][0] / W;
        if (best && !(worst < best.worst - 0.005 || (Math.abs(worst - best.worst) <= 0.005 && f > best.f))) continue;
        const lines = [];
        for (let k = K, j = n; k > 0; j = P[k][j], k--) lines.unshift(words.slice(P[k][j], j).join(" "));
        best = { f, lh, lines, worst };
      }
    }
    // feine Laufweite pro Zeile
    ctx.font = `400 ${best.f}px ${fam}`;
    best.html = best.lines
      .map(l => {
        const t = l.toUpperCase(),
          ls = Math.min(best.f * 0.04, Math.max(0, (W - ctx.measureText(t).width - 1) / t.length));
        return `<span style="letter-spacing:${ls.toFixed(2)}px">${l}</span>`;
      })
      .join("<br>");
    return best;
  }

  // leeres Kästchen aufziehen: von oben links nach unten rechts
  async function drawBox(box, r) {
    cur.innerHTML = CROSS;
    await move(r.L, r.T, 800);
    box.classList.add("on");
    await tween(900, t => {
      place(box, { L: r.L, T: r.T, W: r.W * t, H: r.H * t });
      put(r.L + r.W * t, r.T + r.H * t);
    });
    await sleep(250);
  }

  // Text tippen (läuft parallel zu den anderen Schritten)
  async function type() {
    const caret = document.createElement("span");
    caret.className = "cx-caret";
    for (let i = 1; i <= parts.length; i++) {
      const s = parts.slice(0, i);
      span.innerHTML = s.replace(/\n/g, "<br>");
      span.appendChild(caret);
      await sleep(parts[i - 1] === " " ? 26 : 32);
    }
    await sleep(600);
    caret.remove();
  }

  async function run() {
    if (typeof HomePhotos !== "undefined") HomePhotos.stop(); // im schwarzen Intro sind die Fotos noch versteckt
    // 1 · nur die Buchstaben auf Schwarz
    await sleep(1700);

    // 2 · leere Kästchen fürs Video und fürs erste Foto
    await drawBox(boxV, rect(vid));
    await drawBox(boxP, rect(photo));
    cur.innerHTML = ARROW_W;
    await move(cx + 60, cy + 40, 400);

    // 3 · Klick → Invertieren zum jetzigen Stand
    await click();
    document.querySelectorAll(".tile text").forEach(t => (t.style.fill = LIGHT));
    document.body.classList.remove("cx-dark");
    boxV.classList.remove("on");
    boxP.classList.remove("on");
    vid.classList.remove("cx-hide");
    photo.classList.remove("cx-hide");
    if (typeof HomePhotos !== "undefined") HomePhotos.start(); // ab jetzt wechseln die Fotos alle 2 Sekunden
    cur.innerHTML = ARROW;
    const typing = type().catch(() => {});
    await sleep(500);

    // 4 · Video größer ziehen
    const v0 = vid.getBoundingClientRect(),
      W0 = v0.width,
      W1 = 560;
    await move(v0.left, v0.top, 800);
    await click();
    frame(selV, rect(vid));
    selV.classList.add("on");
    tip.classList.add("on");
    await tween(1300, t => {
      const w = W0 + (W1 - W0) * t;
      vid.style.width = w + "px";
      const r = frame(selV, rect(vid));
      put(r.L, r.T);
      Object.assign(tip.style, { left: r.L + 14 + "px", top: r.T - 34 + "px" });
      tip.textContent = `B ${Math.round(w)} px   H ${Math.round((w * 9) / 16)} px`;
    });
    tip.textContent = "B 560 px   H 315 px · 100 %";
    await sleep(500);
    tip.classList.remove("on");
    selV.classList.remove("on");

    // 5 · Pipette: Goldgelb der sonnenbeschienenen Wand rechts im Video
    panel.classList.add("on");
    await sleep(300);
    const drop = document.getElementById("cxdrop").getBoundingClientRect();
    await move(drop.left + 15, drop.top + 15, 800);
    await click();
    document.getElementById("cxdrop").classList.add("on");
    cur.innerHTML = DROPPER;
    const tv = vid.getBoundingClientRect(),
      hx = tv.left + tv.width * 0.917,
      hy = tv.top + tv.height * 0.46;
    await move(hx, hy, 1000);
    loupe.style.background = GOLD;
    Object.assign(loupe.style, { left: hx - 70 + "px", top: hy + 14 + "px" });
    loupe.classList.add("on");
    await sleep(450);
    await click();
    document.getElementById("cxsw").style.background = GOLD;
    document.getElementById("cxhex").textContent = GOLD.toUpperCase();
    document.querySelectorAll(".tile text").forEach(t => (t.style.fill = GOLD));
    await sleep(450);
    loupe.classList.remove("on");
    cur.innerHTML = ARROW;
    document.getElementById("cxdrop").classList.remove("on");
    await sleep(300);
    panel.classList.remove("on");

    // 6 · Textrahmen schmaler schieben, sobald fertig getippt
    await typing;
    const vr = vid.getBoundingClientRect();
    let b = textRect();
    await move(b.L + b.W, b.T + b.H / 2, 800);
    await click();
    frame(selT, b);
    selT.classList.add("on");
    gL.style.left = vr.left - 40 + "px";
    gL.classList.add("on");
    tip.style.background = PINK;
    tip.classList.add("on");
    const T0 = txt.getBoundingClientRect().width,
      T1 = vr.left - 40 - txt.getBoundingClientRect().left;
    await tween(1300, t => {
      const w = T0 + (T1 - T0) * t;
      txt.style.width = w + "px";
      const r = frame(selT, textRect());
      put(r.L + r.W, r.T + r.H / 2);
      Object.assign(tip.style, { left: r.L + r.W + 14 + "px", top: r.T + r.H / 2 - 12 + "px" });
      tip.textContent = `B ${Math.round(w)} px`;
    });
    await sleep(450);
    tip.classList.remove("on");
    tip.style.background = BLUE;
    selT.classList.remove("on");
    gL.classList.remove("on");

    // 7 · Klick aufs Foto → Raster erscheint
    // Rahmen folgt dem gerade sichtbaren Foto (hoch- oder querformatig)
    let follow = true;
    const myTok = token;
    (function track() {
      if (!follow || myTok !== token) return;
      frame(selP, rect(photo));
      requestAnimationFrame(track);
    })();
    const pr = rect(photo);
    await move(pr.L + Math.min(pr.W, 140) * 0.6, pr.T + Math.min(pr.H, 140) * 0.55, 900);
    await click();
    selP.classList.add("on");
    // 12 Spalten, Rand 40 px; Spaltenabstand so gewählt, dass das Video genau 5 Spalten breit ist
    const M = 40,
      VW = vid.getBoundingClientRect().width,
      g = (12 * VW - 5 * (innerWidth - 2 * M)) / (12 * 4 - 5 * 11),
      c = (VW - 4 * g) / 5;
    const gridTop = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hh")) || 90,
      rows = 8,
      rowH = (innerHeight - gridTop) / rows,
      vLines = Array.from({ length: 12 }, (_, k) => [M + k * (c + g), M + k * (c + g) + c]).flat(),
      hLines = Array.from({ length: rows + 1 }, (_, k) => k * rowH);
    grid = el(
      "cx-grid",
      vLines.map(x => `<i class="v" style="left:${x}px"></i>`).join("") + hLines.map(y => `<i class="h" style="top:${y}px"></i>`).join(""),
    );
    await sleep(60);
    grid.classList.add("on");
    // Querformat-Fotos nur ein kleines Stück größer ziehen, bis ihre rechte Kante auf der nächsten Spaltenlinie liegt
    const pw0 = innerWidth / 3 - 40; // entspricht --pw aus style.css
    let LW = pw0;
    for (let n = 1; n <= 12; n++) {
      const w = n * c + (n - 1) * g;
      if (w >= pw0 - 0.5) { LW = w; break; }
    }
    tip.classList.add("on");
    await tween(600, t => {
      const w = pw0 + (LW - pw0) * t;
      photo.style.setProperty("--lw", w + "px");
      const r = rect(photo);
      if (r.W >= r.H) put(r.L + r.W, r.T + r.H);
      Object.assign(tip.style, { left: r.L + r.W + 12 + "px", top: r.T + r.H - 12 + "px" });
      tip.textContent = `Querformat · B ${Math.round(w)} px`;
    });
    await sleep(400);
    tip.classList.remove("on");
    selP.classList.remove("on");
    follow = false;

    // 8 · Text in die rechte Spalte ziehen: gleiche Breite wie das Video, oben bündig mit dem Foto
    const tb = textRect();
    await move(tb.L + 30, tb.T + 20, 900);
    await click();
    frame(selT, textRect());
    selT.classList.add("on");
    tip.classList.add("on");
    const t0 = txt.getBoundingClientRect(),
      vr2 = vid.getBoundingClientRect(),
      L0 = t0.left, Top0 = t0.top, W0t = t0.width,
      L1 = vr2.left, Top1 = rect(photo).T, W1t = vr2.width; // genau so breit wie das Video
    Object.assign(txt.style, { bottom: "auto", top: Top0 + "px" });
    // Zielgröße: Text füllt die Spalte vom Foto-Oberrand bis kurz vor das Video
    const GAP = 26,
      fit = balance(parts, W1t, vr2.top - Top1 - GAP),
      F0 = parseFloat(getComputedStyle(txt).fontSize),
      LH0 = parseFloat(getComputedStyle(txt).lineHeight) / F0;
    span.innerHTML = fit.html;
    txt.style.whiteSpace = "nowrap";
    await tween(1500, t => {
      const l = L0 + (L1 - L0) * t,
        tp = Top0 + (Top1 - Top0) * t,
        w = W0t + (W1t - W0t) * t;
      Object.assign(txt.style, { left: l + "px", top: tp + "px", width: w + "px", fontSize: F0 + (fit.f - F0) * t + "px", lineHeight: LH0 + (fit.lh - LH0) * t });
      const r = frame(selT, textRect());
      put(r.L + 30, r.T + 20);
      Object.assign(tip.style, { left: r.L + 44 + "px", top: r.T - 30 + "px" });
      tip.textContent = `X ${Math.round(l)}   Y ${Math.round(tp)}   B ${Math.round(w)} px`;
    });
    await sleep(700);
    tip.classList.remove("on");
    selT.classList.remove("on");
    await sleep(300);
    grid.classList.remove("on");

    // 9 · Farbeimer: ganzer Hintergrund wird Gold, Buchstaben werden weiß
    await sleep(400);
    cur.innerHTML = BUCKET;
    const ex = innerWidth * 0.47, ey = innerHeight * 0.3;
    await move(ex, ey, 800);
    await sleep(250);
    await click();
    document.querySelectorAll(".tile text").forEach(t => (t.style.fill = "#fff"));
    document.body.classList.add("cx-gold");
    await sleep(700);
    cur.innerHTML = ARROW;

    // 10 · Taxi-Foto festhalten und groß ziehen: so hoch wie Text + Video zusammen
    const p0 = rect(photo);
    await move(p0.L + 60, p0.T + 60, 700);
    await click();
    if (typeof HomePhotos !== "undefined") HomePhotos.stop();
    const imgs = [...photo.querySelectorAll("img")],
      taxi = imgs.find(i => /istanbul/.test(i.src));
    imgs.forEach(i => i.classList.toggle("on", i === taxi));
    const r = taxi.naturalWidth / taxi.naturalHeight || 0.667;
    let pb = rect(photo);
    let h0 = pb.W / r > pb.H ? pb.H : pb.W / r;
    h0 = (innerWidth / 3 - 40); // Hochformat-Höhe = --pw
    Object.assign(photo.style, { width: h0 * r + "px", height: h0 + "px" });
    frame(selP, rect(photo));
    selP.classList.add("on");
    await sleep(200);
    pb = rect(photo);
    await move(pb.L + pb.W, pb.T + pb.H, 500);
    const vb = vid.getBoundingClientRect(),
      H1 = vb.bottom - pb.T;
    tip.classList.add("on");
    await tween(1000, t => {
      const h = h0 + (H1 - h0) * t;
      Object.assign(photo.style, { width: h * r + "px", height: h + "px" });
      const q = frame(selP, rect(photo));
      put(q.L + q.W, q.T + q.H);
      Object.assign(tip.style, { left: q.L + q.W + 12 + "px", top: q.T + q.H - 12 + "px" });
      tip.textContent = `H ${Math.round(h)} px`;
    });
    await sleep(400);
    tip.classList.remove("on");
    selP.classList.remove("on");

    // Schluss: kurz stehen lassen, dann automatisch zum ersten Projekt auf Work
    await sleep(900);
    cur.style.opacity = "0";
    location.hash = "work";
  }

  let running = false;

  function start() {
    if (running || !desktop.matches || calm.matches) return;
    running = true;
    token++;
    build();
    cx = innerWidth * 0.55;
    cy = innerHeight + 40;
    put(cx, cy);
    document.body.classList.add("cx-dark");
    photo.classList.add("cx-hide");
    vid.classList.add("cx-hide");
    span.textContent = "";
    run().catch(e => {
      if (e !== ABORT) throw e;
    });
  }

  // alles zurück auf den normalen Zustand der Startseite
  function stop() {
    if (!running) return;
    running = false;
    token++;
    [cur, tip, loupe, boxV, boxP, selV, selT, selP, gL, panel, grid].forEach(n => n && n.remove());
    grid = null;
    document.body.classList.remove("cx-dark", "cx-gold");
    photo.classList.remove("cx-hide");
    vid.classList.remove("cx-hide");
    vid.style.width = "";
    ["width", "height", "--lw"].forEach(p => photo.style.removeProperty(p));
    txt.removeAttribute("style");
    span.innerHTML = ORIGINAL;
    document.querySelectorAll(".tile text").forEach(t => (t.style.fill = ""));
    tilesEl.style.opacity = "";
  }

  return { start, stop };
})();

let lastView = null;
function route() {
  const h = location.hash.slice(1),
    m0 = h.match(/^work\/(\d+)$/),
    c0 = h.match(/^work\/cat\/(\d+)$/),
    m = m0 && PROJECTS[m0[1] - 1] ? m0 : null,
    c = c0 && CATEGORIES[c0[1] - 1] ? c0 : null;
  const id = m
      ? "project"
      : c
        ? "work"
        : ["home", "work", "about", "contact"].includes(h)
          ? h
          : h === ""
            ? "home"
            : "work",
    wk = ["work", "project"].includes(id);
  if (m) {
    project(+m[1]);
    if (PROJECTS[m[1] - 1].iy) iyInit();
    if (PROJECTS[m[1] - 1].hd || PROJECTS[m[1] - 1].after || PROJECTS[m[1] - 1].vs || PROJECTS[m[1] - 1].loops || PROJECTS[m[1] - 1].fs)
      propsInit();
    if (PROJECTS[m[1] - 1].fs) {
      const fl = document.querySelectorAll("#project .fsf");
      if (reduce || !("IntersectionObserver" in window)) fl.forEach(e => e.classList.add("on"));
      else {
        const io = new IntersectionObserver(
          es =>
            es.forEach(x => {
              if (x.isIntersecting) {
                x.target.classList.add("on");
                io.unobserve(x.target);
              }
            }),
          { rootMargin: "0px 0px -10% 0px" },
        );
        fl.forEach(e => io.observe(e));
      }
    }
    if (PROJECTS[m[1] - 1].pr) {
      propsInit();
      reveal();
    }
    if (PROJECTS[m[1] - 1].ph) {
      carousel();
      reveal();
      {
        const ov = $("#ov");
        if (ov) {
          if (reduce || !("IntersectionObserver" in window)) ov.classList.add("on");
          else {
            const io = new IntersectionObserver(
              es =>
                es.forEach(x => {
                  if (x.isIntersecting) {
                    setTimeout(() => ov.classList.add("on"), 500);
                    io.disconnect();
                  }
                }),
              { threshold: 0.5 },
            );
            io.observe(ov);
          }
        }
      }
      const hb = $("#hbox");
      if (hb)
        hb.onclick = () => {
          if (!matchMedia("(hover:hover)").matches) hb.classList.toggle("pop");
        };
    }
  }
  if (id === "work") {
    activeCategory = c ? +c[1] - 1 : null;
    lastCat = activeCategory;
    work();
  }
  document.body.classList.toggle("rose", id === "contact");
  document.body.classList.toggle("bbl", !!(m && PROJECTS[m[1] - 1].pr));
  document.documentElement.style.setProperty("--hh", document.querySelector("header").offsetHeight + "px");
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("on", v.id === id));
  document.querySelectorAll("#nav a,.mm-nav a").forEach(a => {
    const on = a.getAttribute("href") === "#" + (wk ? "work" : id);
    on ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
  });
  document.body.classList.toggle("wk", id === "work");
  document.body.classList.toggle("wkall", id === "work" && !c);
  document.body.classList.toggle("home", id === "home");
  for (const x of [Tiles, HomePhotos]) id === "home" ? x.start() : x.stop();
  // Intro nur beim Betreten der Startseite (nicht beim Sprachwechsel)
  if (id !== "home") Intro.stop();
  else if (lastView !== "home") Intro.start();
  lastView = id;
  document.title =
    id === "home"
      ? "Jennifer Brunner"
      : (m ? PROJECTS[m[1] - 1].n : c ? categoryName(c[1] - 1) : id[0].toUpperCase() + id.slice(1)) + " — Jennifer Brunner";
  scrollTo(0, 0);
}
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll("[data-t]").forEach(e => (e.innerHTML = T(e.dataset.t)));
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === l));
  route();
}
document.querySelectorAll(".lang").forEach(
  x =>
    (x.onclick = e => {
      const b = e.target.closest("button");
      if (b) setLang(b.dataset.l);
    }),
);
addEventListener("hashchange", route);
try {
  history.scrollRestoration = "manual";
} catch (e) {}
addEventListener("load", () => setTimeout(() => scrollTo(0, 0), 0));
document.addEventListener("click", e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
  const h = a.getAttribute("href");
  if (h.length < 2) return;
  e.preventDefault();
  if (location.hash === h) route();
  else location.hash = h.slice(1);
});
setLang(lang);

/* Kontaktformular: Versand über FormSubmit, bei Fehler öffnet sich das E-Mail-Programm */
const MAIL = "j.brunner7@web.de";
$("#cform").noValidate = true; // eigene Prüfung statt Browser-Meldungen
$("#cform").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target,
    m = $("#cmsg"),
    btn = f.querySelector(".send");
  if (f._honey.value) return;
  let bad = false;
  f.querySelectorAll(".err").forEach(x => x.classList.remove("err"));
  ["name", "email", "herkunft", "anliegen"].forEach(n => {
    const el = f[n];
    if (!el.value.trim() || (n === "email" && !el.checkValidity())) {
      el.closest(".fld").classList.add("err");
      bad = true;
    }
  });
  if (!f.einverstanden.checked) {
    f.einverstanden.closest(".ok").classList.add("err");
    bad = true;
  }
  if (bad) {
    m.textContent = T("missing");
    return;
  }
  const d = {
    Name: f.name.value.trim(),
    "E-Mail": f.email.value.trim(),
    Herkunft: f.herkunft.value.trim(),
    "Unternehmen / Studio": f.organisation.value.trim() || "–",
    Anfrage: "Love letter",
    Anliegen: f.anliegen.value.trim(),
  };
  btn.disabled = true;
  m.textContent = T("sending");
  try {
    const r = await fetch("https://formsubmit.co/ajax/" + MAIL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...d,
        _subject: "Portfolio-Anfrage: " + d.Anfrage + " – " + d.Name,
        _replyto: d["E-Mail"],
        _template: "table",
        _captcha: "false",
      }),
    });
    if (!r.ok) throw 0;
    f.reset();
    m.textContent = T("sent");
  } catch (err) {
    m.textContent = T("fail");
    const body = Object.entries(d)
      .map(([k, v]) => k + ": " + v)
      .join("\n");
    location.href =
      "mailto:" +
      MAIL +
      "?subject=" +
      encodeURIComponent("Portfolio-Anfrage: " + d.Anfrage + " – " + d.Name) +
      "&body=" +
      encodeURIComponent(body);
  } finally {
    btn.disabled = false;
  }
});
