import './App.css';
import { Hello } from '@app/app/Hello';
import Form from '@app/app/Form';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
      <Hello />
      <Form />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default App;
