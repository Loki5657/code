import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technician from "./Technician/technician";
import Dashboard from "./Dashboard/dashboard";
import Customer from "./Customer/customer";
import Login from "./Login/login"
import Header from "./Header/header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/header" element={<Header />} />


        <Route path="/technician" element={<Technician />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />


      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));