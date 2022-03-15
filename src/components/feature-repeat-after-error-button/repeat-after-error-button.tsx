import { useCallback } from "react";
import { useFetchPersons } from "../feature-person-list/utils/use-fetch-persons";
import { useDeleteError } from "../feature-person-list/utils/use-persons-ctx";
import { UIButton } from "../shared/ui-button";

export const RepeatAfterErrorButton: React.FC = () => {
  const handleFetchData = useFetchPersons();
  const handleDeleteError = useDeleteError();
  const handleClick = useCallback(() => {
    handleDeleteError();
    handleFetchData();
  }, [handleDeleteError, handleFetchData]);
  return (
    <UIButton
      ariaLabel="Reapet fetch button"
      label="Reapet fetch"
      onClick={handleClick}
    />
  );
};
