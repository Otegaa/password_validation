import styled from 'styled-components';
import { PiEyeLight } from 'react-icons/pi';
import { PiEyeSlash } from 'react-icons/pi';
import { useState } from 'react';

const StyledForm = styled.form`
  margin-top: 1rem;
  position: relative;
`;

const StyledInput = styled.input`
  font-family: inherit;
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
  padding: 1.5rem 2rem;
  border-radius: 2px;
  background-color: #ffffff;
  border-bottom: 3px solid transparent;
  border: none;
  width: 100%;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem black;
    border-bottom: 3px solid red;
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
`;

const Form = ({ onValidate }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((s) => !s);
  };

  return (
    <>
      <StyledForm>
        <StyledInput
          type={!showPassword ? 'password' : 'text'}
          placeholder="Input your password"
          onChange={(e) => onValidate(e.target.value)}
        />
        <Icons onClick={handleShowPassword}>
          {showPassword ? <PiEyeLight /> : <PiEyeSlash />}
        </Icons>
      </StyledForm>
    </>
  );
};
export default Form;
