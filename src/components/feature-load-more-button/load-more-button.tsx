import React from "react";
import { useFetchPersons } from "../feature-person-list/utils/use-fetch-persons";
import { UIButton } from "../shared/ui-button";

export const LoadMoreButton: React.FC = () => {
  const handleFetchData = useFetchPersons();
  return (
    <UIButton
      ariaLabel="Loads more button"
      label="Loads more"
      onClick={handleFetchData}
    />
  );
};
