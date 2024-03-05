// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.jsx'
// import './index.css'

// import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
// import Login from "./components/Login.jsx";
// import EmployeeDashboard from './components/EmployeeDashboard.jsx';
// import Users from "./components/Users.jsx";
// // import ReactDOM from 'react-dom';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<EmployeeDashboard />}>
//       <Route path="/dashboard" element={<EmployeeDashboard />} />
//       <Route path="/users" element={<Users />} />
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import App from './App.jsx';
import Login from "./components/Login.jsx";
import EmployeeDashboard from './components/EmployeeDashboard.jsx';
import Users from "./components/Users.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Login />} />
      <Route path="/dashboard" element={<EmployeeDashboard />} />
      <Route path="/users" element={<Users />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);