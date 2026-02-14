import Nav from "../Header/Nav";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{

    const navigate = useNavigate();
    useEffect(()=>{
        const token=localStorage.getItem("token");
        if(!token){
            navigate("/");
            return null;
            
        }
    },[])
    

    return(
        <div className="container-fluid">
            <div className="row">
                <Nav/>
           
                </div>

               { /*secound row which conatine sidebar and main content */}

                <div className="row ">
                   <Sidebar/>
                    <div className="col-lg-9 col-mg-9 col-sm-11"> 
                    <h1 className="text-center">this is for main content </h1>
                     </div>

                </div>

                {/* footer */}
                <div className="col-12 col-md-12 col-lg-12 text-center background-light">
                    <h3 >this is footer of dash </h3>
                </div>



             
            
        </div>

    )
}

export default Dashboard;