import Link from '@app/components/Link';
import styled from 'styled-components';
import React from 'react';

const Main = () => {
  return (
    <Wrapper>
      <h1>Main</h1>
      <Link to="/about">About</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Main;
