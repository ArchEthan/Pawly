# Pawly : le site, pour étudier et modifier

Ce dossier contient le site tel que vous l'avez vu, séparé en fichiers
HTML, CSS et JavaScript, avec des commentaires en français dans le code.

## Ouvrir le site

Double-cliquez sur `index.html` : il s'ouvre dans votre navigateur.
Après chaque modification, enregistrez le fichier et rechargez la page (F5).

Un éditeur gratuit comme **Visual Studio Code** aide beaucoup, surtout avec
l'extension **Live Server** qui recharge la page toute seule à chaque
enregistrement.

La police Nunito vient de Google Fonts : sans internet, le site s'affiche
avec une police de secours.

## Les fichiers

```
pawly/
├── index.html          La structure et les textes de la page (HTML)
├── css/
│   ├── style.css       Toute l'apparence : couleurs, tailles, mise en page
│   └── logo.css        Le logo intégré en texte. À ne pas modifier
├── js/
│   ├── donnees.js      Les animaux et les prix de démonstration
│   ├── main.js         L'aperçu du carnet, les prix, le formulaire
│   └── theme.js        Le bouton thème clair / sombre
└── assets/
    ├── logo-mot.png    Le mot « Pawly » (pour référence)
    └── logo-patte.png  La patte (pour référence)
```

## Le rôle de chaque langage

- **HTML** décrit le contenu : « ici un titre, ici un bouton, ici un paragraphe ».
  Lisez `index.html` de haut en bas : c'est dans l'ordre de la page.
- **CSS** décrit l'apparence : couleurs, espaces, tailles. Un bloc comme
  `.btn { ... }` s'applique à tous les éléments qui portent `class="btn"`.
- **JavaScript** rend la page interactive : il réagit aux clics et remplit
  des zones vides du HTML (par exemple la fiche de l'animal).

## Trois idées à retenir

1. **Les variables CSS** (`--brand`, `--bg`...) sont déclarées tout en haut de
   `style.css`. Les couleurs de tout le site viennent de là.
2. **Le thème sombre** n'est qu'un second jeu de ces variables, activé quand
   `<html>` porte l'attribut `data-theme="dark"`. `theme.js` pose cet attribut.
3. **Les données sont séparées de la logique** : `donnees.js` contient les
   informations, `main.js` sait les afficher. Ajouter un animal ne demande
   donc aucune ligne de code nouvelle.

## Exercices, du plus simple au plus avancé

1. **Couleurs.** Dans `style.css`, section 1, changez `--brand` (par exemple en
   `#2F6F5E`) et regardez tout le site changer.
2. **Textes.** Dans `index.html`, modifiez le titre ou les questions de la FAQ.
3. **Prix.** Dans `donnees.js`, changez `PRICES`. Pensez aussi au texte
   « 39 € » écrit dans `index.html` : pourquoi apparaît-il deux fois ?
4. **Un nouvel animal.** Dans `donnees.js`, copiez un bloc de `PETS`, changez
   le contenu, et ajoutez-le à la liste (sans oublier la virgule). Un nouveau
   bouton apparaît tout seul.
5. **Une question de FAQ.** Copiez une ligne `<details>` dans `index.html`.
6. **Un nouvel onglet « Poids ».** Dans `index.html` et `main.js`, imitez
   les onglets « Santé » et « Souvenirs ».
7. **Mémoriser l'animal choisi.** Inspirez-vous de `theme.js` et de
   `localStorage` pour retenir le dernier animal sélectionné.
8. **Un champ en plus** dans le formulaire (le prénom), avec sa vérification.

## Pour vous aider à comprendre

- Dans le navigateur, clic droit sur un élément puis **Inspecter** : vous voyez
  son HTML et le CSS qui lui est appliqué, et vous pouvez les modifier en direct.
- L'onglet **Console** affiche les erreurs JavaScript, avec le fichier et la ligne.
- Dans `main.js`, ajoutez `console.log(current);` pour afficher une variable.

## Ce qui n'existe pas encore

C'est une vitrine : l'aperçu est fictif et l'inscription n'envoie rien.
Pour un vrai produit, il faudra :

- un **serveur et une base de données** pour les comptes et les carnets ;
- un **paiement** pour Premium (par exemple Stripe) ;
- les **mentions légales**, les CGU et la politique de confidentialité ;
- un **nom de domaine** et un hébergement pour mettre le site en ligne.

Une application comme celle-là se fait en plusieurs étapes : le plus simple
est de commencer par faire fonctionner le carnet dans le navigateur (ajouter
un animal, un vaccin, une pesée) avant d'y brancher des comptes.
