import Main from '@app/app/study5/Main';
import About from '@app/app/study5/About';
import { init } from '@app/routes/Route';

function App({ $target }: any) {
  this.route = () => {
    const { pathName } = location;
    $target.innerHtml = '';

    if (pathName === '/') {
      new Main({ $target }).render();
    } else if (pathName === '/about') {
      new About({ $target }).render();
    }
  };
  window.addEventListener('popstate', this.route);
  init(this.route);
  this.route();
}

// import './App.css';
// import { Title } from '@app/app/study4/Title';
// import { FormComp } from '@app/app/study4/Form';
// import styled from 'styled-components';

// function App() {
//   return (
//     <Wrapper className="App">
//       <Title />
//       <FormComp />
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 50px;
//   height: 100vh;
// `;

export default App;
