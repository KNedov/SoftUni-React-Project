import { Link } from "react-router";
import './Login.css'

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Sign In</h1>

                <form className="login-form" action="/login" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required placeholder="Enter your password" />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                <div className="login-footer">
                    <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                    <p>Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
                </div>
            </div>
        </div>
    )
}