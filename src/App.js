import { Switch, Route } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <div className="header">
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
