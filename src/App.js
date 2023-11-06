import { Router, Route, Switch } from 'react-router';
import './App.css';

import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplates/HomeTemplates';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <HomeTemplate path='/' exact Component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
