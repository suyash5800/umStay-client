import Nav from "../Header/Nav";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [user, setUser] = useState(null);


    useEffect(() => {
        const verifyUser = async () => {
            try {

                const token = localStorage.getItem("token");

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
                alert("catch block activte");
                navigate("/");
            }
        };
        verifyUser();
    }, [navigate]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="spinner-border text-primary" role="status">5800000000</div>
            </div>
        );
    }

    return (
        <div className="dashboard-layout bg-light min-vh-100">
            {/* 1. Mobile Overlay: Tapping this closes the sidebar */}
            {showSidebar && (
                <div
                    className="sidebar-overlay d-lg-none"
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}

            {/* 2. Top Navigation Bar */}
            <header className="navbar-top bg-white shadow-sm sticky-top">
                <div className="container-fluid d-flex align-items-center py-2 px-3">
                    <button
                        className="btn btn-outline-primary d-lg-none me-2"
                        onClick={() => setShowSidebar(true)}
                    >
                        ☰
                    </button>
                    <div className="flex-grow-1">
                        <Nav />
                    </div>
                </div>
            </header>

            <div className="d-flex">
                {/* 3. Sidebar: Slides in from left on mobile */}
                <aside className={`sidebar-aside ${showSidebar ? "show" : ""}`}>
                    {/* Close Button inside Sidebar (Mobile only) */}
                    <div className="d-flex justify-content-between align-items-center d-lg-none p-3 border-bottom">
                        <span className="fw-bold">Menu</span>
                        <button
                            className="btn-close"
                            onClick={() => setShowSidebar(false)}
                        ></button>
                    </div>

                    <div className="sidebar-inner-content">
                        <Sidebar />
                    </div>
                </aside>

                {/* 4. Main Dashboard Content */}
                <main className="main-viewport flex-grow-1 p-3 p-md-4">
                    <div className="container-fluid">
                        <div className="row mb-4">
                            <div className="col">
                                <h3 className="fw-bold text-dark">Welcome Back, Suyash!</h3>
                                <p className="text-muted">Here is what's happening today.</p>
                            </div>
                        </div>

                        {/* Responsive Info Cards */}
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card border-0 shadow-sm p-3 rounded-4 bg-primary text-white">
                                    <small className="opacity-75">Total Users</small>
                                    <h2 className="mb-0 fw-bold">128</h2>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card border-0 shadow-sm p-3 rounded-4 bg-success text-white">
                                    <small className="opacity-75">Monthly Revenue</small>
                                    <h2 className="mb-0 fw-bold">₹25,000</h2>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card border-0 shadow-sm p-3 rounded-4 bg-dark text-white">
                                    <small className="opacity-75">Active Projects</small>
                                    <h2 className="mb-0 fw-bold">12</h2>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity Table/List */}
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="card border-0 shadow-sm rounded-4">
                                    <div className="card-body p-0">
                                        <div className="p-3 border-bottom d-flex justify-content-between">
                                            <h5 className="mb-0 fw-bold">Recent Updates</h5>
                                            <button className="btn btn-sm btn-link text-primary p-0 text-decoration-none">Refresh</button>
                                        </div>
                                        <div className="activity-list">
                                            {[1, 2, 3].map((item) => (
                                                <div key={item} className="p-3 border-bottom d-flex align-items-center">
                                                    <div className="rounded-circle bg-light p-2 me-3">📁</div>
                                                    <div>
                                                        <p className="mb-0 small fw-bold">New deployment to Render</p>
                                                        <small className="text-muted">Success • 15 mins ago</small>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;