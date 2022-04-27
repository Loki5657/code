import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Technician from "./Technician/technician";
import Dashboard from "./Dashboard/dashboard";
import Customer from "./Customer/customer";
import Login from "./Login/login"
import Header from "./Header/header";
import Todo from '../src/TodoList/todolist'

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
  
      <Route path="/" element={<Login />} />
       
        <Route path="/header" element={<Header />} />


        <Route path="/technician" element={<Technician />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/todo" element={<Todo />} />



      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));