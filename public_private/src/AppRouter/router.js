import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/login";
import PrivateRoute from "../Components/private/private_routes";
import Dashboard from "../Components/dashboard";
import Googlelogin from "../Googlelogin";
import PublicRoute from '../Components/public/public_routes'
import Profile from "../Components/profile";
import Login_app from "../Components/login2";



export default function Router() {
 const token= localStorage.getItem('token')

    return (
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Login />} />  
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/dashboard/:id" element={<PrivateRoute><Profile/></PrivateRoute>} />
       

          <Route path="/google" element={<Googlelogin />} />
        



        </Routes>
      </BrowserRouter>
    );
  }
 