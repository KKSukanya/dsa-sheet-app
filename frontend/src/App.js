import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Topics from './pages/Topics';
import SubTopics from './pages/SubTopics';
import Progress from './pages/Progress';
import Navbar from './components/Navbar';
import Register from './pages/Register';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
  };

  return (
    <Router>
      {token && <Navbar onLogout={handleLogout} />}

      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />}
        />

        <Route
          path="/register"
          element={token ? <Navigate to="/profile" /> : <Register onLogin={handleLogin} />}
        />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/topics"
          element={token ? <Topics /> : <Navigate to="/login" />}
        />

        <Route
          path="/topics/:id"
          element={token ? <SubTopics /> : <Navigate to="/login" />}
        />

        <Route
          path="/progress"
          element={token ? <Progress /> : <Navigate to="/login" />}
        />

        <Route
          path="/"
          element={<Navigate to={token ? "/profile" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
