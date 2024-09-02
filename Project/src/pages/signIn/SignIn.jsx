import React, { useEffect } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import logoIcon from '../../assets/imgs/logo.png'; 
import Btn from '../../components/btn/Btn';

export default function SignIn() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    // Default credentials for verification
    const defaultUsername = 'admin';  // Set your default username
    const defaultPassword = 'password123';  // Set your default password

    useEffect(() => {
        document.body.classList.add('signin-page');
        
        return () => {
            document.body.classList.remove('signin-page');
        };
    }, []);

    const handleSignIn = (e) => {
        e.preventDefault();

       
        if (!username || !password) {
            setError('Both fields are required.');
            hideErrorAfterDelay();
            return;
        }

        
        if (username !== defaultUsername) {
            setError('Invalid username.');
            hideErrorAfterDelay();
            return;
        }

        if (password !== defaultPassword) {
            setError('Invalid password.');
            hideErrorAfterDelay();
            return;
        }

       
        setError('');
        navigate('/dashboard'); 
    };

    
    const hideErrorAfterDelay = () => {
        setTimeout(() => {
            setError('');
        }, 1000); 
    };

    return (
        <div className="signin-container">
            <header className="signin-header">
                <div className="logo">
                    <img src={logoIcon} alt="Insider's Inventory Logo" className="logo-icon" />
                </div>
                <div className="app-name">INSIDER'S <span>INVENTORY</span></div>
            </header>
            <main className="signin-main">
                <h3 className="login-title">Administration Login</h3>
                <form className="signin-form" onSubmit={handleSignIn}>
                    {error && <p className="error-message"><i className="fas fa-exclamation-circle"></i> {error}</p>}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your Username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                    
                    <Btn
                        label="Sign In"
                        onClick={handleSignIn}
                        style={{ 
                            width: 'auto', 
                            padding: '0.75rem', 
                            backgroundColor: '#28a745', 
                            color: '#fff', 
                            borderRadius: '40px', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            marginTop: '1rem',
                            cursor: 'pointer'
                        }}
                    />
                </form>
                <footer className="signin-footer">
                    <a href="/" className="back-link">
                        ← Back to Insider's Inventory
                    </a>
                </footer>
            </main>
        </div>
    );
}
