import  { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Nav from "../Header/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";

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
        <div className="container-fluid bg-danger">
            <h1>hello
                
            </h1>
        </div>
    );
};

export default Dashboard;