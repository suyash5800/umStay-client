import { useNavigate } from "react-router-dom";
import umlogo from "/src/assets/FullLogo_Transparent_NoBuffer.png";
import "./Nav.css";

const Nav = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
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
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
            <div className="collapse navbar-collapse" id="navbarContent">

                {/* Left Links */}
                <ul className="navbar-nav ">
                    <li className="nav-item"><a className="nav-link">Home</a></li>
                    <li className="nav-item"><a className="nav-link">Rooms</a></li>
                    <li className="nav-item"><a className="nav-link">Article</a></li>
                    <li className="nav-item"><a className="nav-link">ContactUs</a></li>
                    <li className="nav-item"><a className="nav-link">AboutUs</a></li>
                </ul>

                <div className="logout-container  ">
                    <button className="btn  logout" onClick={logout}>
                        Logout
                    </button>
                </div>




            </div>

        </nav>
    );
};

export default Nav;