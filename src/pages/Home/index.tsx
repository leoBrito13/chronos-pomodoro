import { Container } from "../../components/Container";
import { MainForm } from "../../components/MainForm";
import { CountDown } from "../../components/CountDown";
import { MainTemplate } from "../../templates/MainTemplate";
export function Home() {
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
