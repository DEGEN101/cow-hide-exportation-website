import Text from "../Text/Text";

import "./Footer.css"

import logo from "../../Assets/Images/UI/Icons/OG_Icons/logo.png";

const Footer = () => {

    return (
    <>
        <article className="footer-container">
            <section className="logo-section">
                <img src={logo} alt="Logo" className="footer-logo" />
                <section className="header-section">
                    <Text textColor="#000000" textSize="1.3rem" textWeight="700"> Cow Skin Exportation, Ltd</Text>
                </section>
            </section>

            <nav>
                <ul className="footer-navigation">
                    <li>
                        <a href="#/home" className="navigation-link">Home</a>
                    </li>
                    <li>
                        <a href="#/gallery" className="navigation-link">Gallery</a>
                    </li>
                    <li>
                        <a href="#/about" className="navigation-link">About</a>
                    </li>
                    <li>
                        <a href="#/contact" className="navigation-link">Contact</a>
                    </li>
                </ul>
            </nav>

            <section className="copyright-section">
                <Text> Copyright &copy; 2025  Cow Skin Exportation Ltd. </Text>
                <Text>  All Rights Reserved </Text>
            </section>
        </article>
    </>
    );
}

export default Footer;
