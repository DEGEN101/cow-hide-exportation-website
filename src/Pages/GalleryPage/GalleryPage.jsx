import TitleCard from "../../Components/TitleCard/TitleCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Subheading from "../../Components/Subheading/Subheading";
import BrandPanel from "../../Components/BrandPanel/BrandPanel";
import Gallery from "../../Components/Gallery/Gallery";
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
                <p>
                    Explore our gallery to see the high-quality cowhides we offer.
                    Each piece is carefully selected for its unique texture and durability, perfect for bulk buyers seeking premium materials.
                </p>
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
