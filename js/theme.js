/* ==========================================================
   theme.js : le choix du thème clair / sombre.

   Principe : le CSS change toutes les couleurs quand <html> porte
   l'attribut data-theme="dark" (voir style.css, section 1).
   Ce script se contente de poser ou d'enlever cet attribut, et de
   retenir le choix du visiteur dans le navigateur (localStorage).

   Il est chargé dans le <head> pour appliquer le thème tout de suite,
   avant l'affichage de la page.
   ========================================================== */
(function () {
  "use strict";

  var root = document.documentElement;                          // l'élément <html>
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");  // réglage de l'appareil

  // 1. Appliquer tout de suite le choix déjà mémorisé (s'il existe).
  //    try/catch : certains navigateurs bloquent localStorage.
  try {
    var saved = localStorage.getItem("pawly-theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  // Quel thème est affiché en ce moment ? Le choix du visiteur, sinon celui de l'appareil.
  function currentTheme() {
    return root.getAttribute("data-theme") || (systemDark.matches ? "dark" : "light");
  }

  // Les deux icônes du bouton (dessins SVG)
  var ICON_MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>';
  var ICON_SUN  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';

  // 2. Quand la page est chargée, on branche le bouton.
  //    (Le bouton n'existe pas encore au moment où ce script s'exécute dans le <head>.)
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("themeBtn");

    // Met à jour l'icône et le texte lu par les lecteurs d'écran
    function renderButton() {
      var dark = currentTheme() === "dark";
      btn.innerHTML = dark ? ICON_SUN : ICON_MOON;
      btn.setAttribute("aria-label", dark ? "Passer au thème clair" : "Passer au thème sombre");
      btn.setAttribute("title", dark ? "Thème clair" : "Thème sombre");
    }

    // Au clic : on bascule, on applique, on mémorise.
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("pawly-theme", next); } catch (e) {}
      renderButton();
    });

    // Si l'appareil change de mode (ex. passage automatique en mode nuit), on remet l'icône à jour.
    if (systemDark.addEventListener) systemDark.addEventListener("change", renderButton);

    renderButton();
  });
})();
