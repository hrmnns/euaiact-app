window.APP_CONFIG = {
  appTitle: "EU AI Act App",
  enableBurgerMenu: true,        // << hier kannst du das Burger-Menü global an/aus schalten
  showBreadcrumb: false,         // Breadcrumb global
  enableMenu: false,   // <--- NEU
  pages: {
    "index.html": { title: "Start", subtitle: "Einstieg in den Fragebogen", showInNav: true },
    "sub1.html": { title: "Sub 1", subtitle: "Einstieg in den Fragebogen", showInNav: true },
    "sub2.html": { title: "Sub 2", subtitle: "Einstieg in den Fragebogen", showInNav: true },
    "10_links.html": { title: "Wichtige Links", subtitle: "Einstieg in den Fragebogen", showInNav: true }
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
