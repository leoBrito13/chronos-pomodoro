import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  // ciclos
  const nextCycle = getNextCycle(state.currentCyrcle);
  const nextCycleType = getNextCycleType(nextCycle);
  //Tips
  const tipsForWhenActiveTask = {
    workTime: <span> Foque por {state.config.workTime}</span>,
    shortBreakTime: <span> Descanse por {state.config.shortBreakTime}</span>,
    longBreakTime: <span> Descanso longo</span>,
  };

  const tipsForNoWhenActiveTask = {
    workTime: <span> Próximo Ciclo é de {state.config.workTime}</span>,
    shortBreakTime: (
      <span> Próximo Ciclo é de {state.config.shortBreakTime}</span>
    ),
    longBreakTime: <span> Próximo Ciclo é descanso longo</span>,
  };

  return (
    <>
      {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoWhenActiveTask[nextCycleType]}
    </>
  );
}
