import cielo from "@/assets/porta-cielo.jpg";
import chioma from "@/assets/porta-chioma.jpg";
import mare from "@/assets/porta-mare.jpg";
import roccia from "@/assets/porta-roccia.jpg";
import gioco from "@/assets/porta-gioco.jpg";

export const FULL_LOCALES = ["it", "en", "es"] as const;
export const SHORT_LOCALES = ["zh", "ja"] as const;
export const LOCALES = [...FULL_LOCALES, ...SHORT_LOCALES] as const;

export type Locale = (typeof LOCALES)[number];
export type FullLocale = (typeof FULL_LOCALES)[number];

export const isLocale = (v: string): v is Locale => (LOCALES as readonly string[]).includes(v);
export const isFullLocale = (v: string): v is FullLocale =>
  (FULL_LOCALES as readonly string[]).includes(v);

export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
  es: "Español",
  zh: "中文",
  ja: "日本語",
};

type T3 = Record<FullLocale, string>;
type P3 = Record<FullLocale, string[]>;

/* ---------------------------------------------------------------- UI ---- */

type UiCopy = {
  archive: string;
  about: string;
  autografia: string;
  contact: string;
  threshold: string;
  doors: string;
  read: string;
  room: string;
  back: string;
  texts: string;
  languages: string;
  enter: string;
};

export const ui: Record<FullLocale, UiCopy> = {
  it: {
    archive: "Archivio",
    about: "Chi sono",
    autografia: "Autografia di un gesto",
    contact: "Contatto",
    threshold: "Soglia d'ingresso",
    doors: "Le porte dell'archivio",
    read: "Letto",
    room: "La stanza",
    back: "Indietro",
    texts: "Scritti",
    languages: "Lingue",
    enter: "Entra",
  },
  en: {
    archive: "Archive",
    about: "About",
    autografia: "Autograph of a gesture",
    contact: "Contact",
    threshold: "Threshold",
    doors: "The doors of the archive",
    read: "Read",
    room: "The room",
    back: "Back",
    texts: "Writings",
    languages: "Languages",
    enter: "Enter",
  },
  es: {
    archive: "Archivo",
    about: "Quién soy",
    autografia: "Autografía de un gesto",
    contact: "Contacto",
    threshold: "Umbral",
    doors: "Las puertas del archivo",
    read: "Leído",
    room: "La sala",
    back: "Atrás",
    texts: "Escritos",
    languages: "Lenguas",
    enter: "Entrar",
  },
};

/* -------------------------------------------------------------- Home ---- */

export const home: Record<FullLocale, { title: string; lead: string; body: string[] }> = {
  it: {
    title: "Ilinx",
    lead: "Un archivio di pratiche, immagini e scritti sull'arrampicata.",
    body: [
      "L'arrampicata compone un campo fra corpo, roccia, gravità e ambiente.",
      "Gli scritti osservano le variazioni che avvengono in questo campo.",
      "Autografia di un gesto è il lavoro condiviso che può nascere da questa pratica.",
    ],
  },
  en: {
    title: "Ilinx",
    lead: "An archive of practices, images and writings on climbing.",
    body: [
      "Climbing composes a field between body, rock, gravity and environment.",
      "The writings observe the variations that occur within this field.",
      "Autograph of a gesture is the shared work that can emerge from this practice.",
    ],
  },
  es: {
    title: "Ilinx",
    lead: "Un archivo de prácticas, imágenes y escritos sobre la escalada.",
    body: [
      "La escalada compone un campo entre cuerpo, roca, gravedad y entorno.",
      "Los escritos observan las variaciones que ocurren dentro de este campo.",
      "Autografía de un gesto es el trabajo compartido que puede surgir de esta práctica.",
    ],
  },
};

/* ------------------------------------------------------------ Themes ---- */

export type ThemeSlug = "cielo" | "chioma" | "mare" | "roccia";

