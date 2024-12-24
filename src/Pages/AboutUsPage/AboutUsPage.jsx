import TitleCard from "../../Components/TitleCard/TitleCard";
import Footer from "../../Components/Footer/Footer";
import Text from "../../Components/Text/Text";
import Subheading from "../../Components/Subheading/Subheading";
import BrandPanel from "../../Components/BrandPanel/BrandPanel";

import "./AboutUsPage.css";


const AboutUsPage = () => {
    return (
    <>
        <TitleCard title="About Us" subtitle="About"/>

        <section className="aboutUs-page-center-container">
            <section className="intro-text-container">
                <Text>
                    Welcome to <b> Cow Skin Exportation, Ltd </b>, a trusted supplier and exporter of high-quality cowhides to 
                    businesses worldwide. With a commitment to excellence and customer satisfaction, we specialize in providing 
                    premium hides tailored for industries ranging from furniture and upholstery to leather crafting and home décor.
                </Text>
            </section>
            <section className="aboutUs-content-section">
                <section className="information-section-container">
                    <Subheading> Who We Are </Subheading>
                    <Text>
                        We are a dedicated team passionate about delivering top-tier natural cowhides. Our operations are rooted in transparency, reliability, and a deep understanding of the global leather market. By sourcing hides ethically and adhering to the highest tanning standards, we ensure every product meets and exceeds expectations.
                    </Text>

                    <Subheading> What We Do </Subheading>
                    <Text>
                        At <b> Cow Skin Exportation Ltd </b>, we focus exclusively on bulk supply, catering to businesses and manufacturers in need of consistent, high-quality materials. Our hides are available in a variety of natural tones, patterns, and sizes, perfect for diverse applications such as:
                    </Text>
                    <ul>
                        <li>Upholstery for furniture</li>
                        <li>Area rugs and decorative elements</li>
                        <li>Leather crafting and fashion accessories</li>
                    </ul>
                    
                    <Subheading> Our Mission</Subheading>
                    <Text>
                    To become a leading exporter of natural cowhides, providing businesses with reliable products that enhance their own offerings. We aim to build lasting partnerships by delivering exceptional value, competitive pricing, and unmatched customer service.
                    </Text>
                </section>
                <section className="image-gallary">

                </section>
            </section>
        </section>

        <BrandPanel/>
        
        <Footer/>
    </>
    );
}

export default AboutUsPage;
