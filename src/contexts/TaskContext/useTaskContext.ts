import { useContext } from "react";
import { taskContext } from ".";

export function useTaskContext() {
  return useContext(taskContext);
}
