
const Dashboard=()=>{

    return(
        <Div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12 text-center background-light">
                    <h3 >this is header of dash </h3>
                </div>

                //secound row which conatine sidebar and main content 

                <Div className="row">
                    <div className="col-lg-3 col-mg-3 col-sm-1 ">this is sidebar</div>
                    <div className="col-lg-9 col-mg-9 col-sm-11"> 
                    <h1 className="text-center">this is for main content </h1> </div>

                </Div>

                // footer
                <div className="col-12 col-md-12 col-lg-12 text-center background-light">
                    <h3 >this is footer of dash </h3>
                </div>



            </div>
            
        </Div>

    )
}

export default Dashboard;