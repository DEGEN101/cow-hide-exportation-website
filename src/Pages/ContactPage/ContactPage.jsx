import TitleCard from "../../Components/TitleCard/TitleCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Text from "../../Components/Text/Text";
import Subheading from "../../Components/Subheading/Subheading";
import ContactForm from "../../Components/ContactForm/ContactForm"
import BrandPanel from "../../Components/BrandPanel/BrandPanel";
import "./ContactPage.css";



const ContactPage = () => {
    return (
    <>
    
        <TitleCard title="Contact Us" subtitle="Contact"/>

        <section className="information-section-container">
                    <Subheading> 
                        Get In Touch With Us 
                    </Subheading>

        </section>
        <section className="subtext">
                    
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    
        </section>

        <ContactForm/>

        <BrandPanel/>
        
        <Footer/>
    </>
    );
}

export default ContactPage;
