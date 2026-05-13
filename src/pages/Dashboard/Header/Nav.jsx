import { useState } from "react";
import { useNavigate } from "react-router-dom";
import umlogo from "/src/assets/FullLogo_Transparent_NoBuffer.png";
import "./Nav.css";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-4 cusBorder">

            {/* Logo */}
            <a className="navbar-brand" href="#">
                <img src={umlogo} height="50" alt="logo" />
            </a>

            {/* Mobile Toggle */}
            <button
                className="navbar-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div className={`navbar-collapse ${isOpen ? 'show' : 'collapse'}`}>

                {/* Left Links */}
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" onClick={handleLinkClick}>Home</a></li>
                    <li className="nav-item"><a className="nav-link" onClick={handleLinkClick}>Rooms</a></li>
                    <li className="nav-item"><a className="nav-link" onClick={handleLinkClick}>Article</a></li>
                    <li className="nav-item"><a className="nav-link" onClick={handleLinkClick}>ContactUs</a></li>
                    <li className="nav-item"><a className="nav-link" onClick={handleLinkClick}>AboutUs</a></li>
                </ul>

                <div className="logout-container">
                    <button className="btn logout" onClick={() => { logout(); setIsOpen(false); }}>
                        Logout
                    </button>
                </div>

            </div>

        </nav>
    );
};

export default Nav;