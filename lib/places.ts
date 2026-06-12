export type SocialTag = "sozinho" | "date" | "galera"

export type InterestTag =
  | "Surf"
  | "Trilha"
  | "Pôr do sol"
  | "Pé na areia"
  | "Tainha assada"
  | "Artesanato"
  | "Música ao vivo"
  | "Cerveja gelada"
  | "Mergulho"
  | "História"
  | "Mirante"
  | "Natureza"
  | "Cachoeira"
  | "Passeio de barco"
  | "Família"

export type PlaceCategory =
  | "Praia"
  | "Trilha"
  | "Gastronomia"
  | "Mirante"
  | "Cultural"
  | "Natureza"
  | "Noite"
  | "Família"

export interface Place {
  id: string
  name: string
  description: string
  image: string
  images?: string[]
  category: PlaceCategory
  priceLevel: 1 | 2 | 3
  rating?: number
  tags?: string[]
  difficulty?: "easy" | "medium" | "hard"
  socialTags: SocialTag[]
  interests: InterestTag[]
  location?: string
  vibeLevel?: number
  vibeComment?: string
  hours?: {
    weekdays?: string
    weekend?: string
    sunday?: string
  }
  tips?: {
    id: string
    author: string
    avatar: string
    content: string
  }[]
  events?: {
    id: string
    name: string
    color: string
  }[]
  comfort?: string[]
}

const defaultComfort = ["Wi-Fi", "Estacionamento", "Pet Friendly", "Acessível"]

const tipOpeners = [
  "Chega cedo e presta atenção na luz.",
  "Vai sem pressa e deixa o lugar te guiar.",
  "Se puder, foge do horário mais cheio.",
  "Leva água e vai no ritmo da ilha.",
  "Vale separar um tempo maior do que tu acha.",
]

const tipClosers = [
  "é melhor quando tu encara com calma.",
  "fica mais bonito quando a pressa fica de fora.",
  "entrega mais quando tu anda devagar.",
  "muda bastante entre semana e fim de semana.",
  "ganha outro clima quando a luz baixa.",
]

function hashString(value: string) {
  let hash = 0

  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0
  }

  return hash
}

function formatPlaceLabel(value: string) {
  return value
    .replace(/-/g, " ")
    .replace(/(^|\s)(\p{L})/gu, (_, prefix: string, character: string) => {
      return `${prefix}${character.toLocaleUpperCase("pt-BR")}`
    })
}

const defaultTips = (id: string) => {
  const seed = hashString(id)
  const label = formatPlaceLabel(id).toLocaleLowerCase("pt-BR")

  const isPraia = /praia|ilha|matadeiro|mare|praia|praia-do|campeche/.test(id)
  const isTrilha = /trilha|mirante|lagoinha|pedra|costao|cachoeira/.test(id)
  const isGastronomia = /bar|ostras|mercado|restaurante|jazz|arantes?/.test(id)

  const extraForPlace = () => {
    if (isPraia) return "Leve protetor solar e cuidado com correnteza onde houver." 
    if (isTrilha) return "Use calçado adequado e leve água." 
    if (isGastronomia) return "Chegue cedo para garantir mesa e provar o destaque da casa." 
    return "Vale ir sem pressa e aproveitar o ritmo local." 
  }

  return [
    {
      id: `${id}-1`,
      author: "Morador local",
      avatar: "/bonicos/pitch-(8).png",
      content: `${tipOpeners[seed % tipOpeners.length]} ${extraForPlace()}`,
    },
    {
      id: `${id}-2`,
      author: "Voz da ilha",
      avatar: "/bonicos/pitch-(9).png",
      content: `${tipOpeners[(seed + 1) % tipOpeners.length]} ${tipClosers[seed % tipClosers.length]} ${extraForPlace()}`,
    },
    {
      id: `${id}-3`,
      author: "Dica quente",
      avatar: "/bonicos/pitch-(10).png",
      content: `${tipOpeners[(seed + 2) % tipOpeners.length]} ${tipClosers[(seed + 2) % tipClosers.length]} ${extraForPlace()}`,
    },
  ]
}

