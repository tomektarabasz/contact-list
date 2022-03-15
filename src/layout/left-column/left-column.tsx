import { Alert } from "antd";
import { LoadMoreButton } from "src/components/feature-load-more-button/load-more-button";
import { Loader } from "src/components/feature-loader/loader";
import {
  useErrorMessage,
  useSelectedPersons,
} from "src/components/feature-person-list/utils/use-persons-ctx";
import { RepeatAfterErrorButton } from "src/components/feature-repeat-after-error-button/repeat-after-error-button";
import styled from "styled-components";

const LeftColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeftColumn: React.FC = () => {
  const selectedPersons = useSelectedPersons();
  const { isError, errorMessage } = useErrorMessage();
  return (
    <LeftColumnWrapper className="selected">
      Selected contacts: {selectedPersons?.length ?? 0}
      {isError ? (
        <>
          <Alert message={errorMessage} type="error" closable />
          <RepeatAfterErrorButton />
        </>
      ) : (
        <Loader>
          <LoadMoreButton />
        </Loader>
      )}
    </LeftColumnWrapper>
  );
};
