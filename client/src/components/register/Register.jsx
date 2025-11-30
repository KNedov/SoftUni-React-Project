import { Link, useNavigate } from 'react-router'
import './Register.css'
import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import useForm from '../../hooks/useForm'

export default function Register() {
    const navigate = useNavigate()
    const {registerHandler} = useContext(UserContext)

    const registerSubmitHandler = async(values)=>{
        const {email,username,password,rePassword,tel}=values;

        if(!email|| !password){
            return alert('Please fill all the fields')

        }

        if(password !==rePassword){
            return alert('Password does not match')
        }
        try {
            await registerHandler(email,password,username,tel)

            navigate('/')
        } catch (err) {
            
            alert(err.message);
        }
    }

    const {
        register,
        formAction,
    } = useForm(registerSubmitHandler,{
        email:'',
        username:'',
        password:'',
        tel:'',
        rePassword:''
    })

    return (
        <div className='reg-wrapper'>
            <div className="registration-container">
                <h1>Create Account</h1>
                <form className="registration-form" action={formAction}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" {...register('email')} required placeholder="Enter your email" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" {...register('username')}  required placeholder="Choose a username" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tel">Telephone</label>
                        <input type="tel" id="tel" {...register('tel')}  placeholder="Enter your phone number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" {...register('password')}  required placeholder="Create password" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="repassword">Repeat Password</label>
                        <input type="password" id="repassword" {...register('rePassword')}  required placeholder="Repeat your password" />
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