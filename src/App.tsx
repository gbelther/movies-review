import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import Home from "./views/Home";
import Movie from "./views/Movie";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
