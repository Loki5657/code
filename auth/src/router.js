import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Components/dashboard";
import Login from "./Components/login_page";
import Users from "./Components/users";
import Private_router from "./private_router";
import Public_router from "./public_router";


const Route_page=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace='/login' />} />
        <Route path="*" element={<Navigate replace='/login' />} />
        <Route path='/login' element={<Login/>} />

        
        <Route path="/users" element={<Private_router> <Users /></Private_router>} />
        <Route path="/dashboard" element={<Private_router> <Dashboard /></Private_router>} />




        {/* <Route path="/login" element={ <Public_router><Login /></Public_router>} /> */}




        {/* <Route path="/users" element={ <Users />} /> */}
        <Route path="/private" element={<Private_router/> } />
        <Route path="/public" element={<Public_router/> } />
        {/* <Route path="/dashboard" element={<Dashboard/> } /> */}

        


     

   



       


      </Routes>
    </BrowserRouter>
  );
}
export default Route_page;

// ReactDOM.render(<App />, document.getElementById("root"));