import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Heading from './components/Heading';
import Form from './components/Form';
import PasswordTracker from './components/PasswordTracker';
import { useEffect, useState } from 'react';
import { findData, findDataOptions } from './utils/findData';
import { extractCharactersBeforeFirstDigit } from './utils/checkFirstChar';

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

    const validatePassword = async () => {
      // regex validations
      const lengthValid = /^(.{8,16})$/;
      const containsLetter = /[a-zA-Z]/;
      const containsDigit = /\d/;

      setLengthPassword(lengthValid.test(inputValue));
      setLetterPassword(containsLetter.test(inputValue));
      setDigitPassword(containsDigit.test(inputValue));

      if (inputValue.length >= 3) {
        // Check if the entire password is an English word
        const word = extractCharactersBeforeFirstDigit(inputValue);
        console.log(word);
        // const digitWord = await getEnglishWordCheck(word);
        const isEnglishWord =
          word.length >= 3
            ? await getEnglishWordCheck(inputValue, signal)
            : false;
        console.log(isEnglishWord);

        // else if (digitWord) {
        //   setWordCheckPassword(false);
        // }

        if (isEnglishWord) {
          // If the password starts with a valid English word, set wordCheckPassword to false
          console.log('Setting wordCheckPassword to true');
          setWordCheckPassword(false);
        } else {
          // If the password doesn't start with a valid English word and doesn't contain a digit, set wordCheckPassword to true
          console.log(
            'Setting wordCheckPassword to false instead of true, it is checked'
          );
          setWordCheckPassword(true);
        }
      }

      if (inputValue.length < 1) {
        setWordCheckPassword(true);
      }
    };

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
          <Form onValidate={handleValidatePassword} />
          <PasswordTracker
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
