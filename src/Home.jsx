import React from "react";
import hero_image_1 from './assets/hero-image1.jpg'
import home1 from './assets/home1.jpg'
import code_icon from './assets/code-icon.png'
import code_icon1 from './assets/code-icon1.png'
import tiles1 from './assets/tiles1.jpg'
import module_4_2 from './assets/module-4-2.png'
import module_4_3 from './assets/module-4-3.png'




export default function Home(){
    const Image_src = "https://raw.githubusercontent.com/mdAlamin1964/md-portfolio-2/refs/heads/main/src/assets/"

    return (
        <>
            <div className="main-home container-fluid p-0">
                {/* module 0 */}
                <div className="row section-0 module-0 m-0">
                    <div className="col-md-4 left-bar ">
                        <div className="hero-image ">
                            <img className="slide-left" src={hero_image_1} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 right-bar px-md-5 px-3  slide-right">
                        <div className="info">
                            <h1 className="h1-title mb-5 ">
                            "Hi, I'm Md. Alamin, a certified frontend developer and WordPress expert with 300+ website builds."
                            <br />
                            <span className="light-gray"> from Dhaka, Bangladesh.</span> 
                            </h1>
                            <p className="paragraph-1">
                                I am a highly passionate web developer with expertise in React, Wix, and Squarespace. If you have an exciting project that requires top-notch skills, I’m the right person for the job.
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
                                <span className="color-green">Fiverr</span>, Web developer
                            </h3>
                            <p className="paragraph-1">
                            I am currently working as a freelancer on Fiverr. Feel free to visit my profile to learn more about my services.
                            </p>
                        </div>
                        <div className="col-md-4">
                        <div className="big-num">
                                02
                            </div>
                            <h3 className="h3-title mb-2">
                                <span className="color-blue">upWork</span>, WordPress developer
                            </h3>
                            <p className="paragraph-1">
                                I am currently working as a freelance WordPress developer on Upwork. Feel free to check out my profile for more details.
                            </p>
                        </div>
                        <div className="col-md-4">
                        <div className="big-num">
                                03
                            </div>
                            <h3 className="h3-title mb-2">
                                <span className="color-pink">Cure-it-Systems</span>, Web developer and Executive assistant
                            </h3>
                            <p className="paragraph-1">
                                I oversee all website-related tasks and build websites for clients while also managing executive operations for Cure-it-Systems
                            </p>
                        </div>
                    </div>
                </div>

                {/* Module 2 */}
                <div className="module-2 p-0">
                    <div class="row g-0">
                        <div className="col-md-6 left my-5 px-md-5 px-3">
                            <h1 className="h1-title mb-4">Philosophy & values</h1>
                            <p className="paragraph-1 mb-5 pb-5">
                            My philosophy centers on creativity, where each website is an opportunity to tell a story. I’m passionate about web building, aiming to craft engaging digital experiences that resonate with users. By blending innovative design with intuitive functionality, I ensure every project reflects the client's vision and connects with their audience. This commitment drives my dedication to delivering exceptional web solutions.
                            </p>

                            <a href="https://www.linkedin.com/in/alamin1964/" target="_blank"  className="site-btn-1">More about me</a>
                        </div>
                        <div className="col-md-6 right p-0">
                            <img src={home1} alt="" />
                        </div>
                    </div>
                </div>




                {/* Module 3 */}
                <div className="module-3 py-5 my-5 pb-0 px-md-5 px-3 overflow-hidden">
                    <div className="row g-5 py-5">
                        <div className="col-md-4 left">
                            <h1 className="h1-title mb-4">Skillset</h1>
                            <p className="paragraph-1">
                                With expertise in various areas of web development, including WordPress, Squarespace, Wix, and React, I am your ideal choice for comprehensive projects. No matter your requirements, I’m ready to tackle any challenge that comes my way
                                </p>
                        </div>

                        <div className="col-md-8 middle ">
                            <div className="row g-sm-5">
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                        <img src={code_icon} alt="" />
                                        <h3 className="h3-title mb-3">
                                            WordPress
                                        </h3>
                                        <p className="paragraph-2">
                                            Working with WordPress has deepened my understanding of user needs, problem-solving, and creating exceptional websites that deliver a great user experience.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                            <img src={code_icon} alt="" />
                                            <h3 className="h3-title mb-3">
                                                Squarespace
                                            </h3>
                                            <p className="paragraph-2">
                                                I create stunning Squarespace websites that blend visual appeal with functionality, ensuring each site meets your specific needs and helps you stand out online.
                                            </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-sm-5">
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                        <img src={code_icon} alt="" />
                                        <h3 className="h3-title mb-3">
                                            Wix
                                        </h3>
                                        <p className="paragraph-2">
                                            I specialize in building Wix websites that are visually appealing and user-friendly, tailored to meet your unique needs.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="site-blurb-1">
                                            <img src={code_icon} alt="" />
                                            <h3 className="h3-title mb-3">
                                                React
                                            </h3>
                                            <p className="paragraph-2">
                                                I specialize in building dynamic front-end websites using React, delivering engaging user experiences with seamless performance and modern design.
                                            </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                {/* module 4 */}
                <div className="module-4 pb-5 overflow-hidden py-5 my-5">
                    <div className="logo-box">
                        <ul>
                            <li>
                                <a href="" target="_blank">
                                    <img src={Image_src + "module-4-1.jpg"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    <img src={Image_src + "module-4-2.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    <img src={Image_src + "module-4-3.png"} alt="" />
                                </a>
                            </li>
                            <li>
                                <img src={Image_src + "logo-5.jpg"} alt="" />
                            </li>
                            <li>
                                <img src={Image_src + "logo-6.png"} alt="" />
                            </li>
                            <li>
                                <img src={Image_src + "logo-7.png"} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>



                {/* Moudle 5 */}
                <div className="module-5 py-5 px-md-5 px-3 ">
                    <div className="row g-md-5">
                        <div className="col-md-6 left">
                            <h4 className="h4-title mb-3">MY PROJECTS</h4>
                            <h1 className="h1-title mb-5">Work that I’ve done for the past 8 years
                            </h1>

                            <div className="image-box-blurb">
                                <a href="https://mdalmaincoder1.pythonanywhere.com/" target="_blank">
                                    <img src={Image_src+'memsm.png'} alt="" />
                                    <div className="info">
                                        <h3 className="h3-title">MemeShare Social App</h3>
                                        <p className="paragraph-1">
                                        Python, React, Sass, CSS their mobile app. I was asked to come up with a brand new design system and rethink the entire user experience from the ground up.
                                        </p>
                                    </div>

                                    <div className="icon-bottom">
                                        ↗
                                    </div>
                                </a>
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
                    <div className="info py-5 my-5 my-4 px-md-5 px-3 container">
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
                    <div className="row py-5 my-5 g-md-5">
                        <div className="col-md-6 left my-md-5">
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
                <div className="module-8 py-5 my-5 px-md-5 px-3">
                    <div className="top">
                        <div className="info mb-3">
                            <h1 className="h1-title">Photography</h1>
                            <p className="paragraph-1">
                                Here is a collection of my best travel pictures that I took while travelling
                                places all around the world.
                            </p>
                        </div>
                        <div className="bottom mt-5">
                            <div className="list my-4">
                                <ul>
                                    <li>
                                        <a href="#" className="site-btn-2 active">Italy</a>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Module 9 */}
                <div className="module-9 py-5 px-md-5 px-3">
                    <div className="row">
                        <div className="col-md-6 left">
                            <h1 className="h1-title">
                            Let’s talk business
                            </h1>
                            <p className="paragraph-1-gray">
                                Now that you know a lot about me, let me know if you are interested to work with me.
                            </p>
                        </div>
                        <div className="col-md-6 right">
                            <div className="contact-form">
                                <form action="#">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" id="name" />

                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" />

                                    <label htmlFor="message">Message</label>
                                    <textarea  id="message"></textarea>

                                    <input className="site-btn-2" type="button" value="Let’s get Stated" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}