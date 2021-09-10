import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage';
import VideogameDetail from './Pages/VideogameDetail';
import VideogameCreate from './Pages/VideogameCreate';
import { GlobalStyle } from './GlobalStyles/GlobalStyles'

function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage}  />
        <Route exact path='/home' component={Home}  />
        <Route exact path='/videogame/create' component={VideogameCreate}  />
        <Route exact path='/videogame/:id' component={VideogameDetail}  />
      </Switch>
    </Router>
    </>
  );
}

export default App;
