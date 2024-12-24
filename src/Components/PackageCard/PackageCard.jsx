import Text from "../Text/Text";

import "./PackageCard.css";


import checkCircleIcon from "../../Assets/Images/UI/Icons/check-circle-svgrepo-com.svg";


const PackageCardItem = ({ text }) => {
    return (
        <section className="package-card-item-container">
            <img className="package-card-item-image" src={checkCircleIcon} alt="check circle icon"/>
            <Text textSize="0.9vw" textColor="#000000"> {text} </Text>
        </section>
    );
}


const PackageCard = ({ packageInfo, onClick }) => {
    return (
        <section className="package-card-container">
            <section className="title-section">
                <Text textSize="1.3vw" textWeight="bold" textColor="#000000"> {packageInfo.TITLE} </Text>
                <Text textSize="0.5vw" textColor="#000000"> -{packageInfo.SUBTITLE}- </Text>
            </section>
            
            <section className="content-section">
                {packageInfo.CONTENT.map((item) => <PackageCardItem text={item}/>)}
            </section>
            
            <button className="package-card-button" onClick={onClick}> 
                <Text textSize="0.6vw" textWeight="bold" textColor="#000000"> Request Invoice </Text> 
            </button>
        
        </section>
    );
}

export default PackageCard;
