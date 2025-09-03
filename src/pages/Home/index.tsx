import { Container } from "../../components/Container";
import { MainForm } from "../../components/MainForm";
import { CountDown } from "../../components/CountDown";
import { MainTemplate } from "../../templates/MainTemplate";
import { useEffect } from "react";
export function Home() {
  useEffect(() => {
    document.title = "Chronos Pomodoro";
  }, []);
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
