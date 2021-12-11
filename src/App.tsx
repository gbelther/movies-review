import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import Home from "./views/Home";
import Movie from "./views/Movie";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" component={Movie} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
