import styled from 'styled-components';
import { ImCheckboxUnchecked } from 'react-icons/im';
import { ImCheckboxChecked } from 'react-icons/im';

const StyledTracker = styled.div``;

const StyledList = styled.ul``;

const StyledParagraph = styled.p`
  color: #eee;
  margin-bottom: 1rem;
`;

const StyledListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  ${({ $isValid }) => ($isValid ? 'color: green;' : 'color: #eee')}
`;

const StyledIcons = styled.span`
  width: 3rem;
  height: 3rem;
`;

const PasswordTracker = ({ lengthPassword, letterPassword, digitPassword }) => {
  return (
    <StyledTracker>
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
      </StyledList>
    </StyledTracker>
  );
};
export default PasswordTracker;
