import Text from "../Text/Text.jsx"

import "./TitleCard.css";

import logo from "../../Assets/Images/UI/logo.png";
import titleCardImage from "../../Assets/Images/UI/title-card-image.jpg";

const TitleCard = ({title, subtitle}) => {
    return (
        <section className="title-card-container">
            <section className="image-container">
                <img src={titleCardImage} alt="Cow Hide"/>
            </section>
            <section className="content-container">
                <img src={logo} alt="Logo"/>
                <h1> {title} </h1>
                <Text textColor="#000000"> <b> Home {">"} </b> {subtitle} </Text>
            </section>
        </section>
    );
}

export default TitleCard;
