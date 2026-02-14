import Nav from "../Header/Nav";
import "./dashboard.css";

const Dashboard=()=>{

    console.log("this is dashboard page");

    return(
        <div className="container-fluid">
            <div className="row">
                <Nav/>
           
                </div>

               { /*secound row which conatine sidebar and main content */}

                <div className="row ">
                    <div className="col-lg-3 col-mg-3 col-sm-1 ">this is sidebar</div>
                    <div className="col-lg-9 col-mg-9 col-sm-11"> 
                    <h1 className="text-center">this is for main content </h1> </div>

                </div>

                {/* footer */}
                <div className="col-12 col-md-12 col-lg-12 text-center background-light">
                    <h3 >this is footer of dash </h3>
                </div>



             
            
        </div>

    )
}

export default Dashboard;