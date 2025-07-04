import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStatemodel";
import { initialTaskState } from "./initialTaskState";

type taskContextProps = {
  state: TaskStateModel;
  setstate: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setstate: () => {},
};
export const taskContext = createContext<taskContextProps>(initialContextValue);