export type Theme = {
  slug: ThemeSlug;
  image: string;
  width: number;
  height: number;
  door: "sky" | "canopy" | "water" | "rain";
  span: string;
  ratio: string;
  name: T3;
  note: T3;
};

export const themes: Theme[] = [
  {
    slug: "cielo",
    image: cielo,
    width: 1024,
    height: 1280,
    door: "sky",
    span: "md:col-span-5",
    ratio: "aspect-[4/5]",
    name: { it: "Cielo", en: "Sky", es: "Cielo" },
    note: {
      it: "Esposizione, orientamento, variazioni del campo percettivo.",
      en: "Exposure, orientation, variations in the perceptual field.",
      es: "Exposición, orientación, variaciones del campo perceptivo.",
    },
  },
  {
    slug: "chioma",
    image: chioma,
    width: 1440,
    height: 900,
    door: "canopy",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
    name: { it: "Chioma", en: "Canopy", es: "Copa" },
    note: {
      it: "Respiro, ritmo e variazione del gesto.",
      en: "Breath, rhythm and variation of gesture.",
      es: "Respiración, ritmo y variación del gesto.",
    },
  },
  {
    slug: "mare",
    image: mare,
    width: 1600,
    height: 1008,
    door: "water",
    span: "md:col-span-12",
    ratio: "aspect-[16/10]",
    name: { it: "Mare", en: "Sea", es: "Mar" },
    note: {
      it: "La soglia mobile fra roccia, acqua e orizzonte.",
      en: "The moving threshold between rock, water and horizon.",
      es: "El umbral móvil entre roca, agua y horizonte.",
    },
  },
  {
    slug: "roccia",
    image: roccia,
    width: 1440,
    height: 900,
    door: "rain",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
    name: { it: "Roccia", en: "Rock", es: "Roca" },
    note: {
      it: "Attrito, regole locali e possibilità di movimento.",
      en: "Friction, local rules and possibilities of movement.",
      es: "Fricción, reglas locales y posibilidades de movimiento.",
    },
  },
];

export const autografiaDoor = {
  image: gioco,
  width: 1024,
  height: 1280,
  name: {
    it: "Autografia di un gesto",
    en: "Autograph of a gesture",
    es: "Autografía de un gesto",
  } as T3,
};

/* ------------------------------------------------------------- Texts ---- */

export type Text = {
  slug: string;
  theme: ThemeSlug;
  index: string;
  title: T3;
  body: P3;
};

