import { useLayoutEffect } from "react";
import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "coffee"
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