const tipAuthors = [
  { author: "Morador local", avatar: "/bonicos/pitch-(8).png" },
  { author: "Voz da ilha", avatar: "/bonicos/pitch-(9).png" },
  { author: "Dica quente", avatar: "/bonicos/pitch-(10).png" },
]

const manualTips: Record<string, string[]> = {
  "ilha-do-campeche": [
    "Leve dinheiro em espécie para o barco e programe a volta com antecedência.",
    "A água é cristalina, mas o sol bate forte — protetor é essencial.",
    "Se quiser trilha, avise o barqueiro e confirme as regras de visitação.",
  ],
  "praia-do-gravata": [
    "A trilha é curta, mas tem trechos íngremes; vá com tênis firme.",
    "Leve lanche e água, porque não há estrutura por perto.",
    "O visual é lindo de manhã; a luz abre o mar e as pedras.",
  ],
  "canto-do-moreira": [
    "Prefira maré mais baixa para facilitar o acesso pelo canto.",
    "Respeite os surfistas locais e evite horários de pico.",
    "O canto é mais protegido do vento; bom para ficar um pouco mais.",
  ],
  "trilha-da-lagoinha": [
    "Comece cedo para pegar a luz bonita no mirante.",
    "Leve água e siga as pedras com calma; o chão pode escorregar.",
    "Evite levar peso; a subida rende mais com mochila leve.",
  ],
  "pedra-do-urubu": [
    "Fim de tarde lota — chegue um pouco antes do pôr do sol.",
    "Evite ir em dia de chuva; a subida fica lisa.",
    "Leve uma canga para sentar na pedra e aproveitar a vista.",
  ],
  "mirante-da-lagoa": [
    "Pare no recuo com cuidado; o trânsito costuma ser rápido.",
    "No fim do dia, a luz muda rápido — vale ficar alguns minutos a mais.",
    "Se for fotografar, chegue antes do sol baixar para pegar a vista limpa.",
  ],
  "dunas-da-joaquina": [
    "Vento forte é comum; leve óculos e proteja o celular da areia.",
    "Se for subir as dunas, vá com água e calçado leve.",
    "O pôr do sol visto das dunas costuma valer a caminhada.",
  ],
  "bar-do-mane": [
    "Chegue antes do pico da noite para garantir mesa.",
    "Peça o petisco da casa e acompanhe com cerveja bem gelada.",
    "Se quiser conversa tranquila, prefira começo de semana.",
  ],
  "mercado-publico": [
    "Vá com tempo para circular pelos boxes sem pressa.",
    "Se quiser música, o fim da tarde costuma ter roda rolando.",
    "Para ostra fresca, chegue antes do almoço.",
  ],
  "feirinha-da-lagoa": [
    "Domingo de tarde é o horário mais cheio; chegue cedo.",
    "Leve dinheiro em espécie para facilitar nas barracas.",
    "Vale provar uma comida local e caminhar pela praça sem pressa.",
  ],
  "santo-antonio-de-lisboa": [
    "O pôr do sol é disputado; reserve mesa na beira-mar.",
    "Depois das 18h o clima fica ótimo para caminhar no casario.",
    "Se puder, estenda até a noite para ver a vila iluminada.",
  ],
  "ribeirao-da-ilha": [
    "Combine a visita com almoço longo; o ritmo é mais tranquilo.",
    "Experimente as ostras da estação, sempre frescas por ali.",
    "Fim de tarde tem luz bonita e pouca pressa na beira da baía.",
  ],
  "ostras-no-ribeirao": [
    "Peça a sequência de ostras e vá devagar; vale a experiência.",
    "Sente perto da janela para aproveitar a vista da baía.",
    "Se puder, vá durante a semana para um almoço mais calmo.",
  ],
  "bar-do-arante": [
    "Reserve alguns minutos para ler os bilhetes nas paredes.",
    "Chegue com fome — os pratos são bem servidos.",
    "Peça o prato tradicional da casa e compartilhe na mesa.",
  ],
  "praia-do-matadeiro": [
    "A ponte para a praia pode encher; vá cedo.",
    "Leve água e lanches, não há quiosques no caminho.",
    "Se quiser sossego, caminhe um pouco para longe da ponte.",
  ],
  "costao-do-santinho": [
    "Trilha longa; leve água extra e protetor.",
    "Cuidado com pedras molhadas no costão.",
    "O mar abre no visual — pare nos mirantes naturais pelo caminho.",
  ],
  "lagoa-do-peri": [
    "Ótimo para banho de água doce; leve toalha extra.",
    "Evite o horário de maior sol se for caminhar pela trilha.",
    "Para piquenique, leve saco para lixo e mantenha a área limpa.",
  ],
  "projeto-tamar": [
    "As visitas guiadas costumam ser mais interessantes; confira horários.",
    "Boa pedida para crianças; chegue cedo em dias de movimento.",
    "A lojinha tem produtos legais; vale dar uma olhada na saída.",
  ],
  "ponta-do-sambaqui": [
    "Fim de tarde é o melhor horário para a vista.",
    "Dê uma caminhada curta pelo bairro para ver os barcos.",
    "Leve uma canga para sentar no gramado e ver o sol cair.",
  ],
  "ponte-hercilio-luz": [
    "Vento pode ser forte; leve casaco leve.",
    "O pôr do sol fica lindo do lado continental.",
    "Passe no fim de tarde e fique até acenderem as luzes da ponte.",
  ],
  "cachoeira-do-bom-jardim": [
    "Leve repelente; há bastante mata.",
    "O poço é frio, mas refresca depois da trilha.",
    "Evite levar caixas de som; o clima é de natureza e silêncio.",
  ],
  "jazz-ostras": [
    "Chegue antes do show para escolher boa mesa.",
    "Peça ostras com a música rolando — a vibe fica perfeita.",
    "Se for em grupo, reserve mesa para não esperar na fila.",
  ],
}

