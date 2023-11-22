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

const PasswordTracker = ({
  lengthPassword,
  letterPassword,
  digitPassword,
  wordCheckPassword,
}) => {
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
    </StyledTracker>
  );
};
export default PasswordTracker;

// else if (/\d/.test(inputValue)) {
//           // If the password contains a digit, check words before and after
//           const wordsBeforeAndAfter = inputValue.split(/\d/);

//           // Check if both or one of the words before and after the digit is a valid English word
//           const isWordBeforeEnglish = await getEnglishWordCheck(
//             wordsBeforeAndAfter[0]
//           );
//           const isWordAfterEnglish = await getEnglishWordCheck(
//             wordsBeforeAndAfter[1]
//           );

//           if (isWordBeforeEnglish || isWordAfterEnglish) {
//             // If either word before or after the digit is a valid English word, set wordCheckPassword to false
//             setWordCheckPassword(false);
//           } else {
//             // If both words before and after the digit are not valid English words, set wordCheckPassword to true
//             setWordCheckPassword(true);
//           }

// else {
//         // Reset wordCheckPassword if the length is less than 3 characters
//         setWordCheckPassword(false);
//       }
