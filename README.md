# Pawly : le site, pour étudier et modifier

Ce dossier contient le site tel que vous l'avez vu, séparé en fichiers
HTML, CSS et JavaScript, avec des commentaires en français dans le code.


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
