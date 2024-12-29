
import "./Text.css"

const Text = ({ textColor = "#9F9F9F", textSize = "10pt", textWeight="regular", className="", children }) => {
    return (
        <section className={className}>
            <p className="text-styling" style={{ color: textColor, fontSize: textSize, fontWeight: textWeight}}>
                {children}
            </p>
        </section>
    );
}

export default Text;
