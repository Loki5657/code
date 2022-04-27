import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Dashboard from "./Dashboard/dashboard";
import Home from "./Home/home";
import Layout from "./Layout/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Login />} />
        
          {/* <Route index element={<Home />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));