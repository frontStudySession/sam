import Link from '@app/components/Link';
import styled from 'styled-components';
import React from 'react';

const About = () => {
  return (
    <Wrapper>
      <h1>About</h1>
      <Link to="/">Main</Link>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
