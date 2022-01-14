import React from "react";

import THT from "./THT.jpg";

import "./Header.css";

function Header(){
    return (
        <header>
            <img className="logo" src={THT} alt="Logo da THT" />
            <nav>
                <ul>
                    <li><a className="instagram" href="#">Instagram</a></li>
                    <li><a className="linkedin" href="#">Linkedin</a></li>
                    <li><a className="github" href="#">Github</a></li>
                    <li><a className="linktree" href="#">Linktree</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;