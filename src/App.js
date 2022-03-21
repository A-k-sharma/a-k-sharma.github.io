import {Row, Col} from "antd";
import './App.scss';
import 'antd/dist/antd.css';
import NavBar from "./components/Navigation";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={`App ${darkMode? "dark-mode" : "light-mode"}`}>
      <Row>
        <Col className="container" span={18} offset={3}>
          <div>
            <NavBar setDarkMode={setDarkMode} darkMode={darkMode}/>
            <Banner/>
            <About/>
            <Skills/>
            <Experience/>
            <Contact/>
            <Footer/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
