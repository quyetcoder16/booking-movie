import { Router, Route, Switch } from 'react-router';
import './App.css';

import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplates/HomeTemplates';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import Loading from './components/Loading/Loading';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Loading />
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <CheckoutTemplate path='/checkout/:id' Component={Checkout} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <HomeTemplate path='/' exact Component={Home} />

      </Switch>
    </Router>
  );
}

export default App;
