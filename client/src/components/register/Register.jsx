import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useContext, useState } from 'react'
import UserContext from '../../contexts/UserContext'
import useForm from '../../hooks/useForm'
import { validateRegister } from '../../validators/validateRegister'

export default function Register() {
    const navigate = useNavigate()
    const { registerHandler } = useContext(UserContext)
    const[errMsg,setErrMsg]=useState()
    const [pending,setPending]=useState(false)
 

    const submit = async (values) => {
    if (Object.keys(errors).length > 0) {
        return;
    }

    try {
        setPending(true);

        await registerHandler(
            values.email,
            values.password,
            values.username,
            values.tel
        );

        navigate('/');
    } catch (err) {
        setErrMsg(err.message);
    } finally {
        setPending(false); 
    }
};
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
        submitHandler } = useForm(
        {
        email: '',
        username: '',
        password: '',
        tel: '',
        rePassword: ''
        },
        validateRegister,
        submit
    )



    return (
        <div className='reg-wrapper'>
            <div className="registration-container">
                <h1>Create Account</h1>
                <form className="registration-form" onSubmit={submitHandler}>
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
                    <button type="submit" disabled={pending} className="register-btn">{pending ? "Loading..." : "Register"}</button>
                    {errMsg&&<p className='error-text'>{errMsg}</p>}
                </form>

                <div className="login-link">
                    Already have an account? <Link to="/login">Sign in</Link>
                </div>
            </div>
        </div>
    )
}