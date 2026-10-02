/* ==========================================================
   donnees.js : les données de démonstration du site.
   Ici, aucune logique : seulement des informations que main.js
   affiche. C'est le meilleur fichier pour commencer à s'entraîner :
   changez un nom ou un prix, rechargez la page et regardez.

   Ce fichier doit être chargé AVANT main.js (voir index.html).
   ========================================================== */

/* PETS est un tableau (liste) d'objets : un objet par animal.
   Chaque objet contient des propriétés (clé: valeur).

   key       nom de l'espèce, affiché sur le bouton de choix
   name      prénom de l'animal
   info      ligne sous le prénom
   t         intensité de la teinte de l'avatar (en %, de 0 à 100)
   unit      unité du poids : "kg" ou "g"
   weights   les 6 dernières pesées, de la plus ancienne à la plus récente
   remind    les rappels de santé : [texte, échéance, état]
             état : "ok" = fait, "soon" = bientôt, "" = plus tard
   memories  les souvenirs : [titre, date, texte, teinte de la photo]

   Tous les exemples sont fictifs. */
var PETS = [
  {
    key: "Chien", name: "Biscuit", info: "Chien, 4 ans", t: 38, unit: "kg",
    weights: [21.8, 22.1, 22.4, 22.3, 22.6, 22.5],
    remind: [
      ["Vaccin annuel", "fait", "ok"],
      ["Vermifuge", "dans 12 jours", "soon"],
      ["Antiparasitaire", "dans 5 semaines", ""]
    ],
    memories: [
      ["Première baignade", "12 juil. 2026", "Il a refusé d'en sortir pendant une heure.", 30],
      ["Adoption", "3 mars 2022", "Premier trajet en voiture, très sage.", 18]
    ]
  },
  {
    key: "Chat", name: "Mochi", info: "Chat, 2 ans", t: 28, unit: "kg",
    weights: [4.1, 4.2, 4.2, 4.3, 4.3, 4.4],
    remind: [
      ["Vaccin annuel", "dans 3 semaines", "soon"],
      ["Vermifuge", "fait", "ok"],
      ["Contrôle dentaire", "dans 4 mois", ""]
    ],
    memories: [
      ["Première neige", "8 janv. 2026", "Museau sur la vitre pendant tout l'après-midi.", 22],
      ["Le carton", "19 mai 2025", "Entre dans tous les cartons, sans exception.", 34]
    ]
  },
  {
    key: "Lapin", name: "Praline", info: "Lapin, 3 ans", t: 44, unit: "kg",
    weights: [1.9, 1.9, 2.0, 2.0, 2.1, 2.0],
    remind: [
      ["Vaccins annuels", "fait", "ok"],
      ["Contrôle des dents", "dans 10 jours", "soon"],
      ["Pesée mensuelle", "dans 3 semaines", ""]
    ],
    memories: [
      ["Premier binky", "2 avr. 2026", "Un saut en vrille au milieu du salon.", 26],
      ["Arrivée à la maison", "14 sept. 2023", "Cachée sous le canapé pendant deux jours.", 40]
    ]
  },
  {
    key: "Furet", name: "Nougat", info: "Furet, 1 an", t: 32, unit: "g",
    weights: [780, 810, 840, 860, 870, 880],
    remind: [
      ["Vaccin annuel", "dans 2 mois", ""],
      ["Pesée mensuelle", "dans 6 jours", "soon"],
      ["Contrôle de routine", "fait", "ok"]
    ],
    memories: [
      ["La chaussette volée", "5 fév. 2026", "Cachette découverte derrière le frigo : onze chaussettes.", 36],
      ["Premier jour", "21 oct. 2025", "A exploré chaque pièce en moins de dix minutes.", 20]
    ]
  },
  {
    key: "Cochon d'Inde", name: "Pépito", info: "Cochon d'Inde, 2 ans", t: 24, unit: "g",
    weights: [990, 1010, 1030, 1040, 1050, 1060],
    remind: [
      ["Contrôle des dents", "dans 3 semaines", "soon"],
      ["Pesée hebdomadaire", "fait", "ok"],
      ["Bilan de santé", "dans 5 mois", ""]
    ],
    memories: [
      ["Premier petit cri de joie", "30 juin 2026", "Au bruit du sac de légumes, il ne se trompe jamais.", 30],
      ["Arrivée avec son copain", "11 nov. 2024", "Ils ont dormi collés l'un à l'autre.", 42]
    ]
  },
  {
    key: "Tortue", name: "Gaston", info: "Tortue, 9 ans", t: 46, unit: "g",
    weights: [1320, 1335, 1350, 1360, 1375, 1385],
    remind: [
      ["Contrôle annuel", "fait", "ok"],
      ["Pesée mensuelle", "dans 8 jours", "soon"],
      ["Préparation de l'hivernage", "dans 2 mois", ""]
    ],
    memories: [
      ["Première sortie au jardin", "10 avr. 2026", "Parcours de dix mètres en une demi-heure.", 28],
      ["Ses 9 ans", "23 août 2026", "Gâteau de salade, succès complet.", 38]
    ]
  }
];

/* PRICES : les deux prix de l'offre Premium, affichés selon
   que le visiteur clique sur "Mensuel" ou "Annuel". */
var PRICES = {
  month: { value: "4,90 €", unit: "par mois", note: "Sans engagement" },
  year:  { value: "39 €",   unit: "par an",   note: "Soit 3,25 € par mois" }
};
