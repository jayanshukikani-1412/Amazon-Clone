import React, { useRef, useEffect } from 'react'
import '../SignUp/SignUp.css'
import logoImg from '../SignIn/image/logo-amazon.svg'
import { Link } from 'react-router-dom'


const SignUp = () => {
    const inputData = useRef();

    useEffect(() => {
        if (inputData.current) {
            inputData.current.focus();
        }
    }, []);

    return (
        <div className='signup-container'>
            <div className="logo-wrapper">
                <img src={logoImg} alt="" className='logo-image' />
            </div>

            <div className="form-wrapper">
                <form action="">
                    <h2 className='signup-title'>Create Account</h2>

                    <div className="input-wrapper">

                        <div className="name-wrapper">
                            <label htmlFor="username" className='input-label'>Your Name</label><br />
                            <input type="text" name="username" id="username" className='input-data' ref={inputData} required /><br />
                        </div>

                        <div className="mobile-wrapper">
                            <label htmlFor="mobile-number" className='input-label'>Mobile Number</label><br />
                            <input type="text" name="mobile-number" id="mobile-number" className='input-data'  required /><br />
                        </div>

                        <div className="email-wrapper">
                            <label htmlFor="email" className='input-label'>Email (Optional)</label><br />
                            <input type="email" name="email" id="email" className='input-data' /><br />
                        </div>

                        <div className="pwd-wrapper">
                            <label htmlFor="pwd" className='input-label'>Password</label><br />
                            <input type="password" name="pwd" id="pwd" className='input-data' /><br />
                        </div>

                        <div className="text-wrapper">
                            <p className='info-wrapper'>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
                        </div>

                        <Link to="/"><button type='Submit' className='submit-btn'>Continue</button></Link>
                    </div>

                    <div className="text-wrapper">
                        <p className='info-wrapper'>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
                    </div>

                    <hr />

                    <div className='signin-wrapper'>
                        <p>Already have an account <Link to={"/signin"} className='signin-link'>Sign In</Link></p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SignUp
