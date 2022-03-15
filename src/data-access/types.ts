import apiData from "src/api";
import { ActionsType } from "./reducer";

type PromiseResolvedType<T> = T extends Promise<infer U> ? U : T;
export type ApiResponseType = PromiseResolvedType<ReturnType<typeof apiData>>;

export type PersonType = ApiResponseType[0];

export interface PersonInfoCtxState {
  persons: PersonType[];
  selectedPersons: PersonType[];
  isLoading: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export interface PersonInfoCtxType {
  state: PersonInfoCtxState;
  dispatch?: React.Dispatch<ActionsType>;
}
