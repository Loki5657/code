import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
         
          <Route path="/home" element={<Home />} />
          
        
      
      </Routes>
    </BrowserRouter>
  );
}