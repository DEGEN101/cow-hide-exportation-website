import Text from "../Text/Text.jsx"

import "./TitleCard.css";

import logo from "../../Assets/Images/UI/Icons/OG_Icons/logo.png";
import titleCardImage from "../../Assets/Images/UI/Icons/OG_Icons/hide2.jpg";

const TitleCard = ({title, subtitle}) => {
    return (
        <section className="title-card-container">
            <section className="image-container">
                <img src={titleCardImage} alt="Cow Hide"/>
            </section>
            <section className="content-container">
                <img src={logo} alt="Logo"/>
                <h1> {title} </h1>
                <Text textColor="#000000" textSize="9pt"> <b> Home {">"} </b> {subtitle} </Text>
            </section>
        </section>
    );
}

export default TitleCard;
