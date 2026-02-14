import { Link } from "react-router-dom";
import "./sign.css";

const Signin = () => {

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
                        <card className="card-body">
                            <h2 className="text-center mb-4 fw-bold">Login</h2>
                            <form>
                                {/*Email*/}
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                {/*Password*/}
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter your password " />
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
                                <button className="btn btn-primary w-100">login</button>

                            </form>
                            {/*Register*/}
                            <p className="text-center"> Dont have a account? <Link to="/signup" className="text-decoration-none">Sign up</Link></p>
                            <Link to="/dashboard" className="text-decoration-none">Go to Dashboard</Link>

                        </card>
                    </div>

                </div>
            </div>


        </div>
    );
}
export default Signin;