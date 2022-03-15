import { personInfoCtxActions, personInfoCtxAtionsTypes } from "./actions";
import { PersonInfoCtxState } from "./types";

export type ActionsType = ReturnType<
  typeof personInfoCtxActions[keyof typeof personInfoCtxActions]
>;

export const personInfoCtxReducer = (
  state: PersonInfoCtxState,
  action: ActionsType
): PersonInfoCtxState => {
  switch (action.type) {
    case personInfoCtxAtionsTypes.addSelectedPerson: {
      const newSelectedPeronsList = [...state.selectedPersons, action.payload];
      return {
        ...state,
        selectedPersons: newSelectedPeronsList,
      };
    }
    case personInfoCtxAtionsTypes.removeSelectedPerson: {
      const newSelectedPeronsList = [
        ...state.selectedPersons.filter(
          (person) => person.id !== action.payload.id
        ),
      ];
      return { ...state, selectedPersons: newSelectedPeronsList };
    }
    case personInfoCtxAtionsTypes.appendPersonList: {
      return {
        ...state,
        persons: [...state.persons.concat(action.payload)],
      };
    }
    case personInfoCtxAtionsTypes.setIsLoading: {
      return { ...state, isLoading: action.payload };
    }
    case personInfoCtxAtionsTypes.setError: {
      return {
        ...state,
        errorMessage: action.payload,
        isError: true,
      };
    }
    case personInfoCtxAtionsTypes.deleteError: {
      return {
        ...state,
        isError: false,
        errorMessage: undefined,
      };
    }
    default:
      return { ...state };
  }
};
