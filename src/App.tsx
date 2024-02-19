import { Main, About } from '@app/app/study5';
import Route from '@app/routes/Route';
import Router from '@app/routes/Router';

function App() {
  return (
    <Router>
      <Route
        path="/"
        component={<Main />}
      />
      <Route
        path="/about"
        component={<About />}
      />
    </Router>
  );
}

export default App;
