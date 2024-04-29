export const tutoStudioVideo = {
  nextLabel: " Suivant ",
  prevLabel: " Précédent ",
  doneLabel: " Terminer ",
  // dontShowAgain: true,
  showBullets: false,
  steps: [
    {
      title: "Bienvenue sur Studio",
      intro:
        "Laissez-nous vous faire explorer notre Studio par ses fonctionnalités et surtout sa prise en main très facile 👋",
    },
    {
      title: "Template",
      intro:
        "Nous avons préparé des templates près à utiliser, il y un large choix selon votre convenance",
      element: document.querySelector(".templateList"),
    },
    {
      title: "Choix d'un template",
      intro:
        "Sélectionner le template qui vous semble convenir à votre vidéo finale.",
      element: document.querySelector(".template"),
    },
    {
      title: "Configuration",
      intro:
        "Le template est configurable avec plusieurs options sur cette rubrique. Vous pouvez entre autre: " +
        "<ul>" +
        "<li> ajouter un watermark </li>" +
        "<li> ajouter une musique de fond </li>" +
        "<li> changer des textes sur la vidéo </li>" +
        "<li> et encore beaucoup d'autres options que proposent le template en question </li>" +
        "</ul>",
      element: document.querySelector(".templateConfiguration"),
    },
    {
      title: "Prévisualisation",
      intro: "Vous pouvez suivre en temps réel toutes vos configurations",
      element: document.querySelector(".templatePlayer"),
    },
    {
      title: "Export",
      intro:
        "Etes-vous satisfaits de votre travail, il est temps d'exporter votre video et de le partager à vos proches",
      element: document.querySelector(".templateExport"),
    },
  ],
}
