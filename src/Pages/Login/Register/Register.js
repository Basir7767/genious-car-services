import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/login');
    }
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeHolder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Enter Your Email' />
                <input type="password" name="password" id="" placeholder='Enter your Password' required />
                <input type="submit" value="Register" required />
            </form>
            <p>Already have an Account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>PleaseLogin</Link></p>
        </div>
    );
};

export default Register;