import { useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { taskContext } from ".";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setstate] = useState(initialTaskState);

  return (
    <taskContext.Provider value={{ state, setstate }}>
      {children}
    </taskContext.Provider>
  );
}
