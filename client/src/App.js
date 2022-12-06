import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';
import Detail from './components/GameDetail/GameDetail';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/videogames" component={CreateVideogame}/>
      <Route path="/videogame/:id" component={Detail}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
