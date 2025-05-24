(function () {
  try {
    const theme = localStorage.getItem("themeOption");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  } catch (e) {
    console.error("Failed to load theme:", e);
  }
})();
