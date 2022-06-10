import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usersdata from "../components/user";
import Adduser from "../components/addUser";
import Get from "../components/get";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/users" element={<Usersdata />} />
        <Route path="/users/adduser" element={<Adduser />} />
        <Route path="/get" element={<Get />} />

        




      </Routes>
    </BrowserRouter>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));