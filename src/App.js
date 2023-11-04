import { Router, Switch } from 'react-router';
import './App.css';

import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplates/HomeTemplates';
import Home from './pages/Home/Home';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
