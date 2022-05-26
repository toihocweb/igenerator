import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
