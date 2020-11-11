import "../src/";
import Container from "./Container";
import Nav from "./components/Nav";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <Container />
    </div>
  );
};
export default App;
