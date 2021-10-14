import Menu from "./components/menu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Home from "./components/home";
import Skill from "./components/skill";

function App() {
  return (
    <div className="App">
        <Router>
            {/*<div className="menu-container">*/}
            {/*    <Menu />*/}
            {/*</div>*/}
            <div className="main-view-container">
                {/*<Switch>*/}
                    <Route exact path={'/'} component={Home}/>
                    {/*<Route path={'/skill'} component={Skill}/>*/}
                {/*</Switch>*/}
            </div>
        </Router>
    </div>
  );
}

export default App;
