import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import { Link } from 'react-router-dom';


const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post('/users/login', { email, password });

            onLogin(response.data.token);
            localStorage.setItem('name', response.data.name);
            localStorage.setItem('email', response.data.email);
            navigate('/profile');


        } catch (err) {
            console.log("LOGIN ERROR:", err);

            if (err.response?.data?.message) {
                alert(err.response.data.message);
            } else {
                alert("Login failed. Check backend.");
            }
        }
    };


    return (
        <div style={{ padding: '50px' }}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /><br /><br />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required /><br /><br />
                <button type="submit">Login</button>

                <p style={{ marginTop: "20px" }}>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>

            </form>
        </div>
    );
};

export default Login;
