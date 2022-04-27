import { Outlet, Link } from "react-router-dom";

function Header(){
  return (
    <>
      <nav>
        <ul>
         
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {/* <li>
            <Link to="/">Contact</Link>
          </li> */}
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Header;