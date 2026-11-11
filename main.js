/* Texte in drei Sprachen. Reihenfolge in Projekttexten: [Englisch, Koreanisch, Deutsch] */
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
    ai: "I’m Jennifer Brunner, a fifth semester communication design student at HTW Berlin, working towards a Bachelor of Arts. I’m currently working part-time at the Berliner Grabmal Manufaktur, where I’m in charge of graphic design and manage client communication throughout the design process. I use design to evoke emotion, connect people, and open up new ways of understanding one another.",
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
    ai: "Ich bin Jennifer Brunner und studiere im fünften Semester Kommunikationsdesign an der HTW Berlin mit dem Ziel Bachelor of Arts. Derzeit arbeite ich in Teilzeit bei der Berliner Grabmal Manufaktur, wo ich für das Grafikdesign verantwortlich bin und die Kundenkommunikation während des gesamten Gestaltungsprozesses betreue. Ich nutze Design, um Emotionen zu wecken, Menschen zu verbinden und neue Wege zu öffnen, einander zu verstehen.",
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
  ko: {
    rights:
      "© 2026 Jennifer Brunner 및 표기된 사진가. 이 웹사이트의 모든 이미지, 사진, 그래픽은 저작권으로 보호됩니다. 사전 서면 허가 없이 복사, 다운로드, 재사용, 편집, 게시하거나 상업적으로 이용할 수 없습니다.",
    ytNote:
      '예고편은 YouTube에 있습니다. 클릭한 후에만 불러오며, 이때 IP 주소 등의 데이터가 YouTube/Google로 전송되고 쿠키가 설정될 수 있습니다. 자세한 내용은 <a href="datenschutz.html#youtube">개인정보 처리방침(독일어)</a>을 참고하세요.',
    nWork: "작업",
    nAbout: "소개",
    nContact: "연락",

    svc: "역량",
    s1: "<h3>아이덴티티</h3><p>로고</p><p>브랜드 매뉴얼</p><p>네이밍</p>",
    s2: "<h3>인쇄</h3><p>에디토리얼</p><p>포스터</p><p>타이포그래피</p>",
    s3: "<h3>디지털</h3><p>웹 디자인</p><p>모션 그래픽</p><p>소셜 미디어</p>",
    ai: "저는 HTW 베를린에서 학사 과정 5학기에 재학 중인 커뮤니케이션 디자인 전공생 제니퍼 브루너입니다. 현재 베를린 그라브말 마누팍투어(Berliner Grabmal Manufaktur)에서 파트타임으로 일하며, 그래픽 디자인을 맡고 디자인 과정 전반에 걸친 고객 커뮤니케이션을 담당하고 있습니다. 디자인으로 감정을 불러일으키고, 사람들을 연결하며, 서로를 이해하는 새로운 길을 엽니다.",
    bbId: "신분증",
    bbProps: "우리가 디자인한 소품 중 일부",
    bbExPr: "전시와 프리미어",
    bbSet: "세트 · KPD 지역 사무소",
    bbSetBy: "요제핀 슈타이너 드로잉",
    bbPost: "선거 포스터",
    bbStamp: "우리가 제작한 우표와 소인 예시",
    bbMake: "메이킹",
    bbPrem: "프리미어",
    mYear: "연도",
    mCat: "카테고리",
    mCtx: "맥락",
    mRole: "역할",
    mSw: "프로그램",
    cSub: "함께해요!",
    fName: "이름",
    fMail: "이메일",
    fFrom: "어디에서 오셨나요?",
    fOrg: "회사 (선택)",
    fMsg: "메시지",
    fOk: '문의에 답변하기 위해 제 정보가 사용되는 것에 동의합니다. 자세한 내용은 <a href="datenschutz.html#kontakt">개인정보 처리방침(독일어)</a>을 참고하세요.',
    fSend: "보내기",
    sending: "보내는 중 …",
    sent: "감사합니다! 메시지가 전송되었습니다.",
    fail: "전송되지 않았습니다. 대신 이메일 프로그램이 열립니다.",
    missing: "표시된 항목을 입력해 주세요.",
    back: "전체 보기로",
    all: "전체",
    soon: "이 카테고리의 프로젝트는 곧 공개됩니다.",
    backTo: c => c + " 목록으로",
    prev: "이전",
    next: "다음",
    expo: "전시 전경",
    swipe: "스와이프 →",
    swipeClick: "스와이프 또는 클릭 →",
    ytl: "YouTube에서 보기 ↗",
    film: "티저",
    tryH: "직접 해 보세요!",
    openTool: "툴 열기",
    tryTool: "단어를 입력하고 쓰레기 분류를 고르면 나만의 포스터가 만들어집니다.",
    exhib: "전시",
    play: "YouTube 동영상 불러오기",
    vnote: "《바빌론 베를린》 시즌 5 공식 예고편(ARD).",
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
  { n: ["Brand", "브랜드", "Brand"] },
  { n: ["Editorial", "에디토리얼", "Editorial"] },
  { n: ["Photography", "사진", "Fotografie"] },
  { n: ["Poster", "포스터", "Plakat"] },
  { n: ["Motion", "모션", "Motion"] },
  { hide: 1, n: ["Web", "웹", "Web"] },
  { hide: 1, n: ["Props", "소품", "Requisiten"] },
  { hide: 1, n: ["Brand Campaign", "브랜드 캠페인", "Markenkampagne"] },
  { hide: 1, n: ["Art Direction", "아트 디렉션", "Art Direction"] },
  { n: ["Print", "인쇄", "Print"] },
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
      "학기 프로젝트, 요제핀 슈타이너와 파트너십, 샤인 콜렉티브와 협업",
      "Semesterprojekt, in Partnerschaft mit Josefin Steiner und in Kollaboration mit Schein Kollektiv",
    ],
    ro: [
      "Type design, concept, layout, print, photography",
      "서체 개발, 콘셉트, 레이아웃, 인쇄, 사진",
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
        "시리즈 《바빌론 베를린》 시즌 5를 위해 등장인물 리젤로테 슈토르히의 KPD 지역 사무소에 쓰일 그래픽 소품을 제작했습니다. 《헝거 게임》, 《바빌론 베를린》 등의 작품에 그래픽 소품을 제작하는 회사 샤인 콜렉티브(Schein Kollektiv)와 협업했습니다.",
        "1933년 나치 집권 직전의 역사적 배경에 설득력 있게 어울리는 다양한 문서와 인쇄물을 디자인하는 것이 과제였습니다. 가장 큰 도전은 소품을 새것처럼 잘 보존된 상태로 보이게 하면서도 그 시대 특유의 역사적이고 고풍스러운 미감을 전달하는 것이었습니다.",
      ],
      [
        "Für die fünfte Staffel der Serie Babylon Berlin haben wir grafische Requisiten für das KPD-Bezirksbüro der Figur Liselotte Storch gestaltet. Dabei haben wir mit Schein Kollektiv zusammengearbeitet, einem Unternehmen, das grafische Requisiten für Produktionen wie Die Tribute von Panem und Babylon Berlin herstellt.",
        "Unsere Aufgabe war es, verschiedene Dokumente und Drucksachen zu gestalten, die sich überzeugend in das historische Setting kurz vor der Machtergreifung 1933 einfügen. Die größte Herausforderung bestand darin, die Requisiten neu und gut erhalten wirken zu lassen und trotzdem die typische historische, altmodische Ästhetik der Zeit zu vermitteln.",
      ],
    ],
    nt: [
      "Fourth-semester project, in collaboration with Josefin Steiner.",
      "4학기 프로젝트, 요제핀 슈타이너와 협업.",
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
    o: 4,
    y: 2026,
    fr: [
      "Three-hour exercise to develop a handful of layouts",
      "몇 가지 레이아웃을 만들기 위한 3시간 실습",
      "Dreistündige Übung, um eine Handvoll Layouts zu entwickeln",
    ],
    ro: [
      "Concept, text, layout, photography (all photos are my own), print",
      "콘셉트, 텍스트, 레이아웃, 사진(모든 사진 직접 촬영), 인쇄",
      "Konzept, Text, Layout, Fotografie (alle Fotos sind von mir), Print",
    ],
    sw: "InDesign, Photoshop, Lightroom",
    st: ["iy_cover"],
    bg: "#acb6be",
    fg: "#000",
    d: [
      [
        "Inyeon (인연) is a Korean word for the invisible thread between people who are meant to meet. The task of the exercise was to design any week of the year in at least twelve layouts.",
        "I decided to include it in my portfolio to show the more personal side of me.",
      ],
      [
        "인연은 만나야 할 사람들 사이를 잇는 보이지 않는 실을 뜻하는 한국어입니다. 이 실습의 과제는 1년 중 원하는 한 주를 최소 12개의 레이아웃으로 디자인하는 것이었습니다.",
        "저의 더 개인적인 모습을 보여 드리고 싶어 이 작업을 포트폴리오에 넣기로 했습니다.",
      ],
      [
        "Inyeon (인연) ist ein koreanisches Wort für den unsichtbaren Faden zwischen Menschen, die sich begegnen sollen. Aufgabe der Übung war es, eine beliebige Woche im Jahr in mindestens zwölf Layouts zu gestalten.",
        "Ich habe mich entschieden, es in mein Portfolio aufzunehmen, um meine persönlichere Seite zu zeigen.",
      ],
    ],
  },
  {
    n: "Dasein",
    t: [2],
    ph: 1,
    o: 3,
    y: 2025,
    fr: [
      "End-of-semester submission, photography course, 2 weeks",
      "학기 말 과제, 사진 수업, 기간 2주",
      "Endsemesterabgabe, Fotografiekurs, Zeitraum 2 Wochen",
    ],
    ro: ["Photographer, communication", "사진, 커뮤니케이션", "Fotografin, Kommunikation"],
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
        "호스피스는 작별의 장소만이 아닙니다.\\n그곳은 삶을 마주하는 곳입니다. 솔직하게, 정직하게, 거침없이.\\nF 부인과 S 씨는 그것이 무슨 뜻인지 저에게 보여 주었습니다. 두 분은 유머와 따뜻함으로 하루하루를 채우고, 가장 힘든 순간에도 삶의 기쁨을 찾아냅니다.",
        "S 씨는 이렇게 말한 적이 있습니다. “가끔은 내 머릿속에서 무언가 딸깍 하고 맞아떨어져서 모든 게 다시 괜찮아지기를 아직도 바라요.” 나흘 뒤, 그는 세상을 떠났습니다.\\n어떤 말은 우리 곁에 남습니다. 어떤 사람도 그렇습니다. 그들은 삶이 얼마나 깨지기 쉬운지, 그리고 우리가 아직 그것을 느낄 수 있을 때 얼마나 아름다울 수 있는지를 일깨워 줍니다.",
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
    fr: ["Semester project, photography", "학기 프로젝트, 사진", "Semesterprojekt Fotografie"],
    sw: "Lightroom",
    ro: ["Photographer, concept", "사진, 콘셉트", "Fotografin, Konzept"],
    st: ["ph_02"],
    bg: "#ddd",
    fg: "#000",
    d: [
      [
        "In collaboration with a fashion designer and model, I conceptualized and produced the editorial shoot. As art director and photographer, I developed the visual concept, directed the models and established the project's overall aesthetic.",
        "Drawing on Berlin's nightlife, Joe Strassner and the opulent sensuality of the 1920s, the series explores femininity as confident, playful and self-determined. The imagery portrays women who embrace their sexuality and sensuality for themselves rather than for the gaze of others.",
      ],
      [
        "패션 디자이너, 모델과 협업하여 에디토리얼 촬영을 기획하고 제작했습니다. 아트 디렉터이자 포토그래퍼로서 비주얼 콘셉트를 개발하고, 모델을 디렉팅하며, 프로젝트 전체의 미감을 구축했습니다.",
        "베를린의 밤 문화, 요 슈트라스너, 그리고 1920년대의 화려한 관능에서 영감을 받은 이 시리즈는 자신감 있고 유쾌하며 주체적인 여성성을 탐구합니다. 이미지 속 여성들은 타인의 시선이 아닌 자기 자신을 위해 섹슈얼리티와 관능을 받아들입니다.",
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
    d: ["Preview – this project will be uploaded soon.", "미리보기 – 이 프로젝트는 곧 업로드됩니다."],
  },
  {
    n: "Trenn dich",
    t: [3, 4, 0],
    o: 1,
    y: 2026,
    ro: [
      "Concept, strategy, programming, presentation",
      "콘셉트, 전략, 프로그래밍, 발표",
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
        "베를린 청소공사 BSR을 위한 가상의 캠페인을 기획했습니다. 기후 변화와 지구 온난화가 점점 더 시급해지는 지금, 특히 젊은 세대에게 분리배출의 중요성을 알리는 것이 목표입니다.",
        "그 중심에는 ‘쓰레기 알파벳’ 원리로 작동하는 제너레이티브 툴이 있으며, 단어를 포스터와 소셜 미디어 게시물로 바꿉니다. 이 툴이 BSR 웹사이트에 소개되어, 베를린 곳곳의 사람들이 쓰레기와 분리배출에 어울리는 청소년 은어나 말장난으로 자신만의 아이디어와 메시지를 보낼 수 있기를 바랍니다. 버리고 싶은 사람의 이름처럼 유쾌한 방향도 가능하고, Crash Out 대신 Trash Out, Trennungsgrund, Glass Skin 같은 표현도 있습니다.",
        "이 툴은 다섯 가지의 분리된 쓰레기 분류로 작동하며, 올해부터 분리 기준이 더 엄격해진 유리, 포장재, 음식물 쓰레기 등이 포함됩니다.",
      ],
      [
        "Für die BSR, die Berliner Stadtreinigung, haben wir eine fiktive Kampagne entwickelt, die vor allem junge Menschen für Mülltrennung sensibilisieren soll – ein Thema, das durch Klimawandel und Erderwärmung immer wichtiger wird.",
        "Herzstück ist ein generatives Tool nach dem Prinzip eines Müll-Alphabets, das Wörter in Plakate und Social-Media-Posts verwandelt. Unsere Vision: Das Tool lebt auf der BSR-Website, und Menschen aus ganz Berlin reichen eigene Ideen und Statements ein, oft aus Jugendsprache und Wortspielen rund um Müll und Recycling. Das darf auch verspielt sein: der Name von jemandem, den man gern entsorgen würde, oder Begriffe wie Trash Out statt Crash Out, Trennungsgrund oder Glass Skin.",
        "Das Tool arbeitet mit fünf getrennten Abfallkategorien, darunter Glas, bei dem die Trennregeln dieses Jahr strenger geworden sind, Verpackungen und Bioabfall.",
      ],
    ],
    nt: [
      "Short-term project week in the fifth semester, in collaboration with Feline Krüger. Made in three days.",
      "5학기 단기 프로젝트 주간, 펠리네 크뤼거와 협업. 3일 동안 제작.",
      "Kurzprojektwoche im fünften Semester, in Zusammenarbeit mit Feline Krüger. Entstanden in drei Tagen.",
    ],
  },
  {
    n: "Infektionskrankheiten",
    t: [1, 9],
    o: 8,
    y: 2025,
    fm: ["Magazine", "잡지", "Magazin"],
    ro: ["Layout, print, concept", "레이아웃, 인쇄, 콘셉트", "Layout, Print, Konzept"],
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
        "학기 말 프로젝트로 주어진 텍스트를 바탕으로 잡지나 책을 디자인하는 과제를 받았습니다. 우리는 병원을 넘어 모두에게 중요한 주제인 감염병을 선택했습니다.",
        "이 잡지는 감염이 무엇인지, 어떻게 퍼지는지, 어떤 질병이 역사를 바꾸었는지, 그리고 어떻게 스스로를 보호할 수 있는지를 쉬운 언어로 설명합니다. 대담한 타이포그래피, 핑크와 블랙, 사진과 일러스트의 조합으로 두려움이 아닌 호기심으로 넘겨 볼 수 있는 잡지를 만들고자 했습니다.",
      ],
      [
        "Für unser Endsemesterprojekt sollten wir zu einem vorgegebenen Text ein Magazin oder Buch gestalten. Wir haben uns für Infektionskrankheiten entschieden, ein Thema, das weit über Krankenhäuser und Kliniken hinausgeht.",
        "Das Magazin erklärt in einfacher Sprache, was Infektionen sind, wie sie sich verbreiten, welche Krankheiten Geschichte geschrieben haben und wie wir uns schützen können. Kräftige Typografie, Pink und Schwarz und eine Mischung aus Fotografie und Illustration sollen das Thema einladend machen: zum neugierigen Durchblättern, nicht zum Fürchten.",
      ],
    ],
    nt: [
      "End-of-semester project, in partnership with Marlene Müller, supervised by Prof. Jürgen Huber.",
      "학기 말 프로젝트, 마를레네 뮐러와 협업, 위르겐 후버 교수 지도.",
      "Endsemesterprojekt, in Partnerschaft mit Marlene Müller, unter Betreuung von Prof. Jürgen Huber.",
    ],
  },
  {
    n: "Berliner Grabmal",
    t: [0],
    o: 5,
    hd: "ph_grab",
    st: ["ph_grab"],
    bg: "#ececec",
    fg: "#000",
    d: ["Preview – this project will be uploaded soon.", "미리보기 – 이 프로젝트는 곧 업로드됩니다."],
  },
  {
    n: "Albumcover",
    t: [3],
    o: 6,
    hd: "ph_album",
    st: ["ph_album"],
    bg: "#ececec",
    fg: "#000",
    d: ["Preview – this project will be uploaded soon.", "미리보기 – 이 프로젝트는 곧 업로드됩니다."],
  },
  {
    n: "Brand M72",
    t: [0],
    o: 9,
    hd: "ph_m72",
    bg: "#ececec",
    fg: "#000",
    d: ["Preview – this project will be uploaded soon.", "미리보기 – 이 프로젝트는 곧 업로드됩니다."],
  },
];
Object.assign(MEDIA, {
  iy_cover: { u: "inyeon-mockup.jpg", r: 1.3333 },
  ph_grab: { u: "", r: 0.8, ph: 1 },
  ph_album: { u: "", r: 1, ph: 1 },
  ph_m72: { u: "ph-m72.jpg?v=2", r: 0.6665 },
});
PROJECTS.forEach(p =>
  ["d", "nt", "fr", "ro", "fm"].forEach(k => {
    if (Array.isArray(p[k]) && p[k].length === 2) p[k].push(p[k][0]);
  }),
);
CATEGORIES.forEach(c => {
  if (c.n.length === 2) c.n.push(c.n[0]);
});

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
const langIndex = () => (lang === "ko" ? 1 : lang === "de" ? 2 : 0),
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
  "Dasein",
  "Inyeon",
  "Berliner Grabmal",
  "Albumcover",
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
  ko: {
    ov: "한눈에 보는 모든 펼침면",
    flip: "직접 넘겨 보기",
    hint: "페이지를 드래그하거나 클릭해서 넘기세요",
    cover: "표지",
    prev: "이전 페이지",
    next: "다음 페이지",
  },
};
Object.assign(TEXTS.en, { cats: "Categories" });
Object.assign(TEXTS.de, { cats: "Kategorien" });
Object.assign(TEXTS.ko, { cats: "카테고리" });
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
/* Startseite: Video läuft zweimal. Ab der Hälfte des ersten Durchlaufs erscheint der Text Wort für Wort,
   der zweite Durchlauf ist unscharf. Danach – oder sobald man scrollt – geht es zu den Projekten. */
