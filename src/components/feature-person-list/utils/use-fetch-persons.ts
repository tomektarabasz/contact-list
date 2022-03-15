import { useCallback } from "react";
import apiData from "src/api";
import { isErrorMessage } from "./type-guards";
import {
  useAppendPersonsList,
  useSetError,
  useSetIsLoading,
} from "./use-persons-ctx";

const genericErrorMessage = "Unknow Error";

export const useFetchPersons = () => {
  const handleAppendPersonsList = useAppendPersonsList();
  const handleSetIsLoading = useSetIsLoading();
  const handleSetError = useSetError();
  const handleFetchData = useCallback(async () => {
    try {
      handleSetIsLoading(true);
      const newData = await apiData();
      handleAppendPersonsList(newData);
    } catch (error) {
      if (isErrorMessage(error)) {
        handleSetError(error.message);
      } else {
        handleSetError(genericErrorMessage);
      }
    } finally {
      console.log("finally");
      handleSetIsLoading(false);
    }
  }, [handleAppendPersonsList, handleSetIsLoading, handleSetError]);
  return handleFetchData;
};
