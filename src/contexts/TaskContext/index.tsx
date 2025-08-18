import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStatemodel";
import { initialTaskState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

type taskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};
export const taskContext = createContext<taskContextProps>(initialContextValue);
