import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import CreateVideogame from './components/CreateVideogame/CreateVideogame';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/videogames" component={CreateVideogame}/>
    </Switch>
    <div className="App">
      {/* <h1>Henry Videogames</h1> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
