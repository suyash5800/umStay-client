import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import _default_1 from "antd/es/table/InternalTable";



const Signup = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [Confrimpass, setConfrimpass] = useState("");
  const [Error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setshow] = useState(false);
  const [Loading, setLoading] = useState(false);
  const [Timer, setTimer] = useState(0);
  const [IntervalId, setIntervalId] = useState(null);
  const [Emailverified , setEmailverified]=useState(false);

  const navigate = useNavigate();

  const handlesubtmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError("");

    if (Phone.length != 10) {
      setLoading(false);
      setError("Enter Your Valid Phone Number ");

      return;
    }

    if (Password !== Confrimpass) {
      setLoading(false);
      setError("Password and Confirm Password do not match!"); return;
    }

    if(!Emailverified ){
      setLoading(false);
      setError("Email not verified");
    }

    try {


      const response = await axios.post("https://test-server-8kf3.vercel.app/registor", {
        name: name,
        email: Email,
        phone: Phone,
        password: Password
      });


      if (response.status === 201 || response.status == 200) {
        alert("Signup successful! You can now log in.");
        navigate("/");
      }
      console.log(response.data);




    } catch (error) {
      setLoading(false);
      console.error("Signup error:", error);
      setError(error.response?.data?.message);

    } finally {
      setLoading(false);
    }
  }

  const handleOTP = async (e) => {

    e.preventDefault();
    setError("");
    setLoading(true);
    if (!Email) {
      setError("Enter the email ");
      return;
    }

    try {

      const response = await axios.post("https://test-server-8kf3.vercel.app/SendEmail", {
        email: Email
        //
      });


      alert("Sent OTP , Check your email");
      setLoading(false);




    } catch (error) {
      console.log("try block");
      console.error("OTP faild", error);
      setError(error.response?.data?.message);

    }
  }

  const verifyOTp = async () => {

    setError("");
    try {
      const response = await axios.post("https://test-server-8kf3.vercel.app/verifyOTP", {
        email: Email,
        code: otp
      });

      if (response.status === 200) {
        alert("Email Verified!"); 
        setshow(false);
        if (IntervalId) clearInterval(IntervalId);
        setTimer(0);
        setEmailverified(true);
      }



    } catch (error) {
      setEmailverified(false);
      console.error("OTP Faild ", error);
      setError(error.response?.data?.message);

    }
  }







  return (
    <div className="Container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
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

              <form onSubmit={handlesubtmit}>

                {/* Full Name */}
                <div className="mb-3  ">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3  ">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      required

                    />

                    <button className="btn   btn-outline-primary "
                      type="button"
                      disabled={!Email}
                      onClick={async (e) => {
                        await handleOTP(e);
                        setshow(true);
                        setTimer(120);

                        const id = setInterval(() => {
                          setTimer((prev) => {
                            if (prev <= 1) {
                              clearInterval(id);
                              return 0;
                            }
                            return prev - 1;
                          });
                        }, 1000);
                        setIntervalId(id);
                      }


                      }


                    >
                      {!Loading ? 'Verify Email' : 'Verifing Email...'}
                    </button>
                  </div>

                </div>

                {/* Phone */}
                <div className="mb-3">

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={Phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Create a password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    value={Confrimpass}
                    onChange={(e) => setConfrimpass(e.target.value)}
                    required
                  />
                </div>

                {/* Terms */}
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    I agree to the Terms & Conditions
                  </label>
                </div>

                {/* Button */}
                <button className="btn btn-primary w-100 " type="submit" disabled={Loading}>
                  {!Loading ? 'Register' : 'sumbmiting...'}
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
        {show && <div className="container-fluid h-100 d-flex verifacation-overlay justify-content-center align-items-center border rounded "
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.44)',
            zIndex:2,

          }}>
          <div className="verfication-window p-4 bg-white shadow round ">
            <h4>Verify your email</h4>
            <p>Enter the code sent to your email.</p>
            <input
              type="Number"
              className="form-control mb-3"
              placeholder="Enter the OTP "
              onChange={(e) => setOtp(e.target.value)}
            />
            <p className="text-muted">
              Time remaining: {Math.floor(Timer / 60)}:{String(Timer % 60).padStart(2, "0")}
            </p>



            <div className="d-flex gap-2">
              <button className="btn btn-outline-danger" disabled={Timer}
                onClick={(e) => {
                  handleOTP(e);
                  setTimer(120);
                  setIntervalId(id);

                }}> resend OTP</button>
              <button className=" btn  btn-primary w-100" onClick={() => { verifyOTp() }}>submit </button>
              <button className="btn  btn-outline-primary w-100" onClick={() => setshow(false)}>cancle </button>
            </div>
          </div>
        </div>}

      </div>
    </div>
  )
}

export default Signup;