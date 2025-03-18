import TitleCard from "../../Components/TitleCard/TitleCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Subheading from "../../Components/Subheading/Subheading";
import BrandPanel from "../../Components/BrandPanel/BrandPanel";
import Gallery from "../../Components/Gallery/Gallery";
import Text from "../../Components/Text/Text";
import "./GalleryPage.css"; // Ensure this path is correct




const GalleryPage = () => {
    return (
    <>
        <Header/>
        <TitleCard title="Gallery" subtitle="Gallery"/>

        <section className="gallery-page-container">
            <section className="contact-us-page-container">
                <section className="information-section-container">
                <Subheading>From Within</Subheading>
                </section>
                <section className="subtext">
                    <Text textSize="max(1.1vw, 0.8rem)" >
                        Explore our gallery to see the high-quality cowhides we offer.
                        Each piece is carefully selected for its unique texture and durability, perfect for bulk buyers seeking premium materials.
                    </Text>
                </section>
            </section>
        </section>


        <Gallery/>


        <BrandPanel/>
        
        <Footer/>
    </>
    );
}

export default GalleryPage;
