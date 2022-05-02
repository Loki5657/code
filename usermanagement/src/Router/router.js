import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrogotPassword from "../forgotPassword/forgoPassword";


 function Router() {
  return (
    <BrowserRouter>
      <Routes>
    
   
          <Route path="/forgotpassword" element={<FrogotPassword />} />
 
  
      </Routes>
    </BrowserRouter>
  );
}
export default Router;

