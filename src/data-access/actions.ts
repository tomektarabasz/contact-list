import { PersonType } from "./types";

export const personInfoCtxAtionsTypes = {
  addSelectedPerson: "ADD_SELECTED_PERSON" as const,
  removeSelectedPerson: "REMOVE_SELECTED_PERSON" as const,
  appendPersonList: "APPEND_PERSON_LIST" as const,
  setIsLoading: "SET_IS_LOADING" as const,
  setError: "SET_ERROR" as const,
  deleteError: "DELETE_ERROR" as const,
};

export const personInfoCtxActions = {
  addSelectedPerson: (payload: PersonType) => ({
    type: personInfoCtxAtionsTypes.addSelectedPerson,
    payload,
  }),
  removeSelectedPerson: (payload: PersonType) => ({
    type: personInfoCtxAtionsTypes.removeSelectedPerson,
    payload: payload,
  }),
  appendPersonList: (payload: PersonType[]) => ({
    type: personInfoCtxAtionsTypes.appendPersonList,
    payload,
  }),
  setIsLoading: (payload: boolean) => ({
    type: personInfoCtxAtionsTypes.setIsLoading,
    payload,
  }),
  setError: (payload: string) => ({
    type: personInfoCtxAtionsTypes.setError,
    payload,
  }),
  deleteError: () => ({
    type: personInfoCtxAtionsTypes.deleteError,
    payload: undefined,
  }),
};

export type PersonInfoActions = typeof personInfoCtxActions;
