import { useEffect, useState } from "react";

export default function useThemeMode() {
  const [mode, setMode] = useState("darkMode");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setMode(currentTheme === "dark" ? "darkMode" : "lightMode");

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      setMode(newTheme === "dark" ? "darkMode" : "lightMode");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return mode;
}
