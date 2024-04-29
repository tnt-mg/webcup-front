export const allData = [
  // Metier
  {
    topic: "Metier",
    value: "Au chomage",
    image: "pauvre.jpeg",
    index: 1,
  },
  {
    topic: "Metier",
    value: "Confronter avec plusieurs entretiens",
    image: "entretien.jpg",
    index: 1,
  },
  {
    topic: "Metier",
    value: "Membre de l'ONU",
    image: "onu.jpeg",
    index: 2,
  },
  {
    topic: "Metier",
    value: "CTO d'un cabinet",
    image: "directeur.jpeg",
    index: 3,
  },

  // Finance
  {
    topic: "Finance",
    value: "Encore plus pauvre",
    image: "pauvre.jpeg",
    index: 1,
  },
  {
    topic: "Finance",
    value: "Milliardaire",
    image: "argent.webp",
    index: 2,
  },
  {
    topic: "Finance",
    value: "Gagnant au loto",
    image: "loto.jpg",
    index: 3,
  },

  // Amour
  {
    topic: "Amour",
    value: "Des enfants",
    image: "enceinte.webp",
    index: 1,
  },
  {
    topic: "Amour",
    value: "Marie",
    image: "mariage.jpg",
    index: 2,
  },
  {
    topic: "Amour",
    value: "Des jumeaux",
    image: "jumeaux.webp",
    index: 3,
  },

  // Voyage
  {
    topic: "Voyage",
    value: "Pas de voyage prevu",
    image: "travel.jpg",
    index: 1,
  },
  {
    topic: "Voyage",
    value: "Avec un passport",
    image: "passport.jpg",
    index: 2,
  },
  {
    topic: "Voyage",
    value: "Canada",
    image: "canada.jpg",
    index: 3,
  },
  {
    topic: "Voyage",
    value: "Maurice",
    image: "maurice.jpg",
    index: 4,
  },
  {
    topic: "Voyage",
    value: "Dubai",
    image: "dubai.jpg",
    index: 5,
  },
]

const loves = allData.filter((d) => d.topic == "Amour")
export const loveData = [
  { year: 2024, ...loves.filter((t) => t.index == 2)[0] },
  {
    year: 2025,
    ...loves.filter((t) => t.index == 1)[0],
  },
  {
    year: 2026,
    ...loves.filter((t) => t.index == 3)[0],
  },
  {
    year: 2027,
    ...loves.filter((t) => t.index == 2)[0],
  },
]

const works = allData.filter((d) => d.topic == "Metier")
export const workData = [
  { year: 2024, ...works.filter((t) => t.index == 1)[0] },
  {
    year: 2025,
    ...works.filter((t) => t.index == 2)[0],
  },
  {
    year: 2026,
    ...works.filter((t) => t.index == 3)[0],
  },
  {
    year: 2027,
    ...works.filter((t) => t.index == 3)[0],
  },
]

const finances = allData.filter((d) => d.topic == "Finance")
export const financeData_7 = [
  { year: 2024, ...finances.filter((t) => t.index == 1)[0] },
  {
    year: 2025,
    ...finances.filter((t) => t.index == 2)[0],
  },
  {
    year: 2026,
    ...finances.filter((t) => t.index == 3)[0],
  },
  {
    year: 2027,
    ...finances.filter((t) => t.index == 4)[0],
  },
]
export const financeData_8 = [
  { year: 2024, ...finances.filter((t) => t.index == 3)[0] },
  {
    year: 2025,
    ...finances.filter((t) => t.index == 3)[0],
  },
  {
    year: 2026,
    ...finances.filter((t) => t.index == 2)[0],
  },
  {
    year: 2027,
    ...finances.filter((t) => t.index == 2)[0],
  },
]
export const financeData_9 = [
  { year: 2024, ...finances.filter((t) => t.index == 2)[0] },
  {
    year: 2025,
    ...finances.filter((t) => t.index == 2)[0],
  },
  {
    year: 2026,
    ...finances.filter((t) => t.index == 2)[0],
  },
  {
    year: 2027,
    ...finances.filter((t) => t.index == 2)[0],
  },
]

const travels = allData.filter((d) => d.topic == "Voyage")
export const travelData_3 = [
  { year: 2024, ...travels.filter((t) => t.index == 0)[0] },
  {
    year: 2025,
    ...travels.filter((t) => t.index == 2)[0],
  },
  {
    year: 2026,
    ...travels.filter((t) => t.index == 4)[0],
  },
  {
    year: 2027,
    ...travels.filter((t) => t.index == 5)[0],
  },
]
export const travelData_4 = [
  { year: 2024, ...travels.filter((t) => t.index == 0)[0] },
  {
    year: 2025,
    ...travels.filter((t) => t.index == 2)[0],
  },
  {
    year: 2026,
    ...travels.filter((t) => t.index == 3)[0],
  },
  {
    year: 2027,
    ...travels.filter((t) => t.index == 4)[0],
  },
]
export const travelData_5 = [
  { year: 2024, ...travels.filter((t) => t.index == 0)[0] },
  {
    year: 2025,
    ...travels.filter((t) => t.index == 1)[0],
  },
  {
    year: 2026,
    ...travels.filter((t) => t.index == 5)[0],
  },
  {
    year: 2027,
    ...travels.filter((t) => t.index == 4)[0],
  },
]

export const travelData_6 = [
  { year: 2024, ...travels.filter((t) => t.index == 0)[0] },
  {
    year: 2025,
    ...travels.filter((t) => t.index == 1)[0],
  },
  {
    year: 2026,
    ...travels.filter((t) => t.index == 3)[0],
  },
  {
    year: 2027,
    ...travels.filter((t) => t.index == 4)[0],
  },
]
