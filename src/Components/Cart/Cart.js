import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import cartImg from '../Cart/image/empty-cart.png'
import '../Cart/Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

    const cartItem = [];
    const itemLen = cartItem.length;
    return (
        <div className='cart-section'>
            <Header />
            <div className='cart-container'>
                <div className='cart-wrapper'>
                    {
                        itemLen === 0 ?
                            <div className='cart-item'>
                                <div className='cart-image'><img src={cartImg} alt="" className='image' /></div>
                                <div className='cart-info'>
                                    <h2>Your Amazon Cart is empty</h2>
                                    <p>Shop today's deals</p>
                                    <div className='btn-wrapper'>
                                        <Link to="/signin" replace="true">
                                            <button className='signin-btn'>Sign in to Your account</button>
                                        </Link>
                                        <Link to={"/signup"}>
                                            <button className='signup-btn'>Sign up now</button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            :
                            <div>Working On</div>
                    }
                    {/* <div className='cart-item'>
                        <div className='cart-image'><img src={cartImg} alt="" className='image' /></div>
                        <div className='cart-info'>
                            <h2>Your Amazon Cart is empty</h2>
                            <p>Shop today's deals</p>
                            <div className='btn-wrapper'>
                                <Link to="/signin" replace="true">
                                    <button className='signin-btn'>Sign in to Your account</button>
                                </Link>
                                <Link to={"/signup"}>
                                    <button className='signup-btn'>Sign up now</button>
                                </Link>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