export const texts: Text[] = [
  {
    slug: "il-gorgo",
    theme: "cielo",
    index: "i",
    title: { it: "Il gorgo", en: "The whirl", es: "El remolino" },
    body: {
      it: [
        "Caillois chiama ilinx i giochi che producono vertigine e modificano temporaneamente la percezione stabile.",
        "In parete l'equilibrio non è una posizione da conservare. Varia mentre cambiano gli appoggi, la gravità e l'orientamento del corpo.",
        "Il gesto emerge da questo insieme di relazioni. La salita è una delle sue possibili composizioni.",
      ],
      en: [
        "Caillois calls ilinx the games that produce vertigo and temporarily alter stable perception.",
        "On a wall, balance is not a position to preserve. It varies as holds, gravity and bodily orientation change.",
        "The gesture emerges from this set of relations. The ascent is one of its possible compositions.",
      ],
      es: [
        "Caillois llama ilinx a los juegos que producen vértigo y modifican temporalmente la percepción estable.",
        "En la pared el equilibrio no es una posición que conservar. Varía al cambiar los apoyos, la gravedad y la orientación del cuerpo.",
        "El gesto surge de este conjunto de relaciones. El ascenso es una de sus posibles composiciones.",
      ],
    },
  },
  {
    slug: "esposizione",
    theme: "cielo",
    index: "ii",
    title: { it: "Esposizione", en: "Exposure", es: "Exposición" },
    body: {
      it: [
        "L'esposizione modifica il campo percettivo. Distanza, profondità e rumore entrano nell'organizzazione del gesto.",
        "Il paesaggio non resta sullo sfondo: partecipa al concatenamento fra sguardo, presa, appoggio e respiro.",
        "La pratica consiste nel riconoscere questa variazione senza ridurla a un ostacolo da vincere.",
      ],
      en: [
        "Exposure modifies the perceptual field. Distance, depth and sound enter the organisation of gesture.",
        "The landscape does not remain in the background: it takes part in the assemblage of gaze, hold, foothold and breath.",
        "Practice means recognising this variation without reducing it to an obstacle to overcome.",
      ],
      es: [
        "La exposición modifica el campo perceptivo. Distancia, profundidad y sonido entran en la organización del gesto.",
        "El paisaje no queda en segundo plano: participa en el agenciamiento entre mirada, presa, apoyo y respiración.",
        "La práctica consiste en reconocer esta variación sin reducirla a un obstáculo que vencer.",
      ],
    },
  },
  {
    slug: "la-mano-decide-prima",
    theme: "chioma",
    index: "iii",
    title: {
      it: "La mano decide prima",
      en: "The hand decides first",
      es: "La mano decide primero",
    },
    body: {
      it: [
        "In una sequenza conosciuta, la decisione può precedere la sua rappresentazione cosciente.",
        "Non è istinto. È una memoria distribuita fra appoggi, peso, sguardo e ripetizioni accumulate.",
        "Allenare significa aumentare le variazioni disponibili, non fissare un solo modello di movimento.",
      ],
      en: [
        "In a familiar sequence, a decision may precede its conscious representation.",
        "This is not instinct. It is memory distributed across footholds, weight, gaze and accumulated repetitions.",
        "Training means increasing the available variations, not fixing a single model of movement.",
      ],
      es: [
        "En una secuencia conocida, la decisión puede preceder a su representación consciente.",
        "No es instinto. Es una memoria distribuida entre apoyos, peso, mirada y repeticiones acumuladas.",
        "Entrenar significa aumentar las variaciones disponibles, no fijar un único modelo de movimiento.",
      ],
    },
  },
  {
    slug: "respiro-laterale",
    theme: "chioma",
    index: "iv",
    title: { it: "Respiro laterale", en: "Lateral breath", es: "Respiración lateral" },
    body: {
      it: [
        "Il respiro fa parte del concatenamento motorio. Ne modifica il ritmo, il tono e la durata.",
        "L'apnea involontaria restringe le possibilità disponibili durante un passaggio; respirare permette alla sequenza di restare variabile.",
        "Danza, pratiche somatiche e lavoro in acqua hanno ampliato il repertorio che porto nell'arrampicata.",
      ],
      en: [
        "Breath is part of the motor assemblage. It changes rhythm, tone and duration.",
        "Involuntary breath-holding narrows the possibilities available during a move; breathing allows the sequence to remain variable.",
        "Dance, somatic practices and work in water have expanded the repertoire I bring to climbing.",
      ],
      es: [
        "La respiración forma parte del agenciamiento motor. Modifica su ritmo, tono y duración.",
        "La apnea involuntaria reduce las posibilidades disponibles durante un paso; respirar permite que la secuencia siga siendo variable.",
        "La danza, las prácticas somáticas y el trabajo en el agua han ampliado el repertorio que llevo a la escalada.",
      ],
    },
  },
  {
    slug: "il-perimetro",
    theme: "mare",
    index: "v",
    title: { it: "Il perimetro", en: "The perimeter", es: "El perímetro" },
    body: {
      it: [
        "Nel deep water solo la linea di salita si compone con una superficie mobile. La roccia dà appigli; il mare modifica distanza, suono e orientamento.",
        "Il confine fra acqua e roccia non è stabile. Si sposta con ogni onda e continua, attraverso l'orizzonte, nel confine fra mare e cielo.",
        "Il perimetro non chiude uno spazio: misura provvisoriamente le relazioni che lo attraversano.",
      ],
      en: [
        "In deep-water soloing, the climbing line is composed with a moving surface. Rock offers holds; the sea modifies distance, sound and orientation.",
        "The boundary between water and rock is not stable. It shifts with each wave and continues, through the horizon, into the boundary between sea and sky.",
        "The perimeter does not enclose a space: it provisionally measures the relations that cross it.",
      ],
      es: [
        "En el psicobloc, la línea de escalada se compone con una superficie móvil. La roca ofrece presas; el mar modifica distancia, sonido y orientación.",
        "El límite entre agua y roca no es estable. Se desplaza con cada ola y continúa, a través del horizonte, en el límite entre mar y cielo.",
        "El perímetro no cierra un espacio: mide provisionalmente las relaciones que lo atraviesan.",
      ],
    },
  },
  {
    slug: "linea-dacqua",
    theme: "mare",
    index: "vi",
    title: { it: "Linea d'acqua", en: "Waterline", es: "Línea de agua" },
    body: {
      it: [
        "Una soglia separa due ambienti e permette il passaggio fra loro. La linea d'acqua svolge entrambe le funzioni.",
        "Avvicinandosi al mare cambiano l'attrito, la temperatura, il suono e la conseguenza di una caduta. Cambiano quindi le regole locali del gioco.",
        "La via resta sulla roccia, ma il suo campo comprende l'acqua.",
      ],
      en: [
        "A threshold separates two environments and allows passage between them. The waterline performs both functions.",
        "Near the sea, friction, temperature, sound and the consequence of a fall change. The local rules of the game change with them.",
        "The route remains on the rock, but its field includes the water.",
      ],
      es: [
        "Un umbral separa dos entornos y permite el paso entre ellos. La línea de agua cumple ambas funciones.",
        "Al acercarse al mar cambian la fricción, la temperatura, el sonido y la consecuencia de una caída. Cambian así las reglas locales del juego.",
        "La vía permanece en la roca, pero su campo incluye el agua.",
      ],
    },
  },
  {
    slug: "attrito",
    theme: "roccia",
    index: "vii",
    title: { it: "Attrito", en: "Friction", es: "Fricción" },
    body: {
      it: [
        "L'attrito è una relazione fra superfici. Varia con l'umidità, la temperatura e la pressione esercitata.",
        "Queste variazioni cambiano le possibilità di una stessa via. La ripetizione non restituisce mai condizioni identiche.",
        "Leggere la roccia significa percepire le regole locali che emergono nel contatto.",
      ],
      en: [
        "Friction is a relation between surfaces. It varies with humidity, temperature and applied pressure.",
        "These variations alter the possibilities of the same route. Repetition never restores identical conditions.",
        "Reading rock means perceiving the local rules that emerge through contact.",
      ],
      es: [
        "La fricción es una relación entre superficies. Varía con la humedad, la temperatura y la presión ejercida.",
        "Estas variaciones alteran las posibilidades de una misma vía. La repetición nunca restituye condiciones idénticas.",
        "Leer la roca significa percibir las reglas locales que surgen en el contacto.",
      ],
    },
  },
  {
    slug: "tracciare",
    theme: "roccia",
    index: "viii",
    title: { it: "Tracciare", en: "Setting", es: "Equipar" },
    body: {
      it: [
        "Tracciare significa costruire un sistema di regole per corpi che non si conoscono in anticipo.",
        "Una linea dispone prese, distanze e orientamenti senza determinare interamente la soluzione.",
        "Quando compare un gesto non previsto, il gioco mostra una possibilità che il tracciatore non aveva anticipato.",
      ],
      en: [
        "Setting means constructing a system of rules for bodies that cannot be known in advance.",
        "A line arranges holds, distances and orientations without fully determining the solution.",
        "When an unforeseen gesture appears, the game reveals a possibility the setter had not anticipated.",
      ],
      es: [
        "Equipar significa construir un sistema de reglas para cuerpos que no se conocen de antemano.",
        "Una línea dispone presas, distancias y orientaciones sin determinar por completo la solución.",
        "Cuando aparece un gesto imprevisto, el juego muestra una posibilidad que quien equipó no había anticipado.",
      ],
    },
  },
];

