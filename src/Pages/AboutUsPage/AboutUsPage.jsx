import Header from "../../Components/Header/Header";
import TitleCard from "../../Components/TitleCard/TitleCard";
import Footer from "../../Components/Footer/Footer";
import Text from "../../Components/Text/Text";
import Subheading from "../../Components/Subheading/Subheading";
import BrandPanel from "../../Components/BrandPanel/BrandPanel";

import "./AboutUsPage.css";

import imageA1 from "../../Assets/Images/UI/Icons/OG_Icons/A1.jpg";
import imageA3 from "../../Assets/Images/UI/Icons/OG_Icons/A3.jpg";
import imageI3 from "../../Assets/Images/UI/Icons/OG_Icons/i3.jpg";
import imageA5 from "../../Assets/Images/UI/Icons/OG_Icons/A5.jpg";

const AboutUsPage = () => {
    return (
    <>  
        <Header/>
        <TitleCard title="About Us" subtitle="About"/>

        <section className="aboutUs-page-center-container">
            <section className="intro-text-container">
                <Text textSize="max(1.1vw, 0.8rem)" >
                    Welcome to <b> Cow Hides Exportation, Ltd </b>, a trusted supplier and exporter of high-quality cow hides to 
                    businesses worldwide. With a commitment to excellence and customer satisfaction, we specialize in providing 
                    premium hides tailored for industries ranging from furniture and upholstery to leather crafting and home décor.
                </Text>
            </section>
            <section className="aboutUs-content-section">
                <section className="information-section-container">
                    <Subheading> Who We Are </Subheading>
                    <Text textSize="max(1.1vw, 0.8rem)" >
                        We are a dedicated team passionate about delivering top-tier natural cow hides. Our operations are rooted in transparency
                        , reliability, and a deep understanding of the global leather market. By sourcing hides ethically and adhering to the 
                        highest tanning standards, we ensure every product meets and exceeds expectations.
                    </Text>

                    <Subheading> What We Do </Subheading>
                    <Text textSize="max(1.1vw, 0.8rem)" >
                        At <b> Cow Hides Exportation Ltd </b>, we focus exclusively on bulk supply, catering to businesses and manufacturers in 
                        need of consistent, high-quality materials. Our hides are available in a variety of natural tones, patterns, and sizes, 
                        perfect for diverse applications such as:
                    </Text>
                    <ul>
                        <li>Upholstery for furniture</li>
                        <li>Area rugs and decorative elements</li>
                        <li>Leather crafting and fashion accessories</li>
                    </ul>
                    
                    <Subheading> Our Mission</Subheading>
                    <Text textSize="max(1.1vw, 0.8rem)" >
                        To become a leading exporter of natural cowhides, providing businesses with reliable products that enhance their own 
                        offerings. We aim to build lasting partnerships by delivering exceptional value, competitive pricing, and unmatched 
                        customer service.
                    </Text>
                </section>
                <article className="image-gallary">
                    <section className="item img-1">
                        <img src={imageA5} alt="cow hide"/>
                    </section>
                    <section className="item img-2">
                        <img src={imageA1} alt="cow hide"/>
                    </section>
                    <section className="item img-3">
                        <img src={imageI3} alt="cow hide"/>
                    </section>
                    <section className="item img-4">
                        <img src={imageA3} alt="cow hide"/>
                    </section>
                </article>
            </section>
        </section>

        <BrandPanel/>
        
        <Footer/>
    </>
    );
}

export default AboutUsPage;
