(function () {
  try {
    const theme = localStorage.getItem("themeOption");
    const font = localStorage.getItem("fontOption");

    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }

    if (font) {
      document.documentElement.setAttribute("data-font", font);
    }
  } catch (e) {
    console.error("Failed to load theme or font:", e);
  }
})();
