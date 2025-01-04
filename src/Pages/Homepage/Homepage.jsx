import { useNavigate } from "react-router-dom";

// Import Components
import Header from "../../Components/Header/Header";
import PackageCard from "../../Components/PackageCard/PackageCard";
import Footer from "../../Components/Footer/Footer";
import Text from "../../Components/Text/Text";

// Import Page Style Sheet
import "./Homepage.css"

// Import Assets
import sampleCowHideImage from "../../Assets/Images/UI/Homepage/sample-cowhide-image.jpg";
import africaContinentIcon from "../../Assets/Images/UI/Homepage/africa-continent-svgrepo-com.svg";
import letherFashionIcon from "../../Assets/Images/UI/Homepage/leather-fashion-svgrepo-com.svg";
import handprintIcon from "../../Assets/Images/UI/Homepage/handprint-svgrepo-com.svg";

import imageI1 from "../../Assets/Images/UI/Icons/OG_Icons/i1.jpg";
import imageI2 from "../../Assets/Images/UI/Icons/OG_Icons/i2.jpg";
import imageI6 from "../../Assets/Images/UI/Icons/OG_Icons/i6.jpg";
import imageI4 from "../../Assets/Images/UI/Icons/OG_Icons/i4.jpg";
import imageI7 from "../../Assets/Images/UI/Icons/OG_Icons/i7.jpg";
import imageI3 from "../../Assets/Images/UI/Icons/OG_Icons/i3.jpg";
import imageI8 from "../../Assets/Images/UI/Icons/OG_Icons/i8.jpg";
import imageI5 from "../../Assets/Images/UI/Icons/OG_Icons/i5.jpg";


const Homepage = () => {
    // Variables
    const navigate = useNavigate();

    const premiumPackageInfo = {
        TITLE: "Premium  Package",
        SUBTITLE: "Export & Import",
        CONTENT: [
            "3000 cow hides",
            "40-ft container", 
            "Average Weight: 8.5 kg per hide for superior resilience",
            "Dedicated Customer Support via Phone for Quick Resolutions",
            "24/7 Email Assistance for Your Convenience"
        ]
    };

    // Logic & Functions
    const onContactUsButtonClick = () => {
        navigate("/contact");
    }

    // HTML Code
    return (
        <>
            <Header/>
            <section className="homepage-centre-container">
                
                {/* Homepage Banner */}
                <article className="homepage-banner-container">
                    <img src={sampleCowHideImage} alt="cow hide"/>
                    <section className="homepage-banner-content">
                        <Text textColor="#000000" textSize="max(0.8vw, 6pt)" textWeight="bold">New Arrival</Text>
                        
                        <Text textColor="#B88E2F" textWeight="bold" textSize="max(2.6vw, 13pt)">
                            Import Premium Cowhides
                        </Text>
                        <Text textColor="#000000" textSize="max(1.1vw, 7pt)">
                            Discover top-quality cowhides crafted for export. Perfect for upholstery, décor, and leather goods.
                        </Text>
                        <button onClick={() => onContactUsButtonClick()}> 
                            <Text textColor="#FFFFFF" textSize="max(0.8vw, 6pt)" textWeight="bold"> CONTACT US </Text>
                        </button>
                    </section>
                </article>
                
                {/* Homepage Text Content */}
                <section className="homepage-content-container">
                    <Text textSize="max(1.1vw, 0.7rem)">
                        As one of the top cowhide suppliers in the country, we ensure reliable, consistent exports that 
                        uphold Mozambique's rich leather working traditions.
                    </Text>
                    <Text textSize="max(1.1vw, 0.7rem)">
                        We offer a wide variety of premium cowhides, meticulously handcrafted and ethically sourced from Mozambique's 
                        finest cattle. As one of the leading cowhide providers and distributors in the country, we take pride in delivering 
                        top-quality hides that meet international standards. Our collection boasts a range of textures, colors, and patterns, 
                        ensuring you find the perfect material for your needs, whether it's for upholstery, décor, or leather goods. By choosing 
                        our products, you support sustainable practices and exceptional craftsmanship rooted in Mozambique's rich heritage.
                    </Text>
                </section>

                <section className="homepage-banner">
                    <section className="banner-image-container">
                        <img className="banner-image" src={africaContinentIcon} alt="Africa"/>
                        <Text textColor="#000000" textSize="max(0.9vw, 8pt)" textWeight="bold"> Ethically Sourced </Text>
                    </section>
                    <section className="banner-image-container">
                        <img className="banner-image" src={letherFashionIcon} alt="Africa"/>
                        <Text textColor="#000000" textSize="max(0.9vw, 8pt)" textWeight="bold"> Professionally Tanned </Text>
                    </section>
                    <section className="banner-image-container">
                        <img className="banner-image" src={handprintIcon} alt="Africa"/>
                        <Text textColor="#000000" textSize="max(0.9vw, 8pt)" textWeight="bold"> Hand Selected </Text>
                    </section>
                </section>

                {/* Packages Section */}
                <section className="packages-section">
                    <PackageCard packageInfo={premiumPackageInfo} onClickTrigger={() => onContactUsButtonClick()}/>
                </section>

                {/* Gallary Section */}
                <section className="gallary-section">
                    <Text textColor="#616161" textSize="0.8rem" className="item title"> Genuine & Trusted </Text>
                    <Text textColor="#3A3A3A" textSize="max(14pt, 2.2vw)" textWeight="bold" className="item subtitle"> 
                        #CowHideExportation,Ltd 
                    </Text>
                    <section className="item img-1"> 
                        <img src={imageI1} alt="cow hide"/> 
                    </section>
                    <section className="item img-2"> 
                        <img src={imageI2} alt="cow hide"/> 
                    </section>
                    <section className="item img-3"> 
                        <img src={imageI6} alt="cow hide"/> 
                    </section>
                    <section className="item img-4"> 
                        <img src={imageI4} alt="cow hide"/> 
                    </section>
                    <section className="item img-5"> 
                        <img src={imageI7} alt="cow hide"/> 
                    </section>
                    <section className="item img-6"> 
                        <img src={imageI3} alt="cow hide"/> 
                    </section>
                    <section className="item img-7"> 
                        <img src={imageI8} alt="cow hide"/> 
                    </section>
                    <section className="item img-8"> 
                        <img src={imageI5} alt="cow hide"/> 
                    </section>
                </section>
            </section>
            <Footer/>
        </>
    );
}


export default Homepage;
