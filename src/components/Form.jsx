import { useState } from 'react';
import styled from 'styled-components';
import { PiEyeLight, PiEyeSlash } from 'react-icons/pi';

const StyledForm = styled.form`
  width: 100%;
  margin-top: 1rem;
  position: relative;
`;

const StyledInput = styled.input`
  font-family: inherit;
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  border-radius: 2px;
  background-color: #ffffff;
  border-bottom: 3px solid transparent;
  border: none;
  width: 100%;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    border-bottom: 3px solid #43a6c6;
  }

  &::placeholder {
    color: #999;
  }
`;

const Icons = styled.div`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const Form = ({ onValidate }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <StyledForm>
      <StyledInput
        type={!showPassword ? 'password' : 'text'}
        placeholder="Input your password"
        onInput={(e) => onValidate(e.target.value)}
      />
      <Icons onClick={handleShowPassword}>
        {showPassword ? <PiEyeLight /> : <PiEyeSlash />}
      </Icons>
    </StyledForm>
  );
};
export default Form;
