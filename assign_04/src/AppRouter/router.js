import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard';



function router(){
return (
    <BrowserRouter>
      <Routes>
      
   
          <Route path="/Dashboard" element={<Dashboard />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}
export default router;