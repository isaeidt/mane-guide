export type SocialTag = "sozinho" | "date" | "galera"

export type InterestTag =
  | "Surf"
  | "Trilha"
  | "Por do sol"
  | "Pé na  areia"
  | "Tainha assada"
  | "Artesanato"
  | "Musica ao vivo"
  | "Cerveja gelada"
  | "Mergulho"
  | "Historia"
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

const defaultTips = (id: string) => [
  {
    id: `${id}-1`,
    author: "Morador local",
    avatar: "/bonicos/pitch-(8).png",
    content: "Chega cedo pra pegar a melhor luz e evitar movimento desnecessário.",
  },
  {
    id: `${id}-2`,
    author: "Voz da ilha",
    avatar: "/bonicos/pitch-(9).png",
    content: "Se puder, vai em dia de semana. A experiência muda bastante.",
  },
  {
    id: `${id}-3`,
    author: "Dica quente",
    avatar: "/bonicos/pitch-(10).png",
    content: "Leva água, protetor e tempo pra andar sem pressa.",
  },
]

const defaultEvents = (theme: string) => [
  { id: "1", name: `${theme} ao pôr do sol`, color: "bg-primary" },
  { id: "2", name: `Roda local e petiscos`, color: "bg-emerald-500" },
  { id: "3", name: `Passeio com calma`, color: "bg-secondary" },
]

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
    interests: ["Mergulho", "Pé na  areia", "Passeio de barco"],
    location: "Saída de barco da Praia da Armação, Florianópolis - SC",
    vibeLevel: 92,
    vibeComment: "Mar transparente, trilha curta e clima de cartão-postal sem perder o jeitão de refúgio da ilha.",
    hours: {
      weekdays: "08:00 - 17:00",
      weekend: "08:00 - 17:30",
      sunday: "08:00 - 16:30",
    },
    tips: defaultTips("ilha-do-campeche"),
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
    description: "Trilha curta e ingrime com mar azul e vila de pescadores.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Praia",
    priceLevel: 1,
    rating: 4.7,
    difficulty: "medium",
    socialTags: ["sozinho", "galera"],
    interests: ["Trilha", "Pé na  areia", "Natureza"],
    location: "Acesso pela Praia do Gravatá, Sul da Ilha - Florianópolis - SC",
    vibeLevel: 81,
    vibeComment: "Trilha rápida, vento no rosto e a sensação de descobrir um pedaço escondido da costa sul.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: defaultTips("praia-do-gravata"),
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
    interests: ["Surf", "Pé na  areia"],
    location: "Canto leste da Praia Mole, Florianópolis - SC",
    vibeLevel: 88,
    vibeComment: "Pico pra quem curte mar mexido, respiro de local e pôr do sol sem firula.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: defaultTips("canto-do-moreira"),
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
    tips: defaultTips("trilha-da-lagoinha"),
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
    description: "Subida leve com vista do rio encontrando o mar. Perfeito pro por do sol.",
    image: "/pedra_urubu.jpg",
    category: "Trilha",
    priceLevel: 1,
    rating: 4.7,
    difficulty: "easy",
    socialTags: ["sozinho", "date"],
    interests: ["Trilha", "Por do sol", "Mirante"],
    location: "Guarda do Embaú, acesso pela trilha principal - Palhoça/SC",
    vibeLevel: 86,
    vibeComment: "É um daqueles pontos em que a vista te obriga a parar e esquecer o relógio.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: defaultTips("pedra-do-urubu"),
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
    description: "Vista panoramica da Lagoa da Conceicao com luz dourada no fim do dia.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Mirante",
    priceLevel: 1,
    rating: 4.8,
    socialTags: ["date", "sozinho"],
    interests: ["Por do sol", "Mirante", "Natureza"],
    location: "Lagoa da Conceição, região central - Florianópolis - SC",
    vibeLevel: 90,
    vibeComment: "Lugar pra ver a ilha desacelerar, com a lagoa mudando de cor no fim do dia.",
    hours: { weekdays: "05:30 - 20:00", weekend: "05:30 - 20:30", sunday: "05:30 - 20:30" },
    tips: defaultTips("mirante-da-lagoa"),
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
    interests: ["Natureza", "Trilha", "Por do sol"],
    location: "Joaquina, lado das dunas - Florianópolis - SC",
    vibeLevel: 79,
    vibeComment: "Dunas, vento e espaço aberto pra andar sem roteiro. Simples e bom.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: defaultTips("dunas-da-joaquina"),
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
    interests: ["Cerveja gelada", "Musica ao vivo"],
    location: "Centrinho da Lagoa - Florianópolis - SC",
    vibeLevel: 85,
    vibeComment: "Boteco com conversa boa, petisco certo e mesa que enche rápido no fim de tarde.",
    hours: { weekdays: "11:00 - 00:00", weekend: "11:00 - 01:30", sunday: "11:00 - 00:00" },
    tips: defaultTips("bar-do-mane"),
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
    description: "Mix de boxes com ostras, artesanato e roda de musica ao vivo.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    category: "Cultural",
    priceLevel: 2,
    rating: 4.7,
    socialTags: ["galera", "date"],
    interests: ["Historia", "Artesanato", "Musica ao vivo"],
    location: "Centro histórico de Florianópolis - SC",
    vibeLevel: 87,
    vibeComment: "Perfeito pra andar sem pressa, olhar vitrine, provar ostra e ouvir música no fundo.",
    hours: { weekdays: "07:00 - 22:00", weekend: "07:00 - 22:30", sunday: "07:00 - 21:00" },
    tips: defaultTips("mercado-publico"),
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
    interests: ["Artesanato", "Musica ao vivo", "Historia"],
    location: "Lagoa da Conceição, borda da praça central - Florianópolis - SC",
    vibeLevel: 76,
    vibeComment: "Domingo de feira, cheiro de comida e gente circulando sem pressa.",
    hours: { weekdays: "16:00 - 22:00", weekend: "09:00 - 23:00", sunday: "09:00 - 22:00" },
    tips: defaultTips("feirinha-da-lagoa"),
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
    description: "Casario historico, restaurantes a beira mar e por do sol classico.",
    image: "/santo_antonio.jpg",
    category: "Cultural",
    priceLevel: 3,
    rating: 4.8,
    socialTags: ["date", "galera"],
    interests: ["Tainha assada", "Por do sol", "Historia"],
    location: "Baía Norte, distrito de Santo Antônio de Lisboa - Florianópolis - SC",
    vibeLevel: 93,
    vibeComment: "Casario, mar calmo e uma luz de fim de tarde que pede foto e jantar demorado.",
    hours: { weekdays: "11:00 - 23:00", weekend: "11:00 - 00:00", sunday: "11:00 - 22:00" },
    tips: defaultTips("santo-antonio-de-lisboa"),
    events: defaultEvents("Jantar à beira-mar"),
    comfort: ["Por do sol clássico", "Restaurantes à beira-mar", "História viva", "Jantar sem pressa"],
    images: [
      "/santo_antonio.jpg",
      "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1200&q=80",
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&q=80",
    ],
  },
  {
    id: "ribeirao-da-ilha",
    name: "Ribeirao da Ilha",
    description: "Famoso pelas ostras e pela vista calma. Bom pra um almoco demorado.",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80",
    category: "Gastronomia",
    priceLevel: 3,
    rating: 4.7,
    socialTags: ["date", "galera"],
    interests: ["Tainha assada", "Por do sol"],
    location: "Ribeirão da Ilha, sul da ilha - Florianópolis - SC",
    vibeLevel: 91,
    vibeComment: "Mesa farta, água calma e um ritmo que convida a ficar mais tempo do que planejava.",
    hours: { weekdays: "11:00 - 22:00", weekend: "11:00 - 23:00", sunday: "11:00 - 22:00" },
    tips: defaultTips("ribeirao-da-ilha"),
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
    description: "Parede cheia de bilhetes e petiscos bem servidos. Classico do sul.",
    image: "/bar do arante.jpg",
    category: "Gastronomia",
    priceLevel: 2,
    rating: 4.6,
    socialTags: ["galera"],
    interests: ["Cerveja gelada", "Historia"],
    location: "Rodovia Baldicero Filomeno, Ribeirão da Ilha - Florianópolis - SC",
    vibeLevel: 82,
    vibeComment: "Mesa cheia de bilhetes, prato honesto e um clássico que nunca sai de moda.",
    hours: { weekdays: "11:30 - 22:00", weekend: "11:30 - 23:00", sunday: "11:30 - 21:00" },
    tips: defaultTips("bar-do-arante"),
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
    interests: ["Pé na  areia", "Surf", "Por do sol"],
    location: "Sul da ilha, ligação pela trilha do Matadeiro - Florianópolis - SC",
    vibeLevel: 89,
    vibeComment: "Praia pra respirar fundo, andar na areia e esquecer barulho de cidade por um tempo.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: defaultTips("praia-do-matadeiro"),
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
    tips: defaultTips("costao-do-santinho"),
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
    interests: ["Natureza", "Pé na  areia", "Trilha"],
    location: "Sul da ilha, entre a praia e a lagoa - Florianópolis - SC",
    vibeLevel: 78,
    vibeComment: "Água doce, silêncio e espaço pra baixar a bola do dia com tranquilidade.",
    hours: { weekdays: "08:00 - 18:00", weekend: "08:00 - 18:30", sunday: "08:00 - 18:00" },
    tips: defaultTips("lagoa-do-peri"),
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
    description: "Passeio educativo com tartarugas e historia da conservacao.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Família",
    priceLevel: 2,
    rating: 4.5,
    socialTags: ["galera", "date"],
    interests: ["Família", "Historia"],
    location: "Barra da Lagoa, norte da ilha - Florianópolis - SC",
    vibeLevel: 74,
    vibeComment: "Parada educativa e leve, boa pra ir sem pressa e sair com a cabeça mais tranquila.",
    hours: { weekdays: "09:00 - 17:00", weekend: "09:00 - 18:00", sunday: "09:00 - 17:00" },
    tips: defaultTips("projeto-tamar"),
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
    description: "Vilarejo calmo com por do sol bonito e clima de bairro.",
    image: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    category: "Mirante",
    priceLevel: 1,
    rating: 4.6,
    socialTags: ["date", "galera"],
    interests: ["Por do sol", "Historia"],
    location: "Sambaqui, baía norte - Florianópolis - SC",
    vibeLevel: 86,
    vibeComment: "Bairro calmo com faixa de mar e um fim de tarde que segura o visitante por mais tempo.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: defaultTips("ponta-do-sambaqui"),
    events: defaultEvents("Caminhada no bairro"),
    comfort: ["Por do sol bonito", "Clima de bairro", "Passeio curto", "Vista para a baía"],
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
    interests: ["Historia", "Por do sol"],
    location: "Centro de Florianópolis - SC",
    vibeLevel: 95,
    vibeComment: "Cartão-postal da cidade, boa pra caminhar e ver a baía mudando de tom no fim do dia.",
    hours: { weekdays: "Livre acesso", weekend: "Livre acesso", sunday: "Livre acesso" },
    tips: defaultTips("ponte-hercilio-luz"),
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
    tips: defaultTips("cachoeira-do-bom-jardim"),
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
    description: "Noite com musica ao vivo e ostras frescas perto do centro.",
    image: "/jazz.jpg",
    category: "Noite",
    priceLevel: 3,
    rating: 4.7,
    socialTags: ["date", "galera"],
    interests: ["Musica ao vivo", "Cerveja gelada"],
    location: "Região central, perto do Mercado Público - Florianópolis - SC",
    vibeLevel: 89,
    vibeComment: "Noite com banda boa, ostras e conversa que vai longe sem parecer corrida.",
    hours: { weekdays: "18:00 - 01:00", weekend: "18:00 - 02:00", sunday: "18:00 - 00:00" },
    tips: defaultTips("jazz-ostras"),
    events: defaultEvents("Show e degustação"),
    comfort: ["Musica ao vivo", "Ostras frescas", "Clima noturno", "Bom para date"],
    images: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80",
    ],
  },
]
