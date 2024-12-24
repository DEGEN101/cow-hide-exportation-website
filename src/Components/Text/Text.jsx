
import "./Text.css"

const Text = ({ textColor = "#9F9F9F", textSize = "10pt", textWeight="regular", children }) => {
    return (
        <p className="text-styling" style={{ color: textColor, fontSize: textSize, fontWeight: textWeight}}>
            {children}
        </p>
    );
}

export default Text;
