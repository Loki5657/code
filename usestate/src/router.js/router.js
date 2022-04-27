import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "../calculator/calculator";


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
  
        </Routes>
      </BrowserRouter>
    );
  }