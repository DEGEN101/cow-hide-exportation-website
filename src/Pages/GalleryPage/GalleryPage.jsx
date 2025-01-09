import TitleCard from "../../Components/TitleCard/TitleCard";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Subheading from "../../Components/Subheading/Subheading";
import BrandPanel from "../../Components/BrandPanel/BrandPanel";




const GalleryPage = () => {
    return (
    <>
        <Header/>
        <TitleCard title="Gallery" subtitle="Gallery"/>

        <section className="contact-us-page-container">
            <section className="information-section-container">
                        <Subheading> 
                             From WIthin
                        </Subheading>

            </section>
            <section className="subtext">
                <p>
                Explore our gallery to see the high-quality cowhides we offer.
                 Each piece is carefully selected for its unique texture and durability, perfect for bulk buyers seeking premium materials.
                </p>
            </section>
        </section>


        <BrandPanel/>
        
        <Footer/>
    </>
    );
}

export default GalleryPage;
