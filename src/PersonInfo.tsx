import { useCallback } from "react";
import styled from "styled-components";
import {
  useAddSelectedPerson,
  useRemoveSelectedPerson,
} from "./components/feature-person-list/utils/use-persons-ctx";
import { sharedButtonStyles } from "./components/shared/common-styles";
import { PersonType } from "./data-access/types";

interface Props {
  person: PersonType;
  isSelected: boolean;
  className?: string;
}

const PersonInfo: React.FC<Props> = ({ person, isSelected, className }) => {
  const handleAddSelectedPerson = useAddSelectedPerson();
  const handleRemoveSelectedPerson = useRemoveSelectedPerson();
  const handleClick = useCallback(() => {
    isSelected
      ? handleRemoveSelectedPerson?.(person)
      : handleAddSelectedPerson?.(person);
  }, [handleAddSelectedPerson, handleRemoveSelectedPerson, isSelected, person]);

  return (
    <button
      aria-label="person details"
      className={`person-info ${className}`}
      id={person.id}
      name="SelectedPersons"
      value={person.id}
      onClick={handleClick}
    >
      <div className="firstNameLastName">{person?.firstNameLastName}</div>
      <div className="jobTitle">{person?.jobTitle}</div>
      <div className="emailAddress">{person?.emailAddress}</div>
    </button>
  );
};

const PersonInfoWrraped = styled(PersonInfo)`
  ${sharedButtonStyles}
  outline: ${(props) => (props.isSelected ? "2px solid green" : null)};
`;

export { PersonInfoWrraped as PersonInfo };
