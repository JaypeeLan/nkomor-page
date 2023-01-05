import "./App.css";
import ComingSoon from "./pages/comming-soon/ComingSoon";
import Home from "./pages/comming-soon/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/about" element={<Home />} />
          <Route path="/services" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
