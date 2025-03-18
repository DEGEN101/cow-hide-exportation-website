import TitleCard from "../../Components/TitleCard/TitleCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Subheading from "../../Components/Subheading/Subheading";
import ContactForm from "../../Components/ContactForm/ContactForm"
import BrandPanel from "../../Components/BrandPanel/BrandPanel";
import Text from "../../Components/Text/Text";
import "./ContactPage.css";



const ContactPage = () => {
    return (
    <>
        <Header/>
        <TitleCard title="Contact Us" subtitle="Contact"/>

        <section className="contact-us-page-container">
            <section className="information-section-container">
                        <Subheading> 
                            Get In Touch With Us 
                        </Subheading>

            </section>
            <section className="subtext">
                <Text textSize="max(1.1vw, 0.8rem)">
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </Text>
            </section>
        </section>

        <ContactForm/>

        <BrandPanel/>
        
        <Footer/>
    </>
    );
}

export default ContactPage;
