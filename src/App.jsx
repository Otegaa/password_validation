import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

import GlobalStyles from './styles/GlobalStyles';
import Heading from './components/Heading';
import Form from './components/Form';
import Button from './components/Button';
import PasswordTracker from './components/PasswordTracker';

import { findData, findDataOptions } from './utils/findData';
import { checkFirstChars } from './utils/checkFirstChar';

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
  const [wordCheckPassword, setWordCheckPassword] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const getEnglishWordCheck = async (word, signal) => {
    const wordsApiUrl = `https://wordsapiv1.p.rapidapi.com/words/${word}/typeOf`;
    const data = await findData(wordsApiUrl, findDataOptions, signal);

    return data;
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const validatePassword = debounce(async () => {
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
        // check if the input contains digit
        const wordBeforeDigit = checkFirstChars(inputValue);

        const [isEnglishWord, isWordBeforeDigitEnglish] = await Promise.all([
          getEnglishWordCheck(inputValue, signal),
          getEnglishWordCheck(wordBeforeDigit, signal),
        ]);

        if (
          isEnglishWord ||
          (isWordBeforeDigitEnglish && wordBeforeDigit.length >= 3)
        ) {
          setWordCheckPassword(false);
        } else {
          setWordCheckPassword(true);
        }
      }
    }, 500);

    validatePassword();

    return () => {
      controller.abort();
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
