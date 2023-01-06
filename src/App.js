import "./App.css";
import Home from "./pages/home/Home";
import Features from "./components/Features";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Features />} />
          <Route path="/services" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
