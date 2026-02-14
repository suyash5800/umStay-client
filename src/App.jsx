import Signin from "./pages/signin/signin";
import { Route, Routes  } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/Dashboard/Main_Dashboard/Dashboard";



function App() {


  return (
    <>
    <div>
       <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>

    </div>
     
  
      
        
   
    
    
      
     

     
    </>
  )
}

export default App