export const textsByTheme = (theme: ThemeSlug) => texts.filter((t) => t.theme === theme);

/* ------------------------------------------------- Autografia di un gesto ---- */

export const autografia: Record<
  FullLocale,
  { kicker: string; title: string; lead: string; body: string[]; close: string }
> = {
  it: {
    kicker: "Autografia di un gesto",
    title: "Una pratica condivisa",
    lead: "Un lavoro individuale sull'arrampicata, costruito a partire dal corpo, dalla linea e dalle condizioni presenti.",
    body: [
      "Osserviamo come si compongono peso, appoggi, sguardo e respiro in una sequenza. Il lavoro parte da ciò che accade, non da un modello unico da riprodurre.",
      "Ripetere serve a produrre differenze percepibili e ad ampliare le possibilità di movimento. Anche i passaggi facili fanno parte della pratica.",
      "Posso costruire linee in falesia o in palestra attorno a una questione precisa emersa durante il lavoro.",
    ],
    close: "Per iniziare puoi scrivere dove arrampichi, da quanto tempo e quale situazione vuoi osservare.",
  },
  en: {
    kicker: "Autograph of a gesture",
    title: "A shared practice",
    lead: "Individual work on climbing, built from the body, the line and present conditions.",
    body: [
      "We observe how weight, footholds, gaze and breath compose a sequence. The work begins with what happens, not with a single model to reproduce.",
      "Repetition serves to produce perceptible differences and expand the possibilities of movement. Easy sequences are also part of the practice.",
      "I can construct lines outdoors or indoors around a precise question emerging from the work.",
    ],
    close: "To begin, write where you climb, how long you have climbed and which situation you want to observe.",
  },
  es: {
    kicker: "Autografía de un gesto",
    title: "Una práctica compartida",
    lead: "Un trabajo individual sobre la escalada, construido a partir del cuerpo, la línea y las condiciones presentes.",
    body: [
      "Observamos cómo se componen el peso, los apoyos, la mirada y la respiración en una secuencia. El trabajo parte de lo que ocurre, no de un único modelo que reproducir.",
      "Repetir sirve para producir diferencias perceptibles y ampliar las posibilidades de movimiento. Los pasos fáciles también forman parte de la práctica.",
      "Puedo construir líneas en roca o en rocódromo alrededor de una cuestión precisa surgida durante el trabajo.",
    ],
    close: "Para empezar, escribe dónde escalas, desde cuándo y qué situación quieres observar.",
  },
};

