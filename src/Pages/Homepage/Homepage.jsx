// Import Components
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


const Homepage = () => {
    // Variables
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

    // HTML Code
    return (
        <>
            <h1>Homepage</h1>
            <section className="homepage-centre-container">
                
                {/* Homepage Banner */}
                <article className="homepage-banner-container">
                    <img src={sampleCowHideImage} alt="cow hide"/>
                    <section className="homepage-banner-content">
                        <Text textColor="#000000" textSize="0.8vw" textWeight="bold">New Arrival</Text>
                        
                        <Text textColor="#B88E2F" textWeight="bold" textSize="2.6vw">
                            Import Premium Cowhides
                        </Text>
                        <Text textColor="#000000" textSize="1.1vw">
                            Discover top-quality cowhides crafted for export. Perfect for upholstery, décor, and leather goods.
                        </Text>
                        <button onClick={null}> 
                            <Text textColor="#FFFFFF" textSize="0.8vw" textWeight="bold"> CONTACT US </Text>
                        </button>
                    </section>
                </article>
                
                {/* Homepage Text Content */}
                <section className="homepage-content-container">
                    <Text>
                        As one of the top cowhide suppliers in the country, we ensure reliable, consistent exports that 
                        uphold Mozambique's rich leather working traditions.
                    </Text>
                    <Text>
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
                        <Text textColor="#000000" textSize="0.9vw" textWeight="bold"> Ethically Sourced </Text>
                    </section>
                    <section className="banner-image-container">
                        <img className="banner-image" src={letherFashionIcon} alt="Africa"/>
                        <Text textColor="#000000" textSize="0.9vw" textWeight="bold"> Professionally Tanned </Text>
                    </section>
                    <section className="banner-image-container">
                        <img className="banner-image" src={handprintIcon} alt="Africa"/>
                        <Text textColor="#000000" textSize="0.9vw" textWeight="bold"> Hand Selected </Text>
                    </section>
                </section>

                {/* Packages Section */}
                <section className="packages-section">
                    <PackageCard packageInfo={premiumPackageInfo}/>
                </section>
            </section>
            <Footer/>
        </>
    );
}


export default Homepage;
