import styles from "./styles.module.css";

type FooterProps = {
  children: React.ReactNode;
};
export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica pomodoro</a>
      <a href=""> Chonos pomodoro &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
