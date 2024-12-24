
import "./Subheading.css"

const Subheading = ({ children }) => {
    return (
        <>
            <p className="subheading-content"> {children} </p>
        </>
    );
}

export default Subheading;
