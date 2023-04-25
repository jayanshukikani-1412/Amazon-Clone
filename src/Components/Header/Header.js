import React from 'react'

import '../Header/Header.css'
import { Link } from 'react-router-dom'

import logoImg from "../Header/images/amaon-logo.png"
import indFlag from "../Header/images/india-flag.svg"
import cartImg from "../Header/images/cart-icon.jpg"

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BsSearch } from 'react-icons/bs'


import { Form, InputGroup, DropdownButton, Button, Dropdown } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {

    const itemArray = ["All Categories", "Alexa Skills", "Amazon Devices", "Amazon Fashions", "Amazon Pharmacy", "Appliances", "Apps & Games", "Baby", "Beauty", "Books", "Car & Motorbike", "Clothing & Accessories", "Collectibles", "Computer & Accessories", "Deals", "Electronics", "Furniture", "Garden & Outdoors", "Gift Cards", "Grocery & Gourmet Foods", "Health & Personal Care", "Home & Kitchen", "Industrial & Scientific", "Jewellery", "Kindle Store", "Luggage & Bags", "Luxury Beauty", "Movies & TV Shows", "Music", "Musical Instruments", "Office Products", "Pet Supplies", "Prime Video", "Shoes & Handbags", "Software", "Sports, Fitness & Outdoors", "Subscribe & Save", "Tools & Home Improvement", "Games", "Under ₹500", "Video Games", "Watches"];

    const languageArray = ["English - EN", "हिन्दी - HI", "தமிழ் - TA", "తెలుగు - TE", "ಕನ್ನಡ -KN", "മലയാളം - ML", "বাংলা - BN", "मराठी - MR"]


    return (

        <section className='header-section'>

            {/* header container */}
            <div className='header-container'>

                {/* logo wrapper */}
                <Link to="/" className='header-link'>
                    <div className='header-logo-wrapper'>
                        <img src={logoImg} alt="Amazon-logo" className='logo-img' />
                    </div>
                </Link>

                {/* address wrapper */}
                <Link to="/" className="header-link">
                    <div className='header-address-wrapper'>
                        <HiOutlineLocationMarker style={{ color: "white" }} />
                        <p>
                            <span className='span-title'>Hello</span>
                            {/* <br /> */}
                            <span className='white-title'>Select your address</span>
                        </p>
                    </div>
                </Link>

                {/* search wraper */}
                <Link to="/" className="header-link">
                    <div className="header-search-wrapper">
                        <InputGroup className='input-wrapper'>
                            <DropdownButton
                                variant="outline-secondary"
                                title="All"
                                id="input-group-dropdown-3"
                                className='drop-btn'
                            >
                                {
                                    itemArray.map((item,index) => {
                                        return (<Dropdown.Item href="#" key={index}>{item}</Dropdown.Item>)
                                    })
                                }
                            </DropdownButton>
                            <Form.Control aria-label="Text input with 2 dropdown buttons" placeholder='Search Amazon.in' />
                            <Button variant="outline-secondary" className='search-btn'><BsSearch style={{
                                fontSize: "20px"
                            }} /></Button>
                        </InputGroup>
                    </div>
                </Link>

                {/* language wrapper */}
                <Link to="/" className="header-link">
                    <div className="header-language-wrapper">
                        <img src={indFlag} alt="Indian-Flag" className='flag-icon' />
                        <DropdownButton
                            variant="outline"
                            title="EN"
                            id="input-group-dropdown-3"
                            style={{
                                color: "white"
                            }}
                        >
                            {
                                languageArray.map((item,index) => {
                                    return (<Dropdown.Item href="#" key={index}><input type="radio" name={item} id="" /> {item}</Dropdown.Item>)
                                })
                            }
                        </DropdownButton>
                    </div>
                </Link>

                {/* sign-in wrapper */}
                <Link to="signin" className="header-link">
                    <div className='header-signin-wrapper'>
                        <p>
                            <span className='span-title'>Hello, sign in</span>
                            {/* <br /> */}
                            <span className='white-title'>Account & Lists</span>
                        </p>
                    </div>
                </Link>


                {/* return and order wrapper */}
                <Link to="/" className="header-link">
                    <div className='header-return-wrapper'>

                        <p>
                            <span className='span-title'>Return</span>
                            {/* <br /> */}
                            <span className='white-title'>& Orders</span>
                        </p>
                    </div>
                </Link>


                {/*cart wrapper */}
                <Link to="/cart" className="header-link">
                    <div className='header-cart-wrapper'>
                        <p>
                            <span><img src={cartImg} alt="cart-icon" className='cart-icon' /></span>
                            <br />
                            <span className='white-title'>Cart</span>
                        </p>
                    </div>
                </Link>
            </div>

            {/* navbar conatainer */}
            <div className="navbar-container">
                <div className='navbar-wrapper'>
                    <ul className='navbar-ul'>
                        <li className='navbar-item'><a className='navbar-link' href="/">All</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Amazon miniTV</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Sell</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Best Sellers</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Mobiles</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Today's Deals</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Customer Service</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Electronics</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Prime</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">New Release</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Amazon Pay</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Home & Kitchen</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Fashion</a></li>
                        <li className='navbar-item'><a className='navbar-link' href="/">Computers</a></li>
                    </ul>
                </div>

                <div className='navbar-scheme-wrapper'>
                    <img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Header
