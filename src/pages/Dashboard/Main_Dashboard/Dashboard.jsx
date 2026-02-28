import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../Header/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);

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
                console.error("Auth failed:", error.response?.data?.message);
                navigate("/");
            }
        };
        verifyUser();
    }, [navigate]);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="dashboard-wrapper bg-light min-vh-100">
            <Nav />
            
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar Column */}
                    <div className={`col-md-3 col-lg-2 d-md-block bg-white sidebar collapse ${showSidebar ? 'show' : ''}`}>
                        <Sidebar />
                    </div>

                    {/* Main Content Column */}
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            <div>
                                <h1 className="h2 fw-bold text-dark">Welcome, {user?.name || "User"}!</h1>
                                <p className="text-muted">You are logged in as {user?.email}</p>
                            </div>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <button type="button" className="btn btn-sm btn-outline-secondary me-2">Share</button>
                                <button type="button" className="btn btn-sm btn-primary">Export</button>
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                                    <div className="card-body">
                                        <h6 className="text-uppercase text-muted small fw-bold">Current Status</h6>
                                        <h3 className="fw-bold mb-0 text-success">Active</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                                    <div className="card-body">
                                        <h6 className="text-uppercase text-muted small fw-bold">Project Role</h6>
                                        <h3 className="fw-bold mb-0 text-primary">Full Stack</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                                    <div className="card-body">
                                        <h6 className="text-uppercase text-muted small fw-bold">Last Login</h6>
                                        <h3 className="fw-bold mb-0 text-dark">Today</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Feed Section */}
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                            <div className="card-header bg-white py-3 border-bottom-0">
                                <h5 className="mb-0 fw-bold">Recent System Activity</h5>
                            </div>
                            <div className="table-responsive p-3">
                                <table className="table table-hover align-middle">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Action</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Backend Deployment</td>
                                            <td><span className="badge bg-success-soft text-success">Successful</span></td>
                                            <td>Feb 27, 2026</td>
                                        </tr>
                                        <tr>
                                            <td>User Profile Updated</td>
                                            <td><span className="badge bg-primary-soft text-primary">Updated</span></td>
                                            <td>Feb 26, 2026</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;