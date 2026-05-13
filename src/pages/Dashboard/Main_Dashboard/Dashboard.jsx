import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Nav";
// import Sidebar from "../Sidebar/Sidebar";
import roomVideo from "./asstes/rooms.mp4";  // TODO: Add rooms.mp4 file to asstes folder


import "./dashboard.css";


const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [user, setUser] = useState(null);
    const [index, setIndex] = useState(0);
    const texts = [
        "Welcome to UM Stay",
        "Find Your Perfect Room",
        "Comfort Like Home"
    ];

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const token = localStorage.getItem("token");

                // Fetching from your Vercel backend using Bearer Token
                const response = await axios.get(
                    "https://test-server-8kf3.vercel.app/getUser",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                if (response.data.success) {
                    setUser(response.data.user);
                    setLoading(false);
                }
            } catch (error) {
                console.log("Session expired or invalid token");
                setLoading(false);
                navigate("/");
            }
        };
        verifyUser();
    }, [navigate]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        );
    }

    return (<>
        <div className="container-fluid m-font position-relative vh-100 overflow-hidden p-0 m-0"  >
            <video autoPlay muted loop playsInline
                className="bcvideo start-0"
                style={{ objectFit: "cover", zIndex: -2 }}
            >
                <source src={roomVideo} type="video/mp4" />

            </video>
            <div className="cusbackground" ></div>
            <div className="container-fluid position-relative top-0 text-white vh-100  " style={{ zIndex: 1 }} >
                {/* <div className="row w-100 fs-5 text-white m-1 z-5 justify-content-between d-none d-md-flex ">
                    <div className="col-xl-6  col-lg-6 col-md-8 col-sm-12  col-12 d-flex flex-column flex-md-row flex-lg-row ">
                        <div className="me-3"><i className="bi bi-envelope-at-fill "></i> Suyapatil5800@gmail.com</div>
                        <div><i className="bi bi-phone-fill "></i> +919860915800</div>
                    </div>
                    <div className=" col-xl-2  col-lg-5 col-md-4 col-sm-12 col-12 justify-content-between  ">
                        <i className="bi mx-3 bi-facebook"></i>
                        <i className="bi mx-3 bi-instagram"></i>
                        <i className="bi mx-3 bi-twitter-x"></i>
                        <i className="bi mx-3 bi-google"></i>
                    </div>


                </div> */}

                <div className="banner-container">
                    <h1 className="banner-text" key={index}>{texts[index]}</h1>
                </div>

                <div className="row nav-row"> <Nav /></div>
            </div>
            <div className="container">
                <findrombox />
            </div>

        </div>

    </>
    );
};

export default Dashboard;