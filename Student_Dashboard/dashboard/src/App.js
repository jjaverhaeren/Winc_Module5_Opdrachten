import "./App.css";
import Home from "./components/Home";
import Chart from "./components/Chart";
import { Provider } from "./Context";

function App() {
  return (
    <Provider>
      <div className="App">
        <Home />
        <Chart />
      </div>
    </Provider>
  );
}

export default App;
