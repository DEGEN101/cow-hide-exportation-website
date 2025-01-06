import { useState } from "react";
import Text from "../Text/Text";
import { validateEmail } from "../../Utilities/DataValidation";

import "./Footer.css"

const Footer = () => {
    const [email, setEmail] = useState("");

    const onSubscribeButtonClick = () => {
        if (!validateEmail(email)) return;

        setEmail("");
    }

    return (
    <>
        <section className="footer-container">
            <section className="information-section">
                {/* Address Section */}
                <section className="address-section">
                    <h3 className="footer-heading"> <b>Cow Hide Exportation, Ltd</b> </h3>
                    <Text> 224 Rua Dos Irmaos Roby, Maputo 1110, Mozambique </Text>
                </section>
                
                {/* Links Section */}
                <section className="links-section">
                    <h4 className="sub-heading"> Links </h4>
        
                    <a href="#/home" className="footer-link">
                        <Text textColor="#000000"> Home </Text>
                    </a>

                    <a href="#/gallary" className="footer-link">
                        <Text textColor="#000000"> Gallery </Text>
                    </a>

                    <a href="#/about" className="footer-link">
                        <Text textColor="#000000"> About </Text>
                    </a>

                    <a href="#/contact" className="footer-link">
                        <Text textColor="#000000"> Contact </Text>
                    </a>
                </section>
                
                {/* Newsletter Section */}
                <section className="newsletter-section">
                    <h4 className="sub-heading"> Newsletter </h4>

                    <form className="email-section">
                        <input value={email} placeholder="Enter Your Email Address" onChange={(event) => {setEmail(event.target.value)}}
                        style={{ borderBottomColor: email.length > 0 && !validateEmail(email) ? "red" : "#000000"}}/>
                        <button onClick={() => onSubscribeButtonClick()}>
                            <Text textSize="9pt" textColor="#000000"> SUBSCRIBE</Text>
                        </button>
                    </form>
                    
                </section>
            </section>

            <section className="copyright-section">  
                <Text textColor="#000000"> 2025, Cow Skin Exportation Ltd. All rights reserved </Text>
            </section>
        </section>
    </>
    );
}

export default Footer;
