import { Link } from "react-router";
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

type FooterProps = {
  children: React.ReactNode;
};
export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href="/">
        {" "}
        Chonos pomodoro &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
}
