import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Home/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Classes";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/classes',
            element: <Classes></Classes>
        }, 
        {
            path: '/login',
            element: <Login></Login>
        }, 
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }, 
        {
            path: '/secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }, 
        
      ],
    },
    // {
    //   path:"dashboard",
    //   element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    //   children: [
    //     {
    //         path: 'userhome',
    //         element: <UserHome></UserHome>
    //     }, 
    //     {
    //         path: 'mycart',
    //         element: <MyCart></MyCart>
    //     }, 
    //     {
    //         path: 'payment',
    //         element: <Payment></Payment>
    //     }, 
    //     // Admin Route
    //     {
    //         path: 'adminhome',
    //         element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
    //     }, 
    //     {
    //         path: 'allusers',
    //         element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //     }, 
    //     {
    //         path: 'addItem',
    //         element: <AdminRoute><AddItem></AddItem></AdminRoute>
    //     }, 
    //     {
    //         path: 'manageitems',
    //         element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    //     }, 
    //   ],
    // },
  ]);