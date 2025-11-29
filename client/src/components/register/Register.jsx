import { Link } from 'react-router'
import './Register.css'

export default function Register() {

    return (
        <div className='reg-wrapper'>
            <div className="registration-container">
                <h1>Create Account</h1>
                <form className="registration-form" action="/register" method="POST">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required placeholder="Choose a username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tel">Telephone</label>
                        <input type="tel" id="tel" name="tel" placeholder="Enter your phone number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required placeholder="Create password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="repassword">Repeat Password</label>
                        <input type="password" id="repassword" name="repassword" required placeholder="Repeat your password" />
                    </div>

                    <button type="submit" className="register-btn">Register</button>
                </form>

                <div className="login-link">
                    Already have an account? <Link to="/login">Sign in</Link>
                </div>
            </div>
        </div>
    )
}