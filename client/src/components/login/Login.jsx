import './Login.css'

import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Login() {
    const { loginHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const submitHandler = async ({ email, password }) => {
        if (!email || !password) {
            return alert(`Email and Password are required`)
        }

        try {
            await loginHandler(email, password)

            navigate('/')

        } catch (err) {
            alert(err.message)
        }
    }

    const{
        register,
        formAction,

    }=useForm(submitHandler,{
        email:'',
        password:''
    })

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Sign In</h1>

                <form className="login-form" action={formAction}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" {...register('email')} required placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register('password')} required placeholder="Enter your password" />
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