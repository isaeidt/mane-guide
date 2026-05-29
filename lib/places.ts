export type SocialTag = "sozinho" | "date" | "galera"

export type InterestTag =
  | "Surf"
  | "Trilha"
  | "Por do sol"
  | "Pe na areia"
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

export type PlaceCategory =
  | "Praia"
  | "Trilha"
  | "Gastronomia"
  | "Mirante"
  | "Cultural"
  | "Natureza"
  | "Noite"
  | "Familia"

export interface Place {
  id: string
  name: string
  description: string
  image: string
  category: PlaceCategory
  priceLevel: 1 | 2 | 3
  rating?: number
  tags?: string[]
  difficulty?: "easy" | "medium" | "hard"
  socialTags: SocialTag[]
  interests: InterestTag[]
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
    interests: ["Mergulho", "Pe na areia", "Passeio de barco"],
  },
  {
    id: "praia-do-gravata",
    name: "Praia do Gravata",
    description: "Trilha curta e ingrime com mar azul e vila de pescadores.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Praia",
    priceLevel: 1,
    rating: 4.7,
    difficulty: "medium",
    socialTags: ["sozinho", "galera"],
    interests: ["Trilha", "Pe na areia", "Natureza"],
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
    interests: ["Surf", "Pe na areia"],
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
  },
  {
    id: "pedra-do-urubu",
    name: "Pedra do Urubu",
    description: "Subida leve com vista do rio encontrando o mar. Perfeito pro por do sol.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Trilha",
    priceLevel: 1,
    rating: 4.7,
    difficulty: "easy",
    socialTags: ["sozinho", "date"],
    interests: ["Trilha", "Por do sol", "Mirante"],
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
  },
  {
    id: "bar-do-mane",
    name: "Bar do Mane",
    description: "Boteco raiz com petisco bom e cerveja gelada perto do centrinho.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    category: "Gastronomia",
    priceLevel: 2,
    rating: 4.5,
    socialTags: ["galera", "date"],
    interests: ["Cerveja gelada", "Musica ao vivo"],
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
  },
  {
    id: "santo-antonio-de-lisboa",
    name: "Santo Antonio de Lisboa",
    description: "Casario historico, restaurantes a beira mar e por do sol classico.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Cultural",
    priceLevel: 3,
    rating: 4.8,
    socialTags: ["date", "galera"],
    interests: ["Tainha assada", "Por do sol", "Historia"],
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
  },
  {
    id: "bar-do-arante",
    name: "Bar do Arante",
    description: "Parede cheia de bilhetes e petiscos bem servidos. Classico do sul.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    category: "Gastronomia",
    priceLevel: 2,
    rating: 4.6,
    socialTags: ["galera"],
    interests: ["Cerveja gelada", "Historia"],
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
    interests: ["Pe na areia", "Surf", "Por do sol"],
  },
  {
    id: "costao-do-santinho",
    name: "Costao do Santinho",
    description: "Trilha longa com mar aberto e costoes de pedra. Leve agua.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    category: "Trilha",
    priceLevel: 2,
    rating: 4.7,
    difficulty: "hard",
    socialTags: ["galera", "date"],
    interests: ["Trilha", "Natureza", "Mirante"],
  },
  {
    id: "lagoa-do-peri",
    name: "Lagoa do Peri",
    description: "Passeio tranquilo com natureza e agua doce. Bom pra relaxar.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Natureza",
    priceLevel: 1,
    rating: 4.6,
    socialTags: ["galera", "sozinho"],
    interests: ["Natureza", "Pe na areia", "Trilha"],
  },
  {
    id: "projeto-tamar",
    name: "Projeto Tamar",
    description: "Passeio educativo com tartarugas e historia da conservacao.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    category: "Familia",
    priceLevel: 2,
    rating: 4.5,
    socialTags: ["galera", "date"],
    interests: ["Familia", "Historia"],
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
  },
  {
    id: "ponte-hercilio-luz",
    name: "Ponte Hercilio Luz",
    description: "Caminhada no fim de tarde com vista da baia norte.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    category: "Cultural",
    priceLevel: 1,
    rating: 4.9,
    socialTags: ["date", "galera", "sozinho"],
    interests: ["Historia", "Por do sol"],
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
  },
  {
    id: "jazz-ostras",
    name: "Jazz & Ostras",
    description: "Noite com musica ao vivo e ostras frescas perto do centro.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    category: "Noite",
    priceLevel: 3,
    rating: 4.7,
    socialTags: ["date", "galera"],
    interests: ["Musica ao vivo", "Cerveja gelada"],
  },
]
