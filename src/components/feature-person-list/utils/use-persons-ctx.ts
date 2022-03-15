import { personInfoCtxActions } from "src/data-access/actions";
import { PersonInfoCtx } from "src/data-access/person-info-ctx";
import { PersonInfoCtxState } from "src/data-access/types";
import { useContextSelector } from "use-context-selector";

export const usePersonsList = () =>
  useContextSelector(PersonInfoCtx, (ctx) => ctx.state.persons);

export const useSelectedPersons = () =>
  useContextSelector(PersonInfoCtx, (ctx) => ctx.state.selectedPersons);

export const useIsLoading = () =>
  useContextSelector(PersonInfoCtx, (ctx) => ctx.state.isLoading);

export const useErrorMessage = () =>
  useContextSelector(PersonInfoCtx, (ctx) => ({
    isError: ctx.state.isError,
    errorMessage: ctx.state.errorMessage,
  }));

type PersonsToAppend = PersonInfoCtxState["persons"];
type Person = PersonInfoCtxState["persons"][0];

const useDispatcher = () =>
  useContextSelector(PersonInfoCtx, (ctx) => ctx.dispatch);

export const useAppendPersonsList = () => {
  const dispatcher = useDispatcher();
  return (personsToAppend: PersonsToAppend) => {
    dispatcher?.(personInfoCtxActions.appendPersonList(personsToAppend));
  };
};

export const useSetIsLoading = () => {
  const dispatcher = useDispatcher();
  return (isLoading: boolean) => {
    dispatcher?.(personInfoCtxActions.setIsLoading(isLoading));
  };
};

export const useSetError = () => {
  const dispatcher = useDispatcher();
  return (errorMessage: string) => {
    dispatcher?.(personInfoCtxActions.setError(errorMessage));
  };
};

export const useDeleteError = () => {
  const dispatcher = useDispatcher();
  return () => {
    dispatcher?.(personInfoCtxActions.deleteError());
  };
};

export const useAddSelectedPerson = () => {
  const dispatcher = useDispatcher();
  return (secletedPerson: Person) => {
    dispatcher?.(personInfoCtxActions.addSelectedPerson(secletedPerson));
  };
};

export const useRemoveSelectedPerson = () => {
  const dispatcher = useDispatcher();
  return (secletedPerson: Person) => {
    dispatcher?.(personInfoCtxActions.removeSelectedPerson(secletedPerson));
  };
};
