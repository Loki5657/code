import { Outlet, Link } from "react-router-dom";

function Layout(){
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;