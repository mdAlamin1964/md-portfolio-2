import React from "react";
import { Link } from "react-router-dom";
export default function Header({handle_mobile_menu, show_mobile_menu}) {
    return (
        <>
            <div className="main-header container-fluid px-md-4">
                <div className="row d-flex align-items-center ">
                    <div className="col-md-4 logo-bar d-flex align-items-center justify-content-between ">
                        <h1 className="name-logo">Md.A</h1>
                        <div className="mobile-menu-icon cursor-pinter" onClick={handle_mobile_menu()}>☰</div>
                    </div>
                    <div className={`col-md-8 menu-item-bar ${show_mobile_menu? 'menu-item-bar-show' : ''}`}>
                        <ul className="d-flex align-items-center justify-content-end gap-3">
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/platforms"> Platforms </Link></li>
                            <li><Link to="/contact" className="contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}