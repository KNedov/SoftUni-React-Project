import './Login.css'

import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { validateLogin } from '../../validators/validateLogin';

export default function Login() {
    const { loginHandler } = useContext(UserContext);
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState("")
    const [pending, setPending] = useState(false)

    const submit = async ({ email, password }) => {
        try {
            setPending(true);
            await loginHandler(email, password);
            setPending(false);
            navigate("/");
        } catch (err) {
          

        }finally{
            setPending(false)
        }
    }

    const inputClass = (field) => {
        const hasError = errors[field] && touched[field];
        return `input ${hasError ? 'input-error' : ''}`;
    };

    const errorText = (field) =>
        errors[field] && touched[field] && (
            <p className="error-text">{errors[field]}</p>
        );

    const {
        values,
        errors,
        touched,
        register,
        submitHandler
    } = useForm(
        { email: "", password: "" },
        validateLogin,
        submit
    );

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Sign In</h1>

                <form className="login-form" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" {...register('email')} className={inputClass('email')} required placeholder="Enter your email" />
                        {errorText('email')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register('password')} className={inputClass('password')} required placeholder="Enter your password" />
                        {errorText('password')}
                    </div>

                    <button type="submit" disabled={pending} className="login-btn">{pending ? "Loading..." : "Login"}</button>





                </form>

                <div className="login-footer">
                    <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
                    <p>Don't have an account? <Link to="/register" className="register-link">Register</Link></p>
                </div>
            </div>
        </div>
    )
}