import "./App.css";
import Home from "./pages/home/Home";
import Download from "./pages/Download/Download";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
