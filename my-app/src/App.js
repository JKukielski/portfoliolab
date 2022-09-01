import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Login from "./components/Login";
import Register from "./components/Register";
import LogoutSuccess from "./components/LogoutSuccess";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/logowanie" element={<Login />} />
            <Route exact path="/rejestracja" element={<Register />} />
            <Route exact path="/wylogowano" element={<LogoutSuccess />} />
            <Route exact path="/oddaj-rzeczy" element={<Dashboard />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
