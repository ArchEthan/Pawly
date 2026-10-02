/* ==========================================================
   main.js : ce qui rend la page vivante.

   Il fait trois choses :
   A. l'aperçu du carnet (choix de l'espèce, onglets, courbe de poids)
   B. le basculement de prix Mensuel / Annuel
   C. le formulaire d'inscription (vérification de l'e-mail)

   Il utilise PETS et PRICES, définis dans donnees.js.
   ========================================================== */
(function () {
  "use strict";

  // Raccourci : $("monId") équivaut à document.getElementById("monId")
  var $ = function (id) { return document.getElementById(id); };


  /* ========================================================
     A. L'APERÇU DU CARNET
     ======================================================== */

  var current = PETS[0];   // l'animal affiché (le premier au départ)

  // Dessine les boutons de choix d'espèce (Chien, Chat, Lapin...)
  function renderSpecies() {
    $("species").innerHTML = PETS.map(function (p) {
      // aria-pressed="true" sur le bouton actif : le CSS le met en marron
      return '<button class="chip" data-key="' + p.key + '" aria-pressed="' + (p === current) + '">' + p.key + '</button>';
    }).join("");
  }

  // Fabrique la courbe de poids sous forme de dessin SVG (du texte) à partir des pesées.
  function chart(p) {
    var w = 320, h = 124, pad = 28;               // taille du dessin et marges
    var vals = p.weights;
    var min = Math.min.apply(null, vals);
    var max = Math.max.apply(null, vals);
    var span = (max - min) || 1;                  // écart entre la plus petite et la plus grande pesée
    var step = (w - pad * 2) / (vals.length - 1); // distance horizontale entre deux points

    // Pour chaque pesée, on calcule la position [x, y] du point.
    // En SVG, y = 0 est en HAUT : on inverse donc avec "h - ...".
    var pts = vals.map(function (v, i) {
      return [pad + i * step, h - pad - ((v - min) / span) * (h - pad * 2 - 6)];
    });

    var line = pts.map(function (q) { return q[0].toFixed(1) + "," + q[1].toFixed(1); }).join(" ");
    var last = pts[pts.length - 1];
    var dots = pts.map(function (q) {
      return '<circle class="pt" cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="4.5" stroke-width="2.5"/>';
    }).join("");

    // Écrit un poids avec une virgule et son unité : 22.5 -> "22,5 kg"
    var fmt = function (v) { return String(v).replace(".", ",") + " " + p.unit; };

    return '<svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Courbe de poids de ' + p.name +
             ', de ' + fmt(vals[0]) + ' à ' + fmt(vals[vals.length - 1]) + ' sur six pesées">' +
      '<polyline class="ln" points="' + line + '" fill="none" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>' +
      dots +
      '<text class="axis" x="' + pad + '" y="' + (h - 6) + '">Il y a 5 mois</text>' +
      '<text class="axis" x="' + (w - pad) + '" y="' + (h - 6) + '" text-anchor="end">Aujourd\'hui</text>' +
      '<text class="val" x="' + (w - 6) + '" y="' + Math.max(13, last[1] - 12) + '" text-anchor="end">' + fmt(vals[vals.length - 1]) + '</text>' +
    '</svg>';
  }

  // Remplit la carte avec les informations de l'animal courant.
  function renderPet() {
    var p = current;

    $("avatar").textContent = p.name.charAt(0);                 // 1re lettre du prénom
    $("avatar").style.setProperty("--t", p.t + "%");            // règle la teinte (variable CSS --t)
    $("petName").textContent = p.name;
    $("petInfo").textContent = p.info;
    $("weightTitle").textContent = "Poids, en " + (p.unit === "kg" ? "kilos" : "grammes");

    // .map() transforme chaque rappel en morceau de HTML, .join("") les assemble.
    $("remind").innerHTML = p.remind.map(function (r) {
      return '<li><span class="dot ' + r[2] + '" aria-hidden="true"></span>' +
             '<span class="what">' + r[0] + '</span><span class="when">' + r[1] + '</span></li>';
    }).join("");

    $("chart").innerHTML = chart(p);

    $("timeline").innerHTML = p.memories.map(function (m) {
      return '<li><div class="photo" style="--t:' + m[3] + '%" role="img" aria-label="Photo du souvenir"></div>' +
             '<div><strong>' + m[0] + '</strong><time>' + m[1] + '</time><p>' + m[2] + '</p></div></li>';
    }).join("");
  }

  // Clic sur un bouton d'espèce. Un seul écouteur sur le conteneur suffit
  // (on retrouve le bouton cliqué avec e.target.closest).
  $("species").addEventListener("click", function (e) {
    var b = e.target.closest("[data-key]");
    if (!b) return;
    current = PETS.filter(function (p) { return p.key === b.getAttribute("data-key"); })[0];
    renderSpecies();
    renderPet();
  });

  // Onglets Santé / Souvenirs : on affiche un panneau et on cache l'autre.
  function selectTab(which) {
    var sante = which === "sante";
    $("tab-sante").setAttribute("aria-selected", sante);
    $("tab-souv").setAttribute("aria-selected", !sante);
    $("panel-sante").hidden = !sante;     // l'attribut hidden masque l'élément
    $("panel-souv").hidden = sante;
  }
  $("tab-sante").addEventListener("click", function () { selectTab("sante"); });
  $("tab-souv").addEventListener("click", function () { selectTab("souv"); });


  /* ========================================================
     B. PRIX MENSUEL / ANNUEL
     ======================================================== */
  function setBilling(mode) {            // mode vaut "month" ou "year"
    var d = PRICES[mode];                // on va chercher les textes dans donnees.js
    $("priceValue").textContent = d.value;
    $("priceUnit").textContent = d.unit;
    $("priceNote").textContent = d.note;
    $("bMonth").setAttribute("aria-pressed", mode === "month");
    $("bYear").setAttribute("aria-pressed", mode === "year");
  }
  $("bMonth").addEventListener("click", function () { setBilling("month"); });
  $("bYear").addEventListener("click", function () { setBilling("year"); });


  /* ========================================================
     C. FORMULAIRE D'INSCRIPTION (simulé)
     ======================================================== */

  // La liste déroulante "Votre animal" est construite à partir de PETS.
  var animalSelect = document.querySelector('#signupForm select[name="animal"]');
  animalSelect.innerHTML = PETS.map(function (p) { return "<option>" + p.key + "</option>"; }).join("") +
                           "<option>Autre animal</option>";

  // Les boutons des cartes de tarifs (data-plan) pré-sélectionnent l'offre dans le formulaire.
  document.querySelectorAll("[data-plan]").forEach(function (a) {
    a.addEventListener("click", function () { $("planSelect").value = a.getAttribute("data-plan"); });
  });

  $("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();                  // empêche le rechargement de la page

    var f = e.target;
    var email = f.elements.email.value.trim();

    // Une "expression régulière" : un motif que doit respecter l'e-mail (texte@texte.texte)
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    $("errEmail").textContent = ok ? "" : "Entrez une adresse e-mail valide.";
    f.elements.email.setAttribute("aria-invalid", ok ? "false" : "true");
    if (!ok) { f.elements.email.focus(); return; }

    /* ICI, dans un vrai site : envoyer l'inscription à votre serveur ou à un outil
       d'e-mailing, puis, si l'offre est "premium", rediriger vers le paiement
       (Stripe Checkout, par exemple). Pour l'instant on affiche juste un message. */
    var premium = f.elements.plan.value === "premium";
    $("signupBox").innerHTML =
      '<div class="ok" role="status"><strong>C\'est noté.</strong>' +
      (premium ? "Votre essai Premium de 14 jours commencera à l'ouverture."
               : "Votre carnet gratuit vous attend à l'ouverture.") +
      " Ceci est une démo : aucune donnée n'a été envoyée.</div>";
  });


  /* ========================================================
     DÉMARRAGE : on affiche l'état initial de la page
     ======================================================== */
  renderSpecies();
  renderPet();
})();
