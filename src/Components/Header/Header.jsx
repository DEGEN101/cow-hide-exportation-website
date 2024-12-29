import "./Header.css"
import logo from "../../Assets/Images/UI/Icons/OG_Icons/logo.png";

const Header = () => {

    return (
    <>
        <section className="header-container">

            <section className="header-left">
                <img src={logo} alt="Logo" className="header-logo" />
                <h1 className="header-title">Cowhide Exportation Ltd</h1>
            </section>

        
            <nav className="header-nav">
                <a href="#home" className="nav-link">Home</a>
                <a href="#gallery" className="nav-link">Gallery</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
        </section>
    
    
    </>


    )





}

export default Header;