/* ------------------------------------------------------------- About ---- */

type AboutCopy = {
  title: string;
  intro: string;
  stages: { title: string; body: string }[];
};

export const about: Record<FullLocale, AboutCopy> = {
  it: {
    title: "Chi sono",
    intro: "Il mio percorso attraversa pratiche del corpo, movimento, acqua, filosofia e arrampicata. Non le considero metodi da sommare, ma esperienze che modificano il modo in cui osservo un gesto.",
    stages: [
      { title: "Corpo", body: "Mi sono formato come operatore craniosacrale e in Body-Mind Centering, nei percorsi SME per adulti e IDME per bambini. Ho seguito anche una formazione prenatale, acquaticità neonatale e Watsu." },
      { title: "Movimento", body: "Ho studiato danza classica e butoh, poi contact improvisation, aikido, capoeira, tai chi e tango. Ogni pratica dispone diversamente peso, ritmo, contatto e orientamento." },
      { title: "Acqua", body: "Ho praticato danza in acqua e apnea con monopinna. Nell'acqua il sostegno, la pressione e il respiro cambiano le regole del movimento." },
      { title: "Pensiero e disegno", body: "Ho studiato filosofia all'università senza concludere la laurea. Leggo e disegno: sono due modi, diversi, di seguire una linea e vedere come varia." },
      { title: "Arrampicata", body: "Arrampico, insegno e traccio. Porto in questo lavoro le domande prodotte dalle altre pratiche, senza trasformarle in un metodo universale." },
    ],
  },
  en: {
    title: "About",
    intro: "My path crosses body practices, movement, water, philosophy and climbing. I do not regard them as methods to be added together, but as experiences that alter how I observe a gesture.",
    stages: [
      { title: "Body", body: "I trained as a craniosacral practitioner and in Body-Mind Centering, through SME work with adults and IDME work with children. I also trained in prenatal work, infant aquatics and Watsu." },
      { title: "Movement", body: "I studied classical dance and butoh, followed by contact improvisation, aikido, capoeira, tai chi and tango. Each practice arranges weight, rhythm, contact and orientation differently." },
      { title: "Water", body: "I practised dance in water and monofin freediving. In water, support, pressure and breath change the rules of movement." },
      { title: "Thought and drawing", body: "I studied philosophy at university without completing the degree. I read and draw: two different ways of following a line and seeing how it varies." },
      { title: "Climbing", body: "I climb, teach and set routes. I bring questions produced by the other practices into this work, without turning them into a universal method." },
    ],
  },
  es: {
    title: "Quién soy",
    intro: "Mi recorrido atraviesa prácticas del cuerpo, movimiento, agua, filosofía y escalada. No las considero métodos que sumar, sino experiencias que modifican mi manera de observar un gesto.",
    stages: [
      { title: "Cuerpo", body: "Me formé como operador craneosacral y en Body-Mind Centering, en los recorridos SME para adultos e IDME para niños. También me formé en trabajo prenatal, acuaticidad para bebés y Watsu." },
      { title: "Movimiento", body: "Estudié danza clásica y butoh, después contact improvisation, aikido, capoeira, tai chi y tango. Cada práctica dispone de forma distinta el peso, el ritmo, el contacto y la orientación." },
      { title: "Agua", body: "Practiqué danza en el agua y apnea con monoaleta. En el agua, el sostén, la presión y la respiración cambian las reglas del movimiento." },
      { title: "Pensamiento y dibujo", body: "Estudié filosofía en la universidad sin terminar la carrera. Leo y dibujo: son dos maneras distintas de seguir una línea y ver cómo varía." },
      { title: "Escalada", body: "Escalo, enseño y equipo vías. Llevo a este trabajo las preguntas producidas por las otras prácticas, sin convertirlas en un método universal." },
    ],
  },
};


export const contact: Record<FullLocale, { title: string; body: string; hint: string }> = {
  it: {
    title: "Scrivere",
    body: "Una mail, senza formule. Rispondo quando ho tempo e attenzione, di solito entro qualche giorno.",
    hint: "Se scrivi per lavorare insieme, dimmi dove arrampichi e da quanto.",
  },
  en: {
    title: "Writing",
    body: "An email, no formalities. I answer when I have time and attention, usually within a few days.",
    hint: "If you write to work together, tell me where you climb and for how long.",
  },
  es: {
    title: "Escribir",
    body: "Un correo, sin fórmulas. Respondo cuando tengo tiempo y atención, normalmente en unos días.",
    hint: "Si escribes para trabajar juntos, dime dónde escalas y desde cuándo.",
  },
};

export const email = "ilinx@proton.me";

/* --------------------------------------------------- Short languages ---- */

export const shortPages: Record<(typeof SHORT_LOCALES)[number], { lines: string[] }> = {
  zh: {
    lines: [
      "Ilinx — 攀岩、教练、定线。",
      "岩石不教什么。身体与岩壁的相遇产生了此前不存在的东西：一个只发生一次的动作。",
      "此处只有简介。完整的文字见意大利语、英语或西班牙语页面。",
    ],
  },
  ja: {
    lines: [
      "Ilinx — クライミング、コーチング、ルートセット。",
      "岩は何も教えない。身体と壁の出会いが、それまで存在しなかったものを生む。一度きりの動き。",
      "ここにあるのは短い紹介だけです。全文はイタリア語・英語・スペイン語のページに。",
    ],
  },
};
