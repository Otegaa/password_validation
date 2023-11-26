import styled from 'styled-components';
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

const StyledList = styled.ul`
  list-style: none;
`;

const StyledParagraph = styled.p`
  color: #eee;
  margin-bottom: 1rem;
`;

const StyledListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  ${({ $isValid }) => ($isValid ? 'color: #C0C0C0' : 'color: #eee')}
`;

const StyledIcons = styled.span`
  width: 3rem;
  height: 3rem;
`;

const PasswordTracker = ({
  lengthPassword,
  letterPassword,
  digitPassword,
  wordCheckPassword,
}) => {
  return (
    <>
      <StyledParagraph>Your password must:</StyledParagraph>
      <StyledList>
        <StyledListItem $isValid={lengthPassword}>
          <StyledIcons>
            {lengthPassword ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
          </StyledIcons>
          Be 8 to 16 characters long
        </StyledListItem>
        <StyledListItem $isValid={letterPassword}>
          <StyledIcons>
            {letterPassword ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
          </StyledIcons>
          Contain at least one letter
        </StyledListItem>
        <StyledListItem $isValid={digitPassword}>
          <StyledIcons>
            {digitPassword ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
          </StyledIcons>
          Include at least one digit
        </StyledListItem>
        <StyledListItem $isValid={wordCheckPassword}>
          <StyledIcons>
            {wordCheckPassword ? (
              <ImCheckboxChecked />
            ) : (
              <ImCheckboxUnchecked />
            )}
          </StyledIcons>
          Not contain full English words
        </StyledListItem>
      </StyledList>
    </>
  );
};
export default PasswordTracker;