const Intro = (() => {
  const home = $("#home"),
    video = $("#intro-video"),
    words = [...home.querySelectorAll(".intro-text span span")],
    reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let round = 0,
    timers = [],
    leaving = false;

  const showAll = () => {
    words.forEach(w => w.classList.add("on"));
    home.classList.add("blur");
  };

  video.addEventListener("timeupdate", () => {
    if (round !== 0 || timers.length || video.currentTime < video.duration / 2) return;
    const step = ((video.duration / 2) * 1000) / (words.length + 1);
    timers = words.map((w, i) => setTimeout(() => w.classList.add("on"), i * step));
  });

  video.addEventListener("ended", () => {
    if (round === 0) {
      round = 1;
      home.classList.add("blur");
      video.play();
    } else goToWork();
  });

  function goToWork() {
    if (leaving || !document.body.classList.contains("home")) return;
    leaving = true;
    home.classList.add("leave");
    setTimeout(() => (location.hash = "work"), 800);
  }

  // Selbst scrollen überspringt das Intro
  addEventListener("wheel", e => e.deltaY > 8 && goToWork(), { passive: true });
  let touchY = null;
  addEventListener("touchstart", e => (touchY = e.touches[0].clientY), { passive: true });
  addEventListener("touchmove", e => touchY != null && touchY - e.touches[0].clientY > 40 && goToWork(), { passive: true });
  addEventListener("keydown", e => {
    if (["ArrowDown", "PageDown", " "].includes(e.key) && document.body.classList.contains("home")) {
      e.preventDefault();
      goToWork();
    }
  });

  return {
    start() {
      round = 0;
      leaving = false;
      home.classList.remove("blur", "leave");
      words.forEach(w => w.classList.remove("on"));
      if (reduceMotion) return showAll();
      video.currentTime = 0;
      video.play().catch(showAll); // z. B. im Stromsparmodus ohne Autoplay
    },
    stop() {
      video.pause();
      timers.forEach(clearTimeout);
      timers = [];
    },
  };
})();

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
  id === "home" ? Intro.start() : Intro.stop();
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
