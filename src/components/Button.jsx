import { useCopyToClipboard } from 'usehooks-ts';
import styled from 'styled-components';

const StyledButton = styled.button``;

const Button = ({
  inputValue,
  lengthPassword,
  letterPassword,
  digitPassword,
  wordCheckPassword,
}) => {
  const [_, copy] = useCopyToClipboard();
  const isValid =
    lengthPassword && letterPassword && digitPassword && wordCheckPassword;

  const handleCopy = () => {
    if (isValid) {
      copy(inputValue);
    }
  };

  return (
    <StyledButton onClick={handleCopy} disabled={!isValid}>
      Copy
    </StyledButton>
  );
};
export default Button;
