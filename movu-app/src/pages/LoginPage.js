import { React, useState } from "react";
import {} from 'react-router-dom';
import { Button } from 'antd';
import './LoginPage.css';
import LoginImage1 from '../assets/movie-1.png';
import LoginImage2 from '../assets/movie-3d-glasses1.png';
/*import RunningLine from '../components/run-line.js';*/

const LoginPage = ({ handleLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const navigate = useNavigate();

    // default users' information
    // Authorization by using mocks
    const users = [
        { username: 'kersiie', password: '12345678'},
        { username: 'alina', password: '12345678'},
        { username: 'ulpan', password: '12345678'},
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        // Use .find() to check if username and password match any user in the array
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            // onLogin();
            // If user is found, redirect to home page
            // navigate('/home');
            handleLogin(user.username);
        } else {
            // If no match, set an error message
            alert('Invalid credentials, please try again.');
        }
    }

    return (
        <div className="login-page">
            {/* <RunningLine /> */}
             <div className="background-images">
                <img src={LoginImage1} alt="login-img1" className='login-img1' />
                <img src={LoginImage2} alt="login-img2" className='login-img2' />
            </div>
            <div className="content">
                <h1>Unlimited movies, <br />TV shows, and more</h1>
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username}
                            className="input-field"
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            className="input-field"
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <Button type="submit" className="login-button">Login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;