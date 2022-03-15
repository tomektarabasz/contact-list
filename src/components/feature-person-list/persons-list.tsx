import React, { useEffect } from "react";
import { PersonInfo } from "src/PersonInfo";
import styled from "styled-components";
import { PersonsListWrapper } from "./persons-list-wrapper";
import { isPersonList } from "./utils/type-guards";
import { useFetchPersons } from "./utils/use-fetch-persons";
import { usePersonsList, useSelectedPersons } from "./utils/use-persons-ctx";

export const PersonsList: React.FC = () => {
  const persons = usePersonsList();
  const selectedPersonsList = useSelectedPersons();
  const handleFetchData = useFetchPersons();
  useEffect(() => {
    handleFetchData();
    // Fetch should be done one first component mounte
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isPersonList(persons)) {
    return null;
  }
  let filteredPersonsList = null;
  if (isPersonList(selectedPersonsList)) {
    filteredPersonsList = persons.filter(
      (person) =>
        !selectedPersonsList.find(
          (selectedPerson) => selectedPerson?.id === person?.id
        )
    );
  }
  const finalPersonsList = filteredPersonsList ?? persons;
  return (
    <PersonsListWrapper>
      {finalPersonsList.map((person) => (
        <PersonInfo key={person.id} person={person} isSelected={false} />
      ))}
    </PersonsListWrapper>
  );
};
