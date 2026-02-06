import Signin from "./signin/signin";
import { Route, Routes  } from "react-router-dom";
import Signup from "./signup/Signup";


function App() {


  return (
    <>
    <div>
       <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/" element={<Signin/>}></Route>
      </Routes>

    </div>
     
  
      
        
   
    
    
      
     

     
    </>
  )
}

export default App
