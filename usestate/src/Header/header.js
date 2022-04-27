// import { Outlet, Link } from "react-router-dom";
import React from "react";


function header() {
  return (
    // <>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/technician">Technician</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">dashboard</Link>
    //       </li>
    //       <li>
    //         <Link to="/customer">Customer</Link>
    //       </li>

    //     </ul>
    //   </nav>

    //   <Outlet />
    // </>
    <React.Fragment>

      <div>
        <a href="/technician">Technician</a>
      </div>
      <div>
        <a href="/dashboard">Dashboard</a>

      </div>
      <div>
    <a href="/customer">Customer</a>

      </div>
      <div>
    <a href="/todo">To Do List</a>

      </div>


    </React.Fragment>

  )
};

export default header;