import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Breweries from "./pages/Breweries";
import Home from './pages/Home';
import List from "./pages/List";

function App() {
  return (
    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/breweries" element={<Breweries />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
