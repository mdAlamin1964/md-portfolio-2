import React from "react";
import hero_image_1 from './assets/hero-image1.jpg'

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
            </div>
        </>
    )
}