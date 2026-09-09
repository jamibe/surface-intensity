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
    title: "L'acqua risponde al contatto.",
    lead: "Non si entra qui: si appoggia un dito sulla superficie e si guarda cosa succede. Scritti, immagini, un cielo di segni. E una stanza più silenziosa, che si trova soltanto cercandola.",
    body: [
      "La roccia non insegna niente. Sta lì da prima di noi e resterà dopo, indifferente. Ma l'incontro fra un corpo e una parete produce qualcosa che prima non c'era: un gesto che accade una volta, e che poteva benissimo non accadere.",
      "Scrivo di questo. Non di cosa la montagna rivela su di me — quella è psicologia con la vernice buona. Di come una sequenza si forma, di come una mano decide prima della testa, di cosa resta addosso quando si scende.",
      "Più avanti, senza rumore, c'è un modo di lavorare insieme su una linea. Non è in cima alla pagina e non ha un pulsante.",
    ],
  },
  en: {
    title: "Water answers the touch.",
    lead: "You don't enter here: you rest a finger on the surface and watch what happens. Writings, images, a sky of marks. And a quieter room, found only by looking for it.",
    body: [
      "Rock teaches nothing. It was here before us and will stay after, indifferent. But the meeting of a body and a wall produces something that wasn't there before: a gesture that happens once, and could easily not have happened.",
      "That is what I write about. Not what the mountain reveals about me — that is psychology with a good coat of varnish. About how a sequence forms, how a hand decides ahead of the head, what stays on the skin once you're down.",
      "Further on, without noise, there is a way of working together on a line. It is not at the top of the page and it has no button.",
    ],
  },
  es: {
    title: "El agua responde al contacto.",
    lead: "Aquí no se entra: se apoya un dedo en la superficie y se mira qué ocurre. Escritos, imágenes, un cielo de señales. Y una sala más silenciosa, que sólo se encuentra buscándola.",
    body: [
      "La roca no enseña nada. Estaba antes que nosotros y seguirá después, indiferente. Pero el encuentro entre un cuerpo y una pared produce algo que antes no existía: un gesto que sucede una vez, y que bien podría no haber sucedido.",
      "De eso escribo. No de lo que la montaña revela sobre mí — eso es psicología con buen barniz. De cómo se forma una secuencia, de cómo una mano decide antes que la cabeza, de qué queda en la piel al bajar.",
      "Más adelante, sin ruido, hay una manera de trabajar juntos sobre una línea. No está arriba en la página y no tiene un botón.",
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
      it: "Aria, esposizione, la parte del corpo che sta fuori.",
      en: "Air, exposure, the part of the body that stays outside.",
      es: "Aire, exposición, la parte del cuerpo que queda fuera.",
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
      it: "Movimento laterale, respiro, quello che si impara ballando.",
      en: "Lateral movement, breath, what you learn by dancing.",
      es: "Movimiento lateral, respiración, lo que se aprende bailando.",
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
      it: "Il perimetro fra roccia e acqua, esteso fino all'orizzonte.",
      en: "The perimeter between rock and water, extending to the horizon.",
      es: "El perímetro entre roca y agua, extendido hasta el horizonte.",
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
      it: "La superficie che decide i passi. Attrito, pioggia, attesa.",
      en: "The surface that decides the moves. Friction, rain, waiting.",
      es: "La superficie que decide los pasos. Fricción, lluvia, espera.",
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
        "La mano che entra in acqua non rompe niente: l'increspatura si allarga da sola e torna in silenzio alla superficie. Il gorgo non è un buco, è un modo che ha l'acqua di restare acqua mentre gira.",
        "In parete succede lo stesso. Il corpo si sbilancia verso una superficie che non è fatta per essere verticale, e per un istante l'equilibrio non è né perso né trovato: gira. È lì che si sta, il più a lungo possibile.",
        "Chi arrampica per arrivare in cima passa in quel punto senza vederlo. Non è un errore. È solo un'altra pratica.",
      ],
      en: [
        "The hand entering water breaks nothing: the ripple widens on its own and returns quietly to the surface. A whirl is not a hole; it is water's way of staying water while it turns.",
        "The same happens on a wall. The body tips toward a surface not made to be vertical, and for an instant balance is neither lost nor found: it turns. That is where you stay, as long as you can.",
        "Whoever climbs to reach the top passes through that point without seeing it. Not a mistake. Just another practice.",
      ],
      es: [
        "La mano que entra en el agua no rompe nada: la onda se abre sola y vuelve en silencio a la superficie. El remolino no es un agujero, es la manera que tiene el agua de seguir siendo agua mientras gira.",
        "En la pared ocurre lo mismo. El cuerpo se desequilibra hacia una superficie que no está hecha para ser vertical, y por un instante el equilibrio no está ni perdido ni encontrado: gira. Ahí se está, lo más posible.",
        "Quien escala para llegar arriba pasa por ese punto sin verlo. No es un error. Es otra práctica.",
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
        "Il vuoto sotto non è una misura, è una temperatura. Cambia il modo in cui le dita si chiudono, non la loro forza.",
        "Su una via lunga arriva sempre il momento in cui il paesaggio smette di essere sfondo e diventa parte del movimento. Da lì in poi si arrampica anche col campo visivo.",
        "Non c'è niente da vincere. C'è da restare presenti in una condizione che il corpo, ragionevolmente, vorrebbe interrompere.",
      ],
      en: [
        "The void below is not a measure, it is a temperature. It changes the way fingers close, not their strength.",
        "On a long route there always comes a moment when the landscape stops being background and becomes part of the movement. From then on you climb with the visual field too.",
        "There is nothing to win. There is staying present in a condition the body, reasonably, would like to end.",
      ],
      es: [
        "El vacío de abajo no es una medida, es una temperatura. Cambia el modo en que los dedos se cierran, no su fuerza.",
        "En una vía larga siempre llega el momento en que el paisaje deja de ser fondo y pasa a formar parte del movimiento. Desde ahí se escala también con el campo visual.",
        "No hay nada que ganar. Hay que permanecer presente en una condición que el cuerpo, razonablemente, querría interrumpir.",
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
        "Quando una sequenza funziona, la decisione non arriva dalla testa. La mano è già altrove e il pensiero la raggiunge dopo, per confermare.",
        "Questo non è istinto. È memoria distribuita: anni di peso spostato, di appoggi cercati con la pianta del piede, di cadute assorbite. Il corpo conserva molto più di quanto sappia raccontare.",
        "Allenare vuol dire allargare quel repertorio, non irrigidirlo. Un movimento imparato male è un movimento che chiede sempre il permesso.",
      ],
      en: [
        "When a sequence works, the decision does not come from the head. The hand is already elsewhere and thought catches up afterwards, to confirm.",
        "This is not instinct. It is distributed memory: years of shifted weight, of footholds searched with the sole, of absorbed falls. The body keeps far more than it can narrate.",
        "Training means widening that repertoire, not stiffening it. A badly learned movement is a movement that always asks permission.",
      ],
      es: [
        "Cuando una secuencia funciona, la decisión no llega de la cabeza. La mano ya está en otro sitio y el pensamiento la alcanza después, para confirmar.",
        "No es instinto. Es memoria distribuida: años de peso desplazado, de apoyos buscados con la planta del pie, de caídas absorbidas. El cuerpo guarda mucho más de lo que sabe contar.",
        "Entrenar es ampliar ese repertorio, no endurecerlo. Un movimiento mal aprendido es un movimiento que siempre pide permiso.",
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
        "Quasi tutti trattengono il fiato nei passaggi duri. Poi si stupiscono che le braccia si chiudano.",
        "Il respiro non serve a rilassarsi: serve a tenere aperta la possibilità di cambiare idea a metà movimento. Un corpo in apnea ha già scelto, e da lì può solo tirare.",
        "Le cose che mi hanno insegnato di più sull'arrampicata sono successe fuori dall'arrampicata, in stanze con il parquet e in acqua.",
      ],
      en: [
        "Almost everyone holds their breath in hard moves. Then they are surprised when the arms shut down.",
        "Breath is not there to relax you: it keeps open the possibility of changing your mind mid-movement. A body in apnea has already chosen, and from there it can only pull.",
        "The things that taught me most about climbing happened outside climbing, in rooms with wooden floors and in water.",
      ],
      es: [
        "Casi todos aguantan la respiración en los pasos duros. Luego se sorprenden de que los brazos se cierren.",
        "La respiración no sirve para relajarse: mantiene abierta la posibilidad de cambiar de idea a mitad del movimiento. Un cuerpo en apnea ya ha elegido, y desde ahí sólo puede tirar.",
        "Lo que más me ha enseñado sobre escalada ocurrió fuera de la escalada, en salas con parqué y en el agua.",
      ],
    },
  },
  {
    slug: "attrito",
    theme: "roccia",
    index: "v",
    title: { it: "Attrito", en: "Friction", es: "Fricción" },
    body: {
      it: [
        "L'attrito è una conversazione fra due superfici che non si conoscono. Cambia con l'umidità, con l'ora, con la temperatura della pelle.",
        "Per questo la stessa via non è mai la stessa via. Non è una frase gentile: è una condizione tecnica. Chi la ignora si allena a ripetere, non a leggere.",
        "Leggere la roccia non vuol dire indovinare cosa nasconde. Non nasconde niente. Vuol dire accorgersi di quello che è già in vista.",
      ],
      en: [
        "Friction is a conversation between two surfaces that do not know each other. It shifts with humidity, with the hour, with skin temperature.",
        "So the same route is never the same route. That is not a kind phrase: it is a technical condition. Ignoring it trains you to repeat, not to read.",
        "Reading rock does not mean guessing what it hides. It hides nothing. It means noticing what is already in plain view.",
      ],
      es: [
        "La fricción es una conversación entre dos superficies que no se conocen. Cambia con la humedad, con la hora, con la temperatura de la piel.",
        "Por eso la misma vía nunca es la misma vía. No es una frase amable: es una condición técnica. Quien la ignora se entrena a repetir, no a leer.",
        "Leer la roca no es adivinar lo que esconde. No esconde nada. Es darse cuenta de lo que ya está a la vista.",
      ],
    },
  },
  {
    slug: "tracciare",
    theme: "roccia",
    index: "vi",
    title: { it: "Tracciare", en: "Setting", es: "Equipar" },
    body: {
      it: [
        "Tracciare è scrivere per un corpo che non conosci. Metti una presa e stai proponendo una domanda a qualcuno che arriverà fra tre giorni, più basso o più alto di te.",
        "Una buona linea non impone la soluzione: la rende trovabile. Se esiste un solo modo di salire, non hai tracciato, hai chiuso una porta.",
        "La parte che mi interessa è quando qualcuno risolve un passaggio in un modo che non avevo previsto. Lì il blocco smette di essere mio.",
      ],
      en: [
        "Setting is writing for a body you don't know. You place a hold and you are posing a question to someone arriving in three days, shorter or taller than you.",
        "A good line does not impose the solution: it makes it findable. If there is only one way up, you haven't set, you have closed a door.",
        "The part I care about is when someone solves a move in a way I hadn't foreseen. There the problem stops being mine.",
      ],
      es: [
        "Equipar es escribir para un cuerpo que no conoces. Colocas una presa y estás planteando una pregunta a alguien que llegará dentro de tres días, más bajo o más alto que tú.",
        "Una buena línea no impone la solución: la hace encontrable. Si sólo hay una manera de subir, no has equipado, has cerrado una puerta.",
        "La parte que me interesa es cuando alguien resuelve un paso de un modo que yo no había previsto. Ahí el bloque deja de ser mío.",
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
    title: "Un gesto che accade una volta",
    lead: "Non una firma che lasci sulla roccia. Un evento che accade fra te e lei, e che poteva anche non accadere.",
    body: [
      "Non è un pacchetto e non è un programma. È un lavoro su un corpo alla volta: come si distribuisce il peso, come si legge una sequenza prima di toccarla, cosa succede al respiro quando la difficoltà sale.",
      "Serve tempo e serve disponibilità a rifare le cose facili. Chi cerca un metodo rapido non troverà niente di utile qui.",
      "Traccio anche linee, in falesia e in palestra, per chi vuole un blocco costruito su una domanda precisa.",
    ],
    close: "Si comincia scrivendo due righe: dove sei adesso, da quanto, cosa ti si blocca.",
  },
  en: {
    kicker: "Autograph of a gesture",
    title: "A gesture that happens once",
    lead: "Not a signature you leave on the rock. An event that happens between you and it, and that could just as well not have happened.",
    body: [
      "It is not a package and not a program. It is work on one body at a time: how weight is distributed, how a sequence is read before touching it, what happens to breathing when difficulty rises.",
      "It takes time and a willingness to redo easy things. Anyone looking for a fast method will find nothing useful here.",
      "I also set lines, outdoors and indoors, for people who want a problem built around a precise question.",
    ],
    close: "It starts by writing a few lines: where you are now, for how long, what stops you.",
  },
  es: {
    kicker: "Autografía de un gesto",
    title: "Un gesto que sucede una vez",
    lead: "No una firma que dejas en la roca. Un acontecimiento que sucede entre tú y ella, y que bien podría no haber sucedido.",
    body: [
      "No es un paquete ni un programa. Es un trabajo sobre un cuerpo cada vez: cómo se reparte el peso, cómo se lee una secuencia antes de tocarla, qué le pasa a la respiración cuando sube la dificultad.",
      "Requiere tiempo y disposición a repetir lo fácil. Quien busque un método rápido no encontrará nada útil aquí.",
      "También equipo líneas, en roca y en rocódromo, para quien quiere un bloque construido sobre una pregunta precisa.",
    ],
    close: "Se empieza escribiendo dos líneas: dónde estás ahora, desde cuándo, qué se te bloquea.",
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
