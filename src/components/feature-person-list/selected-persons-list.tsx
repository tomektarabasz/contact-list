import React from "react";
import { PersonInfo } from "src/PersonInfo";
import { PersonsListWrapper } from "./persons-list-wrapper";
import { isPersonList } from "./utils/type-guards";
import { useSelectedPersons } from "./utils/use-persons-ctx";

export const SelectedPersonsList: React.FC = () => {
  const selectedPersonsList = useSelectedPersons();
  if (!isPersonList(selectedPersonsList)) {
    return null;
  }
  return (
    <PersonsListWrapper>
      {selectedPersonsList.map((person) => (
        <PersonInfo key={person?.id} person={person} isSelected={true} />
      ))}
    </PersonsListWrapper>
  );
};
