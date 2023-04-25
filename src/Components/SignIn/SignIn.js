import React, { useRef, useEffect } from 'react'
import '../SignIn/SignIn.css'
import logoImg from '../SignIn/image/logo-amazon.svg'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const inputData = useRef();

    useEffect(() => {
        if (inputData.current) {
            inputData.current.focus();
        }
    }, []);

    return (
        <div className='signin-container'>
            <div className="logo-wrapper">
                <img src={logoImg} alt="" className='logo-image' />
            </div>

            <div className="form-wrapper">
                <form action="">
                    <h2 className='signin-title'>Sign in</h2>

                    <div className="input-wrapper">
                        <label htmlFor="signin-id" className='input-label'>Email or mobile phone number</label><br />
                        <input type="text" name="signin-id" id="signin-id" className='input-data' ref={inputData} required /><br />
                        <Link to="/"><button type='Submit' className='submit-btn'>Continue</button></Link>
                    </div>

                    <div className="text-wrapper">
                        <p className='info-wrapper'>By continuing, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice.</span></p>
                    </div>
                </form>

                {/* <hr /> */}
                <p className='new-line'>New to Amazon ?</p>

                <Link to={"/signup"}>
                    <button className='create-account-btn'>Create your Amazon account</button>
                </Link>
            </div>
        </div>
    )
}

export default SignIn
