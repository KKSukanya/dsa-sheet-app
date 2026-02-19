import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const logout = () => {
    onLogout();
    navigate('/login');
  };


  return (
    <nav style={{ padding: '10px', background: '#007bff', color: 'white' }}>
      <Link to="/profile" style={{ marginRight: '20px', color: 'white' }}>Profile</Link>
      <Link to="/topics" style={{ marginRight: '20px', color: 'white' }}>Topics</Link>
      <Link to="/progress" style={{ marginRight: '20px', color: 'white' }}>Progress</Link>
      <button onClick={logout} style={{ float: 'right' }}>Logout</button>
    </nav>
  );
};

export default Navbar;
