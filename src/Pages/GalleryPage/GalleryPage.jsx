import TitleCard from "../../Components/TitleCard/TitleCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Subheading from "../../Components/Subheading/Subheading";
import BrandPanel from "../../Components/BrandPanel/BrandPanel";
import "./ContactPage.css";



const GalleryPage = () => {
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
                <p>
                    For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. 
                    Our Staff Always Be There To Help You Out. Do Not Hesitate!
                </p>
            </section>
        </section>


        <BrandPanel/>
        
        <Footer/>
    </>
    );
}

export default GalleryPage;
