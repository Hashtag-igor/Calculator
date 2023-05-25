import React from "react";

import THT from "./THT.jpg";

import "./Header.css";

function Header(){
    return (
        <header>
            <img className="logo" src={THT} alt="Logo da THT" />
            <nav>
                <ul>
                    <li><a className="linkedin" href="https://www.linkedin.com/in/igor-perdigao-silva/" target="_blank">Linkedin</a></li>
                    <li><a className="github" href="https://github.com/Hashtag-igor" target="_blank">Github</a></li>
                    <li><a className="linktree" href="https://linktr.ee/Hashtag_igor" target="_blank">Linktree</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;