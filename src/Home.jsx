import React from "react";
import hero_image_1 from './assets/hero-image1.jpg'
import home1 from './assets/home1.jpg'
import code_icon from './assets/code-icon.png'
import code_icon1 from './assets/code-icon1.png'
import tiles1 from './assets/tiles1.jpg'

export default function Home(){
    return (
        <>
            <div className="main-home container-fluid p-0">
                {/* module 0 */}
                <div className="row section-0 module-0 m-0">
                    <div className="col-md-4 left-bar">
                        <div className="hero-image">
                            <img src={hero_image_1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 right-bar px-md-5 px-3">
                        <div className="info">
                            <h1 className="h1-title mb-5">
                            "Hi, I'm Md. Alamin, a certified frontend developer and WordPress expert with 300+ website builds."
                            <br />
                            <span className="light-gray"> from Dhaka, Bangladesh.</span> 
                            </h1>
                            <p className="paragraph-1">
                                I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.
                            </p>
                            
                        </div>
                    </div>
                </div>

                {/* module 1 */}
                <div className="module-1 px-md-5 px-3">
                    <div className="row top">
                        <div className="col-md-7 left">
                            <h4 className="h4-title">WORK EXPERIENCE</h4>
                            <h1 className="h2-title">Companies I have worked for in the past.</h1>
                        </div>
                        <div className="col-md-5 right">

                        </div>
                    </div>

                    <div className="row bottom g-md-5 mt-2">
                        <div className="col-md-4">
                            <div className="big-num">
                                01
                            </div>
                            <h3 className="h3-title mb-2">
                                <span className="color-green">Google</span>,Interaction Designer
                            </h3>
                            <p className="paragraph-1">
                            I currently am the lead designer on the interaction design team for Google Play.
                            </p>
                        </div>
                        <div className="col-md-4">
                        <div className="big-num">
                                02
                            </div>
                            <h3 className="h3-title mb-2">
                                <span className="color-blue">Google</span>,Interaction Designer
                            </h3>
                            <p className="paragraph-1">
                            I currently am the lead designer on the interaction design team for Google Play.
                            </p>
                        </div>
                        <div className="col-md-4">
                        <div className="big-num">
                                03
                            </div>
                            <h3 className="h3-title mb-2">
                                <span className="color-pink">Google</span>,Interaction Designer
                            </h3>
                            <p className="paragraph-1">
                            I currently am the lead designer on the interaction design team for Google Play.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Module 2 */}
                <div className="module-2 p-0">
                    <div class="row g-0">
                        <div className="col-md-6 left my-5 px-md-5 px-3">
                            <h1 className="h1-title mb-4">Philosophy & values</h1>
                            <p className="paragraph-1">
                                I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.
                            </p>

                            <a href="#" className="site-btn-1">More about me</a>
                        </div>
                        <div className="col-md-6 right p-0">
                            <img src={home1} alt="" />
                        </div>
                    </div>
                </div>




                {/* Module 3 */}
                <div className="module-3 py-5 pb-0 px-md-5 px-3 overflow-hidden">
                    <div className="row g-5 py-5">
                        <div className="col-md-4 left">
                            <h1 className="h1-title mb-4">Skillset</h1>
                            <p className="paragraph-1">
                                With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.
                                </p>
                        </div>

                        <div className="col-md-8 middle ">
                            <div className="row g-sm-5">
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                        <img src={code_icon} alt="" />
                                        <h3 className="h3-title mb-3">
                                            Product Design
                                        </h3>
                                        <p className="paragraph-2">
                                            Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                            <img src={code_icon} alt="" />
                                            <h3 className="h3-title mb-3">
                                                Product Design
                                            </h3>
                                            <p className="paragraph-2">
                                                Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                                            </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-sm-5">
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                        <img src={code_icon} alt="" />
                                        <h3 className="h3-title mb-3">
                                            Product Design
                                        </h3>
                                        <p className="paragraph-2">
                                            Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                            <img src={code_icon} alt="" />
                                            <h3 className="h3-title mb-3">
                                                Product Design
                                            </h3>
                                            <p className="paragraph-2">
                                                Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.
                                            </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* module 4 */}
                <div className="module-4 pb-5 overflow-hidden">
                    <div className="logo-box">
                        <ul>
                            <li>
                                <img src={code_icon1} alt="" />
                            </li>
                            <li>
                                <img src={code_icon1} alt="" />
                            </li>
                            <li>
                                <img src={code_icon1} alt="" />
                            </li>
                            <li>
                                <img src={code_icon1} alt="" />
                            </li>
                            <li>
                                <img src={code_icon1} alt="" />
                            </li>
                            <li>
                                <img src={code_icon1} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Moudle 5 */}
                <div className="module-5 py-5 px-md-5 px-3">
                    <div className="row">
                        <div className="col-md-6 left">
                            <h4 className="h4-title mb-3">MY PROJECTS</h4>
                            <h1 className="h1-title mb-5">Work that I’ve done for the past 8 years
                            </h1>

                            <div className="image-box-blurb">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">CoinView Mobile App Design</h3>
                                    <p className="paragraph-1">
                                    I was commissioned by Coinview to revamp their mobile app. I was asked to come up with a brand new design system and rethink the entire user experience from the ground up.
                                    </p>
                                </div>

                                <div className="icon-bottom">
                                    ↗
                                </div>
                            </div>

                            <div className="image-box-blurb">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">CoinView Mobile App Design</h3>
                                    <p className="paragraph-1">
                                    I was commissioned by Coinview to revamp their mobile app. I was asked to come up with a brand new design system and rethink the entire user experience from the ground up.
                                    </p>
                                </div>

                                <div className="icon-bottom">
                                    ↗
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 right">
                        <div className="image-box-blurb">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">CoinView Mobile App Design</h3>
                                    <p className="paragraph-1">
                                    I was commissioned by Coinview to revamp their mobile app. I was asked to come up with a brand new design system and rethink the entire user experience from the ground up.
                                    </p>
                                </div>

                                <div className="icon-bottom">
                                    ↗
                                </div>
                            </div>

                            <div className="image-box-blurb">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">CoinView Mobile App Design</h3>
                                    <p className="paragraph-1">
                                    I was commissioned by Coinview to revamp their mobile app. I was asked to come up with a brand new design system and rethink the entire user experience from the ground up.
                                    </p>
                                </div>

                                <div className="icon-bottom">
                                    ↗
                                </div>
                            </div>
                            <div className="btn-area mt-5">
                                <a href="#" className="site-btn-2">View all projects</a>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Module 2 */}
                <div className="module-2 p-0 home-sac-6">
                    <div class="row g-0">
                        <div className="col-md-6 left my-5 px-md-5 px-3">
                            <h1 className="h1-title mb-4">Instagram</h1>
                            <p className="paragraph-1">
                                If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an avid traveller and I capture the best moments that I would love to cherish with the world
                            </p>

                            <a href="#" className="site-btn-1">Follow me on IG</a>
                        </div>
                        <div className="col-md-6 right p-0">
                            <img src={home1} alt="" />
                        </div>
                    </div>
                </div>



                {/* Moudle 6 */}
                <div className="module-6">
                    <div className="info py-5 px-md-5 px-3">
                        <h1 className="h1-title mb-4">
                            My Dribbble
                        </h1>
                        <p className="paragraph-1 mb-5">
                            Each dribbble shot is made with love and care. Do check out my work on
                            Dribbble. Likes and comments are appreciated.
                        </p>
                        <a href="#" className="site-btn-1">Follow me on IG</a>
                    </div>

                    <div className="stuck-image ">
                        <div className="bar px-md-5 px-3">•••</div>

                    </div>
                </div>


                {/* Module  7*/}
                <div className="module-7 py-5 px-md-5 px-3">
                    <div className="row py-5 my-5 g-5">
                        <div className="col-md-6 left">
                            <h1 className="h1-title mb-4">
                                This is what people say about me
                            </h1>
                            <p className="paragraph-1 mb-5">
                                Here are a few lines from people who I have worked with over the past 8+ years in my design career.
                            </p>
                            <a href="#" className="site-btn-1">See all testimonial</a>
                        </div>
                        <div className="col-md-6 right">
                            <div className="image-box-blurb-2">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">
                                    ‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’
                                    </h3>

                                    <h4 className="h4-title">Richard Owens</h4>
                                    <p className="paragraph-1">CEO, Company 1</p>
                                </div>
                            </div>
                            <div className="image-box-blurb-2">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">
                                    ‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’
                                    </h3>

                                    <h4 className="h4-title">Richard Owens</h4>
                                    <p className="paragraph-1">CEO, Company 1</p>
                                </div>
                            </div>
                            <div className="image-box-blurb-2">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">
                                    ‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’
                                    </h3>

                                    <h4 className="h4-title">Richard Owens</h4>
                                    <p className="paragraph-1">CEO, Company 1</p>
                                </div>
                            </div>
                            <div className="image-box-blurb-2">
                                <img src={tiles1} alt="" />
                                <div className="info">
                                    <h3 className="h3-title">
                                    ‘’Robin is one of the best designers I have worked with in my entire life. He is a designer who is very capable of taking up complex projects and delivers impeccable design.’’
                                    </h3>

                                    <h4 className="h4-title">Richard Owens</h4>
                                    <p className="paragraph-1">CEO, Company 1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                {/* Module 8 */}
                <div className="module-8 py-5 px-md-5 px-3">
                    <div className="top">
                        <div className="info mb-3">
                            <h1 className="h1-title">Photography</h1>
                            <p className="paragraph-1">
                                Here is a collection of my best travel pictures that I took while travelling
                                places all around the world.
                            </p>
                        </div>
                        <div className="bottom">
                            <div className="list">
                                <ul>
                                    <li>
                                        <a href="#" className="site-btn-2">Italy</a>
                                    </li>
                                    <li><a href="#" className="site-btn-2">India</a></li>
                                    <li><a href="#" className="site-btn-2">Brazil</a></li>
                                </ul>
                            </div>
                            <div className="image-gallery">
                                <ul>
                                    <li>
                                        <img src={tiles1} alt="" />
                                    </li>
                                    <li>
                                        <img src={tiles1} alt="" />
                                    </li>
                                    <li>
                                        <img src={tiles1} alt="" />
                                    </li>
                                    <li>
                                        <img src={tiles1} alt="" />
                                    </li>
                                    <li>
                                        <img src={tiles1} alt="" />
                                    </li>
                                    <li>
                                        <img src={tiles1} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}