import Text from "../Text/Text";

import "./BrandPanel.css"


import trophyIcon from "../../Assets/Images/UI/Icons/trophy-svgrepo-com.svg";
import warrantyIcon from "../../Assets/Images/UI/Icons/warranty-svgrepo-com.svg";
import supportIcon from "../../Assets/Images/UI/Icons/support-svgrepo-com.svg";


const PanelItem = ({ imageSrc, altText, title, text }) => {
    return (
        <section className="panel-item-container">
            <img className="panel-item-image" src={imageSrc} alt={altText}/>
            <section className="panel-item-text-content">
                <Text textSize="1.2vw" textWeight="bold" textColor="#000000"> {title} </Text>
                <Text textSize="0.9vw" textWeight="bold"> {text} </Text>
            </section>
        </section>
    );
}


const BrandPanel = () => {
    return (
        <section className="brand-panel-container">
            <PanelItem imageSrc={trophyIcon} altText="trophy icon" title="High Quality" text="crafted from top materials"/>
            <PanelItem imageSrc={warrantyIcon} altText="warranty icon" title="Warranty Protection" text="Over 2 years"/>
            <PanelItem imageSrc={supportIcon} altText="support icon" title="24 / 7 Support" text="Dedicated support"/>
        </section>
    );
}

export default BrandPanel;
