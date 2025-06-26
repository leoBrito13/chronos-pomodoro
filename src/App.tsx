import { TimerIcon } from "lucide-react";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Container>
        <section>
          <Heading>
            Olá Mundo
            <button>
              <TimerIcon />
            </button>
          </Heading>{" "}
        </section>
      </Container>
    </>
  );
}
