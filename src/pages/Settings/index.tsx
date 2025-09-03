import { SaveIcon } from "lucide-react";
import { MainTemplate } from "../../templates/MainTemplate";
import { Heading } from "../../components/Heading";
import { DefaultInput } from "../../components/DefaultInput";
import { DefaultButton } from "../../components/DefaultButton";
import { useEffect, useRef } from "react";
import { Container } from "../../components/Container";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.title = "Settings - Chronos Pomodoro";
  }, []);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();
    const formErrors = [];
    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas números para todos os campos");
    }

    if (workTime < 0 || workTime > 99) {
      formErrors.push("Digite valores entre 1 e 99 para Foco");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Digite valores entre 1 e 30 para descanso curto");
    }

    if (shortBreakTime < 1 || shortBreakTime > 60) {
      formErrors.push("Digite valores entre 1 e 60 para descanso longo");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showMessage.success("Configurações salvas");
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Mudando configurações de descanso curto e longo
        </p>
      </Container>
      <Container>
        <form onSubmit={handleSaveSettings} action="#" className="form">
          <div className="formRow">
            <DefaultInput
              id="workTime"
              labelText={"Foco"}
              type={"number"}
              ref={workTimeInput}
              maxLength={2}
              defaultValue={state.config.workTime}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="shortBreakTime"
              labelText={"Descanso curto"}
              type={"number"}
              ref={shortBreakTimeInput}
              maxLength={2}
              defaultValue={state.config.shortBreakTime}
            />
          </div>
          <div className="formRow">
            <DefaultInput
              id="longBreakTime"
              labelText={"Descanso Longo"}
              type={"number"}
              ref={longBreakTimeInput}
              maxLength={2}
              defaultValue={state.config.longBreakTime}
            />
          </div>
          <div className="formRow">
            <DefaultButton
              icon={<SaveIcon />}
              aria-label="Salvar Configurações"
              title="Salvar Configurações"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