const buildTips = (id: string, contents: string[]) =>
  contents.map((content, index) => {
    const author = tipAuthors[index % tipAuthors.length]

    return {
      id: `${id}-${index + 1}`,
      author: author.author,
      avatar: author.avatar,
      content,
    }
  })

const getPlaceTips = (id: string) => {
  const contents = manualTips[id]

  return contents ? buildTips(id, contents) : defaultTips(id)
}

const defaultEvents = (theme: string) => {
  const seed = hashString(theme)
  const label = formatPlaceLabel(theme)

  return [
    { id: "1", name: `${label} ao pôr do sol`, color: "bg-primary" },
    {
      id: "2",
      name: `Roda local e petiscos`,
      color: "bg-emerald-500",
    },
    {
      id: "3",
      name: [
        `Passeio tranquilo em ${label}`,
        `Parada boa em ${label}`,
        `Fim de tarde em ${label}`,
        `Ritmo leve em ${label}`,
        `Noite com calma em ${label}`,
      ][seed % 5],
      color: "bg-secondary",
    },
  ]
}

export const places: Place[] = [
  {
    id: "ilha-do-campeche",
    name: "Ilha do Campeche",
    description: "Mar cristalino e trilha curta com visual arqueologico. Reserve o barco cedo.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Praia",
    priceLevel: 3,
    rating: 4.9,
    tags: ["Popular"],
    socialTags: ["date", "galera"],
    interests: ["Mergulho", "Pé na areia", "Passeio de barco"],
    location: "Saída de barco da Praia da Armação, Florianópolis - SC",
    vibeLevel: 92,
    vibeComment: "Mar transparente, trilha curta e clima de cartão-postal sem perder o jeitão de refúgio da ilha.",
    hours: {
      weekdays: "08:00 - 17:00",
      weekend: "08:00 - 17:30",
      sunday: "08:00 - 16:30",
    },
    tips: getPlaceTips("ilha-do-campeche"),
    events: defaultEvents("Mergulho guiado"),
    comfort: ["Passeio de barco", "Banho de mar", "Trilha curta", "Foto boa em qualquer horário"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    ],
  },
  {
    id: "praia-do-gravata",
    name: "Praia do Gravatá",
    description: "Trilha curta e íngreme com mar azul e vila de pescadores.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Praia",
    priceLevel: 1,
    rating: 4.7,
    difficulty: "medium",
    socialTags: ["sozinho", "galera"],
    interests: ["Trilha", "Pé na areia", "Natureza"],
    location: "Acesso pela Praia do Gravatá, Sul da Ilha - Florianópolis - SC",
    vibeLevel: 81,
    vibeComment: "Trilha rápida, vento no rosto e a sensação de descobrir um pedaço escondido da costa sul.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: getPlaceTips("praia-do-gravata"),
    events: defaultEvents("Caminhada leve"),
    comfort: ["Trilha curta", "Vista aberta", "Mar azul", "Menos movimento que as praias centrais"],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
    ],
  },
  {
    id: "canto-do-moreira",
    name: "Canto do Moreira",
    description: "Pico escondido quando a Praia Mole enche. Ondas fortes e local vibe.",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    category: "Praia",
    priceLevel: 1,
    rating: 4.6,
    tags: ["Surf Pro"],
    socialTags: ["galera", "sozinho"],
    interests: ["Surf", "Pé na areia"],
    location: "Canto leste da Praia Mole, Florianópolis - SC",
    vibeLevel: 88,
    vibeComment: "Pico pra quem curte mar mexido, respiro de local e pôr do sol sem firula.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: getPlaceTips("canto-do-moreira"),
    events: defaultEvents("Surf session"),
    comfort: ["Ondas fortes", "Área de surf", "Menos turista", "Visual bruto"],
    images: [
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=1200&q=80",
    ],
  },
  {
    id: "trilha-da-lagoinha",
    name: "Trilha da Lagoinha",
    description: "Subida curta, vista absurda e acesso a uma das praias mais bonitas.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    category: "Trilha",
    priceLevel: 1,
    rating: 4.8,
    difficulty: "medium",
    socialTags: ["galera", "sozinho"],
    interests: ["Trilha", "Natureza", "Mirante"],
    location: "Entrada pela Barra da Lagoa, Florianópolis - SC",
    vibeLevel: 84,
    vibeComment: "Subida curta que recompensa com visual de cinema e sensação de vento limpo na cara.",
    hours: { weekdays: "06:00 - 18:00", weekend: "06:00 - 18:30", sunday: "06:00 - 18:30" },
    tips: getPlaceTips("trilha-da-lagoinha"),
    events: defaultEvents("Vista panorâmica"),
    comfort: ["Mirante natural", "Trilha moderada", "Natureza preservada", "Bom para fotos"],
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
  },
  {
    id: "pedra-do-urubu",
    name: "Pedra do Urubu",
    description: "Subida leve com vista do rio encontrando o mar. Perfeito pro pôr do sol.",
    image: "/pedra_urubu.jpg",
    category: "Trilha",
    priceLevel: 1,
    rating: 4.7,
    difficulty: "easy",
    socialTags: ["sozinho", "date"],
    interests: ["Trilha", "Pôr do sol", "Mirante"],
    location: "Guarda do Embaú, acesso pela trilha principal - Palhoça/SC",
    vibeLevel: 86,
    vibeComment: "É um daqueles pontos em que a vista te obriga a parar e esquecer o relógio.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: getPlaceTips("pedra-do-urubu"),
    events: defaultEvents("Pôr do sol"),
    comfort: ["Vista do mar e rio", "Trilha tranquila", "Melhor luz no fim da tarde", "Silêncio bom"],
    images: [
      "/pedra_urubu.jpg",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
  },
  {
    id: "mirante-da-lagoa",
    name: "Mirante da Lagoa",
    description: "Vista panorâmica da Lagoa da Conceição com luz dourada no fim do dia.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Mirante",
    priceLevel: 1,
    rating: 4.8,
    socialTags: ["date", "sozinho"],
    interests: ["Pôr do sol", "Mirante", "Natureza"],
    location: "Lagoa da Conceição, região central - Florianópolis - SC",
    vibeLevel: 90,
    vibeComment: "Lugar pra ver a ilha desacelerar, com a lagoa mudando de cor no fim do dia.",
    hours: { weekdays: "05:30 - 20:00", weekend: "05:30 - 20:30", sunday: "05:30 - 20:30" },
    tips: getPlaceTips("mirante-da-lagoa"),
    events: defaultEvents("Pôr do sol"),
    comfort: ["Vista panorâmica", "Acesso fácil", "Bom para casal", "Sem pressa"],
    images: [
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    ],
  },
  {
    id: "dunas-da-joaquina",
    name: "Dunas da Joaquina",
    description: "Caminhada leve entre dunas e lagoa com vento bom pra aventura.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Natureza",
    priceLevel: 1,
    rating: 4.6,
    socialTags: ["galera", "sozinho"],
    interests: ["Natureza", "Trilha", "Pôr do sol"],
    location: "Joaquina, lado das dunas - Florianópolis - SC",
    vibeLevel: 79,
    vibeComment: "Dunas, vento e espaço aberto pra andar sem roteiro. Simples e bom.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: getPlaceTips("dunas-da-joaquina"),
    events: defaultEvents("Caminhada nas dunas"),
    comfort: ["Espaço aberto", "Vento constante", "Boa caminhada", "Contato com a natureza"],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
  },
  {
    id: "bar-do-mane",
    name: "Bar do Mané",
    description: "Boteco raiz com petisco bom e cerveja gelada perto do centrinho.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    category: "Gastronomia",
    priceLevel: 2,
    rating: 4.5,
    socialTags: ["galera", "date"],
    interests: ["Cerveja gelada", "Música ao vivo"],
    location: "Centrinho da Lagoa - Florianópolis - SC",
    vibeLevel: 85,
    vibeComment: "Boteco com conversa boa, petisco certo e mesa que enche rápido no fim de tarde.",
    hours: { weekdays: "11:00 - 00:00", weekend: "11:00 - 01:30", sunday: "11:00 - 00:00" },
    tips: getPlaceTips("bar-do-mane"),
    events: defaultEvents("Petisco e música"),
    comfort: ["Cerveja gelada", "Petisco caprichado", "Clima de encontro", "Música ao vivo ocasional"],
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  {
    id: "mercado-publico",
    name: "Mercado Publico",
    description: "Mix de boxes com ostras, artesanato e roda de música ao vivo.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    category: "Cultural",
    priceLevel: 2,
    rating: 4.7,
    socialTags: ["galera", "date"],
    interests: ["História", "Artesanato", "Música ao vivo"],
    location: "Centro histórico de Florianópolis - SC",
    vibeLevel: 87,
    vibeComment: "Perfeito pra andar sem pressa, olhar vitrine, provar ostra e ouvir música no fundo.",
    hours: { weekdays: "07:00 - 22:00", weekend: "07:00 - 22:30", sunday: "07:00 - 21:00" },
    tips: getPlaceTips("mercado-publico"),
    events: defaultEvents("Almoço e música"),
    comfort: ["Ostras frescas", "Artesanato", "História", "Boa parada no centro"],
    images: [
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=1200&q=80",
    ],
  },
  {
    id: "feirinha-da-lagoa",
    name: "Feirinha da Lagoa",
    description: "Domingo com artesanato, comida local e uma vibe leve na praca.",
    image: "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=800&q=80",
    category: "Cultural",
    priceLevel: 1,
    rating: 4.4,
    socialTags: ["galera", "date"],
    interests: ["Artesanato", "Música ao vivo", "História"],
    location: "Lagoa da Conceição, borda da praça central - Florianópolis - SC",
    vibeLevel: 76,
    vibeComment: "Domingo de feira, cheiro de comida e gente circulando sem pressa.",
    hours: { weekdays: "16:00 - 22:00", weekend: "09:00 - 23:00", sunday: "09:00 - 22:00" },
    tips: getPlaceTips("feirinha-da-lagoa"),
    events: defaultEvents("Feira e roda cultural"),
    comfort: ["Artesanato local", "Comida de rua", "Música leve", "Clima de bairro"],
    images: [
      "/lagoa/lagoa2.jpg",
      "/lagoa/bicicleta.jpg",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  {
    id: "santo-antonio-de-lisboa",
    name: "Santo Antonio de Lisboa",
    description: "Casario histórico, restaurantes à beira-mar e pôr do sol clássico.",
    image: "/santo_antonio.jpg",
    category: "Cultural",
    priceLevel: 3,
    rating: 4.8,
    socialTags: ["date", "galera"],
    interests: ["Tainha assada", "Pôr do sol", "História"],
    location: "Baía Norte, distrito de Santo Antônio de Lisboa - Florianópolis - SC",
    vibeLevel: 93,
    vibeComment: "Casario, mar calmo e uma luz de fim de tarde que pede foto e jantar demorado.",
    hours: { weekdays: "11:00 - 23:00", weekend: "11:00 - 00:00", sunday: "11:00 - 22:00" },
    tips: getPlaceTips("santo-antonio-de-lisboa"),
    events: defaultEvents("Jantar à beira-mar"),
    comfort: ["Pôr do sol clássico", "Restaurantes à beira-mar", "História viva", "Jantar sem pressa"],
    images: [
      "/santo_antonio.jpg",
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
    ],
  },
  {
    id: "ribeirao-da-ilha",
    name: "Ribeirao da Ilha",
    description: "Famoso pelas ostras e pela vista calma. Bom pra um almoço demorado.",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    category: "Gastronomia",
    priceLevel: 3,
    rating: 4.7,
    socialTags: ["date", "galera"],
    interests: ["Tainha assada", "Pôr do sol"],
    location: "Ribeirão da Ilha, sul da ilha - Florianópolis - SC",
    vibeLevel: 91,
    vibeComment: "Mesa farta, água calma e um ritmo que convida a ficar mais tempo do que planejava.",
    hours: { weekdays: "11:00 - 22:00", weekend: "11:00 - 23:00", sunday: "11:00 - 22:00" },
    tips: getPlaceTips("ribeirao-da-ilha"),
    events: defaultEvents("Ostras e almoço"),
    comfort: ["Ostras frescas", "Vista da baía", "Almoço longo", "Clima tranquilo"],
    images: [
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  {
    id: "ostras-no-ribeirao",
    name: "Ostras no Ribeirao",
    description: "Ostras frescas, mesa calma e clima de almoço demorado no sul da ilha.",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    category: "Gastronomia",
    priceLevel: 3,
    rating: 4.8,
    socialTags: ["date", "galera"],
    interests: ["Tainha assada", "Pôr do sol"],
    location: "Ribeirão da Ilha, sul da ilha - Florianópolis - SC",
    vibeLevel: 92,
    vibeComment: "Ostras frescas e uma pausa boa para quem quer sentar sem pressa.",
    hours: { weekdays: "11:00 - 22:00", weekend: "11:00 - 23:00", sunday: "11:00 - 22:00" },
    tips: getPlaceTips("ostras-no-ribeirao"),
    events: defaultEvents("Ostras e almoço"),
    comfort: ["Ostras frescas", "Vista da baía", "Almoço longo", "Clima tranquilo"],
    images: [
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  {
    id: "bar-do-arante",
    name: "Bar do Arante",
    description: "Parede cheia de bilhetes e petiscos bem servidos. Clássico do sul.",
    image: "/bar do arante.jpg",
    category: "Gastronomia",
    priceLevel: 2,
    rating: 4.6,
    socialTags: ["galera"],
    interests: ["Cerveja gelada", "História"],
    location: "Rodovia Baldicero Filomeno, Ribeirão da Ilha - Florianópolis - SC",
    vibeLevel: 82,
    vibeComment: "Mesa cheia de bilhetes, prato honesto e um clássico que nunca sai de moda.",
    hours: { weekdays: "11:30 - 22:00", weekend: "11:30 - 23:00", sunday: "11:30 - 21:00" },
    tips: getPlaceTips("bar-do-arante"),
    events: defaultEvents("Almoço raiz"),
    comfort: ["História nas paredes", "Petisco clássico", "Parada obrigatória", "Ambiente informal"],
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
  {
    id: "praia-do-matadeiro",
    name: "Praia do Matadeiro",
    description: "Natureza preservada, agua clara e menos movimento que a vizinha Arma.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Praia",
    priceLevel: 1,
    rating: 4.8,
    socialTags: ["date", "galera", "sozinho"],
    interests: ["Pé na areia", "Surf", "Pôr do sol"],
    location: "Sul da ilha, ligação pela trilha do Matadeiro - Florianópolis - SC",
    vibeLevel: 89,
    vibeComment: "Praia pra respirar fundo, andar na areia e esquecer barulho de cidade por um tempo.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: getPlaceTips("praia-do-matadeiro"),
    events: defaultEvents("Banho de mar"),
    comfort: ["Natureza preservada", "Pouco movimento", "Surf de bom nível", "Areia e mar limpos"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
    ],
  },
  {
    id: "costao-do-santinho",
    name: "Costão  do Santinho",
    description: "Trilha longa com mar aberto e costoes de pedra. Leve agua.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Trilha",
    priceLevel: 2,
    rating: 4.7,
    difficulty: "hard",
    socialTags: ["galera", "date"],
    interests: ["Trilha", "Natureza", "Mirante"],
    location: "Santinho, extremo norte - Florianópolis - SC",
    vibeLevel: 83,
    vibeComment: "Trilha com mar aberto e pedra firme. Bom pra quem gosta de caminhada com recompensa.",
    hours: { weekdays: "06:00 - 18:00", weekend: "06:00 - 18:30", sunday: "06:00 - 18:30" },
    tips: getPlaceTips("costao-do-santinho"),
    events: defaultEvents("Trilha costeira"),
    comfort: ["Trilha longa", "Visual de costão", "Mar aberto", "Ponto pra observação"],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    ],
  },
  {
    id: "lagoa-do-peri",
    name: "Lagoa do Peri",
    description: "Passeio tranquilo com natureza e agua doce. Bom pra relaxar.",
    image: "/lagoa_peri.jpg",
    category: "Natureza",
    priceLevel: 1,
    rating: 4.6,
    socialTags: ["galera", "sozinho"],
    interests: ["Natureza", "Pé na areia", "Trilha"],
    location: "Sul da ilha, entre a praia e a lagoa - Florianópolis - SC",
    vibeLevel: 78,
    vibeComment: "Água doce, silêncio e espaço pra baixar a bola do dia com tranquilidade.",
    hours: { weekdays: "08:00 - 18:00", weekend: "08:00 - 18:30", sunday: "08:00 - 18:00" },
    tips: getPlaceTips("lagoa-do-peri"),
    events: defaultEvents("Piquenique e banho"),
    comfort: ["Banho de água doce", "Trilha leve", "Família gosta", "Área verde"],
    images: [
      "/lagoa_peri.jpg",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    ],
  },
  {
    id: "projeto-tamar",
    name: "Projeto Tamar",
    description: "Passeio educativo com tartarugas e história da conservação.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Família",
    priceLevel: 2,
    rating: 4.5,
    socialTags: ["galera", "date"],
    interests: ["Família", "História"],
    location: "Barra da Lagoa, norte da ilha - Florianópolis - SC",
    vibeLevel: 74,
    vibeComment: "Parada educativa e leve, boa pra ir sem pressa e sair com a cabeça mais tranquila.",
    hours: { weekdays: "09:00 - 17:00", weekend: "09:00 - 18:00", sunday: "09:00 - 17:00" },
    tips: getPlaceTips("projeto-tamar"),
    events: defaultEvents("Educação ambiental"),
    comfort: ["Bom para famílias", "Conservação", "Passeio educativo", "Acesso fácil"],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=1200&q=80",
    ],
  },
  {
    id: "ponta-do-sambaqui",
    name: "Ponta do Sambaqui",
    description: "Vilarejo calmo com pôr do sol bonito e clima de bairro.",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    category: "Mirante",
    priceLevel: 1,
    rating: 4.6,
    socialTags: ["date", "galera"],
    interests: ["Pôr do sol", "História"],
    location: "Sambaqui, baía norte - Florianópolis - SC",
    vibeLevel: 86,
    vibeComment: "Bairro calmo com faixa de mar e um fim de tarde que segura o visitante por mais tempo.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: getPlaceTips("ponta-do-sambaqui"),
    events: defaultEvents("Caminhada no bairro"),
    comfort: ["Pôr do sol bonito", "Clima de bairro", "Passeio curto", "Vista para a baía"],
    images: [
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    ],
  },
  {
    id: "ponte-hercilio-luz",
    name: "Ponte Hercilio Luz",
    description: "Caminhada no fim de tarde com vista da baia norte.",
    image: "/hercilioluz.jpg",
    category: "Cultural",
    priceLevel: 1,
    rating: 4.9,
    socialTags: ["date", "galera", "sozinho"],
    interests: ["História", "Pôr do sol"],
    location: "Centro de Florianópolis - SC",
    vibeLevel: 95,
    vibeComment: "Cartão-postal da cidade, boa pra caminhar e ver a baía mudando de tom no fim do dia.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: getPlaceTips("ponte-hercilio-luz"),
    events: defaultEvents("Caminhada histórica"),
    comfort: ["História da ilha", "Foto clássica", "Vista da baía norte", "Passeio urbano"],
    images: [
      "/hercilioluz.jpg",
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&q=80",
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=1200&q=80",
    ],
  },
  {
    id: "cachoeira-do-bom-jardim",
    name: "Cachoeira do Bom Jardim",
    description: "Queda d'agua escondida com trilha curta e po pra mergulho.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Natureza",
    priceLevel: 1,
    rating: 4.5,
    socialTags: ["galera", "sozinho"],
    interests: ["Cachoeira", "Trilha", "Natureza"],
    location: "Rota do interior, acesso por trilha curta - Florianópolis - SC",
    vibeLevel: 80,
    vibeComment: "Água fria, sombra boa e trilha que entrega um banho recompensador no meio da caminhada.",
    hours: { weekdays: "08:00 - 17:00", weekend: "08:00 - 17:30", sunday: "08:00 - 17:00" },
    tips: getPlaceTips("cachoeira-do-bom-jardim"),
    events: defaultEvents("Banho de cachoeira"),
    comfort: ["Cachoeira", "Trilha curta", "Natureza", "Banho refrescante"],
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1200&q=80",
    ],
  },
  {
    id: "jazz-ostras",
    name: "Jazz & Ostras",
    description: "Noite com música ao vivo e ostras frescas perto do centro.",
    image: "/jazz.jpg",
    category: "Noite",
    priceLevel: 3,
    rating: 4.7,
    socialTags: ["date", "galera"],
    interests: ["Música ao vivo", "Cerveja gelada"],
    location: "Região central, perto do Mercado Público - Florianópolis - SC",
    vibeLevel: 89,
    vibeComment: "Noite com banda boa, ostras e conversa que vai longe sem parecer corrida.",
    hours: { weekdays: "18:00 - 01:00", weekend: "18:00 - 02:00", sunday: "18:00 - 00:00" },
    tips: getPlaceTips("jazz-ostras"),
    events: defaultEvents("Show e degustação"),
    comfort: ["Música ao vivo", "Ostras frescas", "Clima noturno", "Bom para date"],
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
]
