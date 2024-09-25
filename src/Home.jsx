import React from "react";
import hero_image_1 from './assets/hero-image1.jpg'
import home1 from './assets/home1.jpg'
import code_icon from './assets/code-icon.png'

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
                        <div className="col-md-6 left my-5 px-5">
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
                <div className="module-3 py-5 px-5">
                    <div className="row g-5 py-5">
                        <div className="col-md-4 left">
                            <h1 className="h1-title mb-4">Skillset</h1>
                            <p className="paragraph-1">
                                With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.
                                </p>
                        </div>

                        <div className="col-md-8 middle">
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
                <div className="module-4">
                    <div className="logo-box">
                        
                    </div>
                </div>
            </div>
        </>
    )
}