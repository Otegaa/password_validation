import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
`;

const Heading = () => {
  return <StyledHeading>Password validator</StyledHeading>;
};
export default Heading;
