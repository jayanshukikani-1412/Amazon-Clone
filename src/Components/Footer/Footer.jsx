import React from 'react'
import '../Footer/Footer.css'
import logoImg from "../Footer/image/amaon-logo.png"


const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer-container">

                {/* back to top button */}
                <div className='btn-wrapper'>
                        <button>Back to top</button>
                </div>

                {/* top footer */}
                <div className='top-wrapper'>
                    <div className='link-wrapper'>
                        <div>
                            <p>Get to Know Us</p>
                            <p><a href="/">About Us</a></p>
                            <p><a href="/">Careers</a></p>
                            <p><a href="/">Press Releases</a></p>
                            <p><a href="/">Amazon Services</a></p>
                        </div>
                        <div>
                            <p>Connect with Us</p>
                            <p><a href="/">Facebook</a></p>
                            <p><a href="/">Twitter</a></p>
                            <p><a href="/">Instagram</a></p>
                        </div>
                        <div>
                            <p>Make Money with Us</p>
                            <p><a href="/">Sell on Amazon</a></p>
                            <p><a href="/">Sell under Amazon Accelerator</a></p>
                            <p><a href="/">Protect and Build Your Brand</a></p>
                            <p><a href="/">Amazon Global Selling</a></p>
                            <p><a href="/">Become an Affiliate</a></p>
                            <p><a href="/">Fulfilment by Amazon</a></p>
                            <p><a href="/">Advertise Your Products</a></p>
                            <p><a href="/">Amazon Pay on Merchants</a></p>


                        </div>
                        <div>
                            <p>Let Us Help You</p>
                            <p><a href="/">COVID-19 and Amazon</a></p>
                            <p><a href="/">Your Account</a></p>
                            <p><a href="/">Returns Centre</a></p>
                            <p><a href="/">100% Purchase Protection</a></p>
                            <p><a href="/">Amazon App Download</a></p>
                            <p><a href="/">Help</a></p>
                        </div>
                    </div>

                    <hr />

                    <div className='logoWrapper'>
                        <img src={logoImg} alt="" />
                        <button>English</button>
                    </div>

                    <div className='country-wrapper'>
                        <a href="/">Australia</a>
                        <a href="/">Brazil</a>
                        <a href="/">Canada</a>
                        <a href="/">China</a>
                        <a href="/">France</a>
                        <a href="/">Germany</a>
                        <a href="/">Italy</a>
                        <a href="/">Japan</a>
                        <a href="/">Mexico</a>
                        <a href="/">Netherlands</a>
                        <a href="/">Singapore</a>
                        <a href="/">Spain</a>
                        <a href="/">Turkey</a>
                        <a href="/">United Arab Emirates</a>
                        <a href="/">United Kingdom</a>
                    </div>
                </div>

                {/* bottom wrapper */}
                <div className='bottom-wrapper'>
                    <div className='link-container'>
                        <a href="/"><span>Abebook</span><br />Books, art & collectibles</a>
                        <a href="/"><span>Amazon Web Services</span><br />Scalable Cloud Computing Services</a>
                        <a href="/"><span>Audible</span><br />Download Audio Books</a>
                        <a href="/"><span>DPReview</span><br />Digital Photography</a>
                        <a href="/"><span>IMDb</span><br />Movies, TV & Celebrities</a>
                        <a href="/"><span>Shopbop</span><br />Designer Fashion Brands</a>
                        <a href="/"><span>Amazon Bussiness</span><br />Everythig For Your Bussiness</a>
                        <a href="/"><span>Prime Now</span><br />2-Hour Delivery on Everyday Items</a>
                        <a href="/"><span>Amazon Prime Music</span><br />90 million sonds, ad-free Over 15 million podcast episodes</a>
                    </div>

                    <div className='second-wrapper'>
                        <div className='condition-wrapper'>
                            <a href="/">Conditions of Use & Sale</a>
                            <a href="/">Privacy Notice</a>
                            <a href="/">Interest-Based Ads</a>
                        </div>
                        <div className='copyright-wrapper'>
                            <p>&#169; 1996-2023, Amazon.com, Inc. or its affiliates</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer
