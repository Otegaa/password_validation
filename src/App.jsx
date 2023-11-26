import { useEffect, useState } from 'react';
import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Heading from './components/Heading';
import Form from './components/Form';
import Button from './components/Button';
import PasswordTracker from './components/PasswordTracker';

import { checkChars } from './utils/checkChars';
import { getEnglishWordCheck } from './utils/getEnglishWord.js';

const StyledApp = styled.main`
  max-width: 100rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Container = styled.div`
  width: 50rem;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #48735e;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
`;

const Align = styled.div`
  width: 70%;
`;

const App = () => {
  const [lengthPassword, setLengthPassword] = useState(false);
  const [letterPassword, setLetterPassword] = useState(false);
  const [digitPassword, setDigitPassword] = useState(false);
  const [wordCheckPassword, setWordCheckPassword] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const validatePassword = async (inputValue, controller) => {
    // regex validations
    const lengthValid = /^(.{8,16})$/;
    const containsLetter = /[a-zA-Z]/;
    const containsDigit = /\d/;

    setLengthPassword(lengthValid.test(inputValue));
    setLetterPassword(containsLetter.test(inputValue));
    setDigitPassword(containsDigit.test(inputValue));

    if (inputValue === '') {
      setWordCheckPassword(false);
    }

    if (inputValue.length >= 3) {
      const englishFoundWord = checkChars(inputValue);
      let isEnglishWord;

      for (let word of englishFoundWord) {
        const singleWord = word;
        const result = await getEnglishWordCheck(singleWord, controller.signal);

        isEnglishWord = result;

        if (result) {
          break;
        }
      }

      setWordCheckPassword(!isEnglishWord);
    } else if (inputValue.length > 0 && inputValue.length < 3) {
      setWordCheckPassword(true);
    }
  };

  useEffect(() => {
    let controller = new AbortController();

    setTimeout(function () {
      validatePassword(inputValue, controller);
    }, 700);

    return () => {
      if (controller) controller.abort('Input updated');
    };
  }, [inputValue]);

  const handleValidatePassword = (val) => {
    setInputValue(val);
  };

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Container>
          <Heading />
          <Align>
            <Form onValidate={handleValidatePassword} />
            <PasswordTracker
              lengthPassword={lengthPassword}
              letterPassword={letterPassword}
              digitPassword={digitPassword}
              wordCheckPassword={wordCheckPassword}
            />
          </Align>
          <Button
            inputValue={inputValue}
            lengthPassword={lengthPassword}
            letterPassword={letterPassword}
            digitPassword={digitPassword}
            wordCheckPassword={wordCheckPassword}
          />
        </Container>
      </StyledApp>
    </>
  );
};
export default App;
