import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage';

function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage}  />
        <Route exact path='/home' component={Home}  />
      </Switch>
    </Router>
  );
}

export default App;
