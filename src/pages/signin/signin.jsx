import {  Link } from "react-router-dom";
import "./sign.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const autoCheck = async ()=>{
            try {
                const res = await axios.get("https://test-server-8kf3.vercel.app/getUser", {
                    withCredentials: true
                });

                if(res.data.success) navigate("/dashboard");
                
            } catch (error) {
                 console.log("User not authenticated");
                
            }
        };
        autoCheck();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        console.log("button hit ");
        try {

            const response = await axios.post(`https://test-server-8kf3.vercel.app/login`, { email, password }, { withCredentials: true });
            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                console.log("successfully login");
                navigate("/dashboard");
            }
      



        } catch (error) {
            console.log("FULL ERROR:", error);
            console.log("SERVER ERROR:", error.response?.data);

            if (error.response) {
                alert(error.response.data.message || "Server error");
            } else {
                alert("Server not reachable");
            }
        } finally {
            setloading(false);

        }






    }


    return (
        <div className="Container-fluid justify-content-center align-items-center d-flex bg-light vh-100">
            <div className="row w-100 ">

                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center bg-primary text-white">
                    <div className="text-center px-4">
                        <h1 className="fw-bold">Welcome Back</h1>
                        <p className="lead">To keep connected with us please login with your personal info</p>

                    </div>

                </div>
                <div className="col-lg-6 col-md-8 col-sm-10 mx-auto  border-1 text-black bg-rightside  ">
                    <div className="card shadow-lg border-0 p-4">
                        <div className="card-body">
                            <h2 className="text-center mb-4 fw-bold">Login</h2>
                            <form onSubmit={handleSubmit}>
                                {/*Email*/}
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        onChange={(e) => setemail(e.target.value)} />
                                </div>
                                {/*Password*/}
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password "
                                        onChange={(e) => setpassword(e.target.value)} />
                                </div>
                                {/*Remember and forget  */}
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label">Remember me</label>

                                    </div>
                                    <a href="#" className="text-decoration-none">Fogot passward</a>
                                </div>
                                {/*Login button*/}
                                <button className="btn btn-primary w-100" type="submit" disabled={loading}
                                >{loading ? "logging in..." : "Login"}</button>

                            </form>
                            {/*Register*/}
                            <p className="text-center"> Dont have a account? <Link to="/signup" className="text-decoration-none">Sign up</Link></p>


                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}
export default Signin;