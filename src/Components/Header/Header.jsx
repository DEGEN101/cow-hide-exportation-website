import { useState } from "react";

import "./Header.css"

import logo from "../../Assets/Images/UI/Icons/OG_Icons/logo.png";
import burgerIcon from "../../Assets/Images/UI/Icons/burger-menu-svgrepo-com.svg"
import closeIcon from "../../Assets/Images/UI/Icons/close-svgrepo-com.svg"

const Header = () => {
    const [toggleMobileNavigation, setToggleMobileNavigation] = useState("false");
    
    const onMobileNavidationButtonClick = () => {
        if (toggleMobileNavigation === "false") {
            setToggleMobileNavigation("true")
        }
        else {
            setToggleMobileNavigation("false");
        }
    }

    return (
    <>
        <section className="header-container">

            <section className="header-left">
                <img src={logo} alt="Logo" className="header-logo" />
                <h1 className="header-title">Cowhide Exportation Ltd</h1>
            </section>

            <button  
                onClick={() => onMobileNavidationButtonClick()} aria-controls="header-nav" 
                className="modile-toggle-nav" aria-expanded={toggleMobileNavigation}> 
                <img src={toggleMobileNavigation === "false" ? burgerIcon : closeIcon} alt="toggle mobile navigation icon"/>
            </button>

            <nav>
                <ul id="header-nav" className="header-nav" data-visible={toggleMobileNavigation}>
                    <li>
                        <a href="#/home" className="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="#/gallery" className="nav-link">Gallery</a>
                    </li>
                    <li>
                        <a href="#/about" className="nav-link">About</a>
                    </li>
                    <li>
                        <a href="#/contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    
    
    </>


    )





}

export default Header;