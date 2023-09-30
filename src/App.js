import "./App.css";
import About from "./components/About/About";
import Clients from "./components/Clients/Clients";
import Home from "./components/Home/Home";
import Practices from "./components/Practices/Practices";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Practices />
      <Clients />
      <Team />
    </div>
  );
}

export default App;
