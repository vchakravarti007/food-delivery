import "./App.css";

import LandingPage from "./view/LandingPage";
import Login from "./view/Login";
import SignUp from "./view/SignUp";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/login/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
