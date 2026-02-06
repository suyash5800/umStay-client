
import "./sign.css";
const Signin=()=>{

    return(
    <div className="Container-fluid justify-content-center align-items-center d-flex bg-light vh-100"> 
     <div className="row w-75 h-75 ">
        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center bg-primary text-white"> 
            <h1 className="text-center">Welcome Back</h1>
            <p className="text-center">To keep connected with us please login with your personal info</p>
            
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
                            <label  className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password " />
                        </div>
                    </form>
                </card>
            </div>
            
        </div>
     </div>
       

    </div>
    );
}
export default Signin;