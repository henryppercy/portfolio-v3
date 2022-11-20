import './DesktopContentRightSideBar.scss';
import useDarkMode from "use-dark-mode";
import {Link} from "react-router-dom";
import React from "react";

const DesktopContentRightSideBar = () => {
    const darkMode = useDarkMode();

    return (
        <div className="right-content-sidebar">
            <div className="top">
                <svg onClick={darkMode.toggle} className="mobile-toggle" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 20.625C11.8934 20.625 9.375 18.1066 9.375 15C9.375 11.8934 11.8934 9.375 15 9.375C18.1066 9.375 20.625 11.8934 20.625 15C20.625 18.1066 18.1066 20.625 15 20.625ZM15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5Z"/>
                    <path d="M15 0C15.5178 0 15.9375 0.419733 15.9375 0.9375V4.6875C15.9375 5.20527 15.5178 5.625 15 5.625C14.4822 5.625 14.0625 5.20527 14.0625 4.6875V0.9375C14.0625 0.419733 14.4822 0 15 0Z"/>
                    <path d="M15 24.375C15.5178 24.375 15.9375 24.7947 15.9375 25.3125V29.0625C15.9375 29.5803 15.5178 30 15 30C14.4822 30 14.0625 29.5803 14.0625 29.0625V25.3125C14.0625 24.7947 14.4822 24.375 15 24.375Z"/>
                    <path d="M30 15C30 15.5178 29.5803 15.9375 29.0625 15.9375H25.3125C24.7947 15.9375 24.375 15.5178 24.375 15C24.375 14.4822 24.7947 14.0625 25.3125 14.0625H29.0625C29.5803 14.0625 30 14.4822 30 15Z"/>
                    <path d="M5.625 15C5.625 15.5178 5.20527 15.9375 4.6875 15.9375H0.9375C0.419733 15.9375 -2.26323e-08 15.5178 0 15C2.26323e-08 14.4822 0.419733 14.0625 0.9375 14.0625H4.6875C5.20527 14.0625 5.625 14.4822 5.625 15Z"/>
                    <path d="M25.6066 4.39346C25.9727 4.75957 25.9727 5.35317 25.6066 5.71928L22.9549 8.37093C22.5888 8.73705 21.9952 8.73705 21.6291 8.37093C21.263 8.00482 21.263 7.41122 21.6291 7.04511L24.2808 4.39346C24.6469 4.02734 25.2405 4.02734 25.6066 4.39346Z"/>
                    <path d="M8.37087 21.6292C8.73699 21.9953 8.73699 22.5889 8.37087 22.955L5.71922 25.6067C5.3531 25.9728 4.75951 25.9728 4.39339 25.6067C4.02728 25.2405 4.02728 24.647 4.39339 24.2808L7.04505 21.6292C7.41116 21.2631 8.00475 21.2631 8.37087 21.6292Z"/>
                    <path d="M25.6066 25.6067C25.2405 25.9728 24.6469 25.9728 24.2808 25.6067L21.6291 22.955C21.263 22.5889 21.263 21.9953 21.6291 21.6292C21.9952 21.2631 22.5888 21.2631 22.9549 21.6292L25.6066 24.2809C25.9727 24.647 25.9727 25.2406 25.6066 25.6067Z"/>
                    <path d="M8.37087 8.37096C8.00476 8.73707 7.41116 8.73707 7.04505 8.37096L4.3934 5.7193C4.02728 5.35319 4.02728 4.7596 4.3934 4.39348C4.75951 4.02736 5.35311 4.02736 5.71922 4.39348L8.37087 7.04513C8.73699 7.41125 8.73699 8.00484 8.37087 8.37096Z"/>
                </svg>
                {/*<div className="line"></div>*/}
                {/*<form>*/}
                {/*    <label>LIGHT</label>*/}
                {/*    <input type="radio" name="dark" onClick={darkMode.disable} />*/}
                {/*    <label>DARK</label>*/}
                {/*    <input type="radio" name="dark" onClick={darkMode.enable} checked={darkMode.value}/>*/}
                {/*</form>*/}
            </div>
            <div className="bottom">
                <Link className="home" to="/"><a>HOME</a></Link>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default DesktopContentRightSideBar;