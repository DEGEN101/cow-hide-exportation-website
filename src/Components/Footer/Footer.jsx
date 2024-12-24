import Text from "../Text/Text";

import "./Footer.css"

const Footer = () => {
    return (
    <>
        <section className="footer-container">
            <section className="information-section">
                {/* Address Section */}
                <section className="address-section">
                    <h3 className="footer-heading"> <b>Cow Hide Exportation, Ltd</b> </h3>
                    <Text textWeight="bold"> 224 Rua Dos Irmaos Roby, Maputo 1110, Mozambique </Text>
                </section>
                
                {/* Links Section */}
                <section className="links-section">
                    <h4 className="sub-heading"> Links </h4>
        
                    <a href="url" className="footer-link">
                        <Text textColor="#000000" textWeight="bold"> Home </Text>
                    </a>

                    <a href="url" className="footer-link">
                        <Text textColor="#000000" textWeight="bold"> Gallery </Text>
                    </a>

                    <a href="url" className="footer-link">
                        <Text textColor="#000000" textWeight="bold"> About </Text>
                    </a>

                    <a href="url" className="footer-link">
                        <Text textColor="#000000" textWeight="bold"> Contact </Text>
                    </a>
                </section>
                
                {/* Newsletter Section */}
                <section className="newsletter-section">
                    <h4 className="sub-heading"> Newsletter </h4>

                    <section className="email-section">
                        <Text textSize="9pt"> Enter Your Email Address </Text>
                        <Text textSize="9pt" textColor="#000000" textWeight="bold"> SUBSCRIBE</Text>
                    </section>
                    
                </section>
            </section>

            <section className="copyright-section">  
                <p> 2025, Cow Skin Exportation Ltd. All rights reserved </p>
            </section>
        </section>
    </>
    );
}

export default Footer;
