import { Link, useNavigate } from 'react-router'
import './Register.css'
import { useContext, useState } from 'react'
import UserContext from '../../contexts/UserContext'
import useForm from '../../hooks/useForm'

export default function Register() {
    const navigate = useNavigate()
    const { registerHandler } = useContext(UserContext)
 

    const registerSubmitHandler = async (values) => {
        const { email, username, password, rePassword, tel } = values;
      
        if (Object.keys(errors).length > 0) {
            return
        }
        try {
            await registerHandler(email, password, username, tel)

            navigate('/')
        } catch (err) {

            alert(err);
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
    const { register, formAction, errors, touched } = useForm(registerSubmitHandler, {
        email: '',
        username: '',
        password: '',
        tel: '',
        rePassword: ''
    })



    return (
        <div className='reg-wrapper'>
            <div className="registration-container">
                <h1>Create Account</h1>
                <form className="registration-form" action={formAction}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" {...register('email')} className={inputClass('email')} required placeholder="Enter your email" />
                        {errorText('email')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" {...register('username')} className={inputClass('username')} required placeholder="Choose a username" />
                        {errorText('username')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="tel">Telephone</label>
                        <input type="tel" id="tel" {...register('tel')} className={inputClass('tel')} placeholder="Enter your phone number" />
                       {errorText('tel')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register('password')} className={inputClass('password')} required placeholder="Create password" />
                       {errorText('password')}
                    </div>

                    <div className="form-group">
                        <label htmlFor="repassword">Repeat Password</label>
                        <input type="password" id="repassword" {...register('rePassword')} className={inputClass('rePassword')} required placeholder="Repeat your password" />
                        {errorText('rePassword')}
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