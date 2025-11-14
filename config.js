window.APP_CONFIG = {
  appTitle: "EU AI Act App",
  enableBurgerMenu: true,        // << hier kannst du das Burger-Menü global an/aus schalten
  showBreadcrumb: false,         // Breadcrumb global
  enableMenu: false,   // <--- NEU
  pages: {
    "index.html": { title: "Herzlich willkommen", subtitle: "zur EU AI Act App", showInNav: true },
    "sub1.html": { title: "Rolle klassifizieren", subtitle: "Einstieg in den Fragebogen", showInNav: true },
    "sub2.html": { title: "Wichtige Links", subtitle: "Offizielle Quellen, Verbandsinformationen, Analysen und Werkzeuge.", showInNav: true }
  }
};

window.setPageTitle = function (title, subtitle = "") {
  const elTitle = document.getElementById("page-title");
  const elSub = document.getElementById("page-subtitle");

  if (elTitle) elTitle.textContent = title;
  if (elSub) {
    elSub.textContent = subtitle;
    elSub.classList.toggle("hidden", subtitle === "");
  }
};
