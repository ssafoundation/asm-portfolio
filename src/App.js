import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Blogs from "./components/blog/Blogs";
import Contact from "./components/Contact/Contact";
import FrontPage from "./components/page/FrontPage";
import Home from "./components/page/home.jsx";
import Portfolio from "./components/portfolio/Portfolio";
import Skill from "./components/skill/Skill";
import "./main.css";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Home />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            {/* <Route path="/service">
              <Service />
            </Route> */}
            <Route path="/works">
              <Portfolio />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/blog">
              <Blogs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
           
           
           
            <Route exect path="/">
              <FrontPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
