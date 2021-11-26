import logo from './logo.svg';
import './App.css';
import Search from './Search';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
