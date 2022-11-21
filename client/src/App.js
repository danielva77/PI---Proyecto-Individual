import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
    </Switch>
    <div className="App">
      <h1>Henry Videogames</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
