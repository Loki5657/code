import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "../customer";



 function Router(){
     return(
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customer />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
     );

 }
 export default Router;