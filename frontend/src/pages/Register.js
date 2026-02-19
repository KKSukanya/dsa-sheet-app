import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

const Register = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post('/users/register', {
        name,
        email,
        password
      });

      onLogin(data.token);
      localStorage.setItem('name', data.name);
      localStorage.setItem('email', data.email);
      navigate('/profile');


    } catch (err) {
      console.log(err);
      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Registration failed. Check backend.");
      }
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "20px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
