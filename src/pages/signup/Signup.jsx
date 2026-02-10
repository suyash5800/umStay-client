import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate }  from "react-router-dom";



const Signup=()=>{
 const[Name, setName]=useState("");
 const[Email, setEmail]=useState("");
 const[Phone, setPhone]=useState("");
 const[Password, setPassword]=useState("");
 const [Confrimpass ,setConfrimpass]=useState(""); 
 const [Error, setError]=useState("");

 const navigate = useNavigate();

 const handlesubtmit=async (e)=>{
  e.preventDefault();

  if(Password !== Confrimpass){alert("Password and Confirm Password do not match!"); return;}

  try {
   

   const response = await axios.post("https://unstay-server-3.onrender.com/users", {
    name: Name,
    email: Email,
    password: Password,
     phone: Phone
});


       if (response.status === 201) {
                alert("Signup successful! You can now log in.");
                 navigate("/");
            }
    console.log(response.data);
   


    
  } catch (error) {
     console.error("Signup error:", error);
     setError(error.response?.data?.error || "Signup failed");
    
  }
 }
 

 




    return(
       <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="row w-100">

        {/* LEFT SIDE */}
        <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center bg-primary text-white">
          <div className="text-center px-4">
            <h1 className="fw-bold">Join UmStay</h1>
            <p className="lead">
              Find roommates, share spaces, and make living easier.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 col-md-8 col-sm-10 mx-auto">
          <div className="card shadow-lg border-0 p-4">
            <div className="card-body">

              <h2 className="text-center mb-4 fw-bold">
                Create Account
              </h2>

              <form  onSubmit={handlesubtmit}>

                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={Name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={Email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={Phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={Password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    value={Confrimpass}
                    onChange={(e)=>setConfrimpass(e.target.value)}
                    required
                  />
                </div>

                {/* Terms */}
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox"/>
                  <label className="form-check-label">
                    I agree to the Terms & Conditions
                  </label>
                </div>

                {/* Button */}
                <button className="btn btn-primary w-100">
                  Register
                </button>
                {Error && <p className="text-danger mt-2">{Error}</p>}

              </form>

              {/* Login Redirect */}
              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/" className="text-decoration-none">
                  Login
                </Link>
              </p>

            </div>
          </div>
        </div>

      </div>
    </div>
    )
}

export default Signup;