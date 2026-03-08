import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Nav from "../Header/Nav";
// import Sidebar from "../Sidebar/Sidebar";
import roomVideo from "./asstes/rooms.mp4";

// import "./dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [user, setUser] = useState(null);

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

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="spinner-border text-primary" role="status"></div>
            </div>
        );
    }

    return (
        <div className="container-fluid position-relative vh-100 overflow-hidden " style={{ opacity: 0.8 }} >
            <video autoPlay muted loop
                className="w-100 h-100 position-absolute top-0 start-0"
                style={{ objectFit: "cover", zIndex: -1 }}
            >
                <source src={roomVideo} type="video/mp4" />

            </video>
            <div className="container" >
                <div className="row w-100 fs-5 text-black m-1">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6 col-12 d-flex flex-column flex-lg-row ">
                        <div className="mx-2 "><i class="bi bi-envelope-at-fill text-black"></i> Suyapatil5800@gmail.com</div>
                        <div><i class="bi bi-phone-fill "></i> +919860915800</div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12  col-xl-6  ">hibro</div>


                </div>


            </div>



        </div>
    );
};

export default Dashboard;