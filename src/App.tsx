import './App.css';
import { Title } from '@app/app/Title';
import { FormComp } from '@app/app/Form';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
      <Title />
      <FormComp />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  height: 100vh;
`;

export default App;
