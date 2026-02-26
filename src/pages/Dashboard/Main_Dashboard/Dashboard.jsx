import Nav from "../Header/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
        } else {
            setLoading(false);
        }
    }, [navigate]);

    if (loading) {
        return <h3 className="text-center mt-5">Loading...</h3>;
    }

    return (
        <div className="container-fluid dashboard-container">

            {/* Navbar */}
            <div className="row shadow-sm align-items-center">
                <div className="col-2 d-lg-none">
                    <button 
                        className="btn btn-outline-dark ms-2"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        ☰
                    </button>
                </div>
                <div className="col">
                    <Nav />
                </div>
            </div>

            {/* Layout */}
            <div className="row mt-3">

                {/* Sidebar */}
                <div className={`col-lg-3 col-md-4 sidebar-mobile ${showSidebar ? "show" : ""}`}>
                    <Sidebar />
                </div>

                {/* Main Content */}
                <div className="col-lg-9 col-md-8 col-12">
                    <div className="p-3 p-md-4 bg-white rounded shadow-sm">

                        <h4 className="mb-3">Dashboard</h4>

                        {/* Cards */}
                        <div className="row g-3">

                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card p-3 shadow-sm">
                                    <h6>Total Users</h6>
                                    <h4>120</h4>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card p-3 shadow-sm">
                                    <h6>Revenue</h6>
                                    <h4>₹25,000</h4>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4">
                                <div className="card p-3 shadow-sm">
                                    <h6>Active</h6>
                                    <h4>45</h4>
                                </div>
                            </div>

                        </div>

                        {/* Activity */}
                        <div className="mt-4">
                            <h5>Recent Activity</h5>
                            <ul className="list-group mt-2">
                                <li className="list-group-item">User logged in</li>
                                <li className="list-group-item">New signup</li>
                                <li className="list-group-item">Order placed</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="row mt-3">
                <div className="col text-center py-2 bg-light small">
                    © 2026 Dashboard
                </div>
            </div>

        </div>
    );
};

export default Dashboard;