import Menu from "./components/menu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';
import Home from "./components/home";
import Skill from "./components/skill";
import { Col } from "antd";
import Blogs from "./components/blogs";
import Experience from "./components/experience";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import About from "./components/about";

function App() {
  return (
    <div className="App">
        <Router>
          <Col span={4}>
            <div className="menu-container">
               <Menu />
            </div>
          </Col>
          <Col span={20}>
            <div className="main-view-container">
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/skill'} component={Skill}/>
                    <Route path={'/blogs'} component={Blogs}/>
                    <Route path={'/experience'} component={Experience}/>
                    <Route path={'/portfolio'} component={Portfolio}/>
                    <Route path={'/contact'} component={Contact}/>
                    <Route path={'/about'} component={About}/>
                </Switch>
            </div>
          </Col>
        </Router>
    </div>
  );
}

export default App;
