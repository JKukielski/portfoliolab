import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logowanie" element={<Login />} />
          <Route exact path="/rejestracja" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
