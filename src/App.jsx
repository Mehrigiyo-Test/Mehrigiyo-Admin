import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import ControlPanel from "./pages/ControlPanel/ControlPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ControlPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
