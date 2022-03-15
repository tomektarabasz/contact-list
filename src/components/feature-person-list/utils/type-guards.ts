import { usePersonsList } from "./use-persons-ctx";

type PersonType = ReturnType<typeof usePersonsList>[0];

export const isCompletePersonObj = (
  obj: PersonType | undefined
): obj is PersonType => {
  if (obj === undefined) {
    return false;
  }
  return ![obj.emailAddress, obj.firstNameLastName, obj.id, obj.jobTitle].some(
    (value) => value === undefined || value === null
  );
};

export const isPersonList = (
  obj: PersonType[] | undefined
): obj is PersonType[] => {
  if (obj === undefined) {
    return false;
  }
  return !!obj.length;
};

export const isErrorMessage = (obj: any): obj is { message: string } =>
  obj?.message ?? false;
