import './index.css'

// import Login from './components/Login';
// import Users from './components/Users';
// import EmployeeDashboard from './components/EmployeeDashboard';

// import {Outlet} from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Outlet />
//     </>
//   )
// }

// export default App;

import React from 'react';
import './index.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;