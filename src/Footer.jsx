import React from "react";
import { Link } from "react-router-dom";
import Code_icon from './assets/code-icon.png';

export default function Footer(){
    return (
        <>
            <div className="footer py-5 overflow-hidden">
                <div className="container-fluid py-5 px-md-5 px-3">
                    <div className="row g-5">
                        <div className="col-md-6 left">
                            <h1 className="name-logo">Md.A</h1>
                            <div className="social-icons mt-2">
                                <ul>
                                    <li>
                                        <a href=""><img src={Code_icon} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><img src={Code_icon} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><img src={Code_icon} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 middle">
                            <ul className="justify-content-end gap-3 footer-menu ">
                                <li><Link to="/experience">Experience</Link></li>
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="/platforms"> Platforms </Link></li>
                                <li><Link to="/contact" className="contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 right">
                            <ul className="justify-content-end gap-3 footer-menu">
                                <li><Link to="/experience">Experience</Link></li>
                                <li><Link to="/work">Work</Link></li>
                                <li><Link to="/platforms"> Platforms </Link></li>
                                <li><Link to="/contact" className="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="footer-copy">
                            <p className="paragraph-1-gray mb-0">
                            No Copyright 2020 • Robin Williams. Webflow cloneable
                            </p>
                            <h4 className="h4-title cursor-pinter">Created by Chethan KVS</h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}