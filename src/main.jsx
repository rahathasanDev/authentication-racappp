import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Header.jsx';
import Login from './Components/Login.jsx';

import Friends from './Components/Friends.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/friends',
        element: <Friends></Friends>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App></App>
  </React.StrictMode>,
)
