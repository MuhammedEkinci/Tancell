import React from "react";
import { NavLink } from "react-router-dom";
import "./sideNav.css";

export default function SideNav(){
    return(
        <>
            <h4 id="side-nav-title">Product Categories</h4>
            <ul className="list-unstyled">
                <li>
                    <NavLink className="nav-link sidenav-links" to="/products/3D-Edge-To-Edge">3D Edge To Edge</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link sidenav-links" to="/products/2.5D-Tempered-Glass">2.5D Tempered Glass</NavLink>
                </li>
                <li>
                    <NavLink className="nav-link sidenav-links" to="/products/Phone-Cases">Phone Cases</NavLink>
                </li>
            </ul>
        </>
    );
}