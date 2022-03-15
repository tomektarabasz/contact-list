import React, { useReducer } from "react";
import { createContext } from "use-context-selector";
import { initialState } from "./initial-state";
import { personInfoCtxReducer } from "./reducer";
import { PersonInfoCtxType } from "./types";

export const PersonInfoCtx = createContext<PersonInfoCtxType>({
  state: initialState,
});

export const PersonInfoProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(personInfoCtxReducer, initialState);
  return (
    <PersonInfoCtx.Provider value={{ state, dispatch }}>
      {children}
    </PersonInfoCtx.Provider>
  );
};
