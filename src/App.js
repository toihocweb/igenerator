import Sidebar from "./components/Sidebar/Sidebar";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import DockerGenerator from "./components/DockerGenerator/DockerGenerator";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
