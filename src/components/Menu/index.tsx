import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { RouterLink } from "../RouterLink";

type Theme = "dark" | "light";
export function Menu() {
  const [theme, setTheme] = useState<Theme>(() => {
    const storageTheme = (localStorage.getItem("theme") as Theme) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    setTheme((prevtheme) => {
      const nextTheme = prevtheme == "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Home"
        title="Home">
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history"
        aria-label="Histórico"
        title="Histórico">
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings"
        aria-label="Configurações"
        title="Configurações">
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
