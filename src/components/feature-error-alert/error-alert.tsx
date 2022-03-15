import React from "react";
import { message } from "antd";
import { useErrorMessage } from "../feature-person-list/utils/use-persons-ctx";
import useDebouncedEffect from "use-debounced-effect-hook";

const debounceDelay = 500;

export const ErrorAlert = () => {
  const { isError, errorMessage } = useErrorMessage();
  useDebouncedEffect(
    () => {
      if (isError) {
        message.error(errorMessage, 0.5);
      }
    },
    [isError, errorMessage],
    debounceDelay
  );
  return <></>;
};
