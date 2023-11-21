import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Heading from './components/Heading';
import Form from './components/Form';
import PasswordTracker from './components/PasswordTracker';
import { useState } from 'react';

const StyledApp = styled.main`
  max-width: 50rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  padding: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

const App = () => {
  const [lengthPassword, setLengthPassword] = useState(false);
  const [letterPassword, setLetterPassword] = useState(false);
  const [digitPassword, setDigitPassword] = useState(false);

  const handleValidatePassword = (val) => {
    // for the regex
    const lengthValid = /^(.{8,16})$/;
    const containsLetter = /[a-zA-Z]/;
    const containsDigit = /\d/;

    setLengthPassword(lengthValid.test(val));
    setLetterPassword(containsLetter.test(val));
    setDigitPassword(containsDigit.test(val));
  };

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <Heading />
          <Form
            onValidate={handleValidatePassword}
            lengthPassword={lengthPassword}
            letterPassword={letterPassword}
            digitPassword={digitPassword}
          />
          <PasswordTracker
            lengthPassword={lengthPassword}
            letterPassword={letterPassword}
            digitPassword={digitPassword}
          />
        </Container>
      </StyledApp>
    </>
  );
};
export default App;
