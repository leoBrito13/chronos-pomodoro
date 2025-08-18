import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();
  const cycleStep = Array.from({ length: state.currentCyrcle });
  const cycleDescription = {
    workTime: "trabalho",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };
  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>
      <div className={styles.cycleDots}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo ${cycleDescription[nextCycleType]}`}
              title={`Indicador de ciclo ${cycleDescription[nextCycleType]}`}
              key={`${nextCycleType}_${nextCycle}`}></span>
          );
        })}
      </div>
    </div>
  );
}
