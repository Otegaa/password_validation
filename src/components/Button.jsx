import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 2.5rem;
  color: #eee;
  font-size: 1.5rem;
  background-color: #559277;
  border: 1px solid #c0c0c0;
  border-radius: 10px;
  cursor: copy;

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`;

const Button = ({
  inputValue,
  lengthPassword,
  letterPassword,
  digitPassword,
  wordCheckPassword,
}) => {
  const isValid =
    lengthPassword && letterPassword && digitPassword && wordCheckPassword;

  const handleCopy = () => {
    if (isValid) {
      navigator.clipboard.writeText(inputValue);
    }
  };

  return (
    <StyledButton onClick={handleCopy} disabled={!isValid}>
      Copy
    </StyledButton>
  );
};
export default Button;
