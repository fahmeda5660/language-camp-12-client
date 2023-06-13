import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Home/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";

import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClasses from "../pages/Dashboard/AddClasses/AddClasses";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import SelectedClasses from "../pages/Dashboard/SelectedClasses/SelectedClasses";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import Instructor from "../pages/Instructor/Instructor";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import StudentHome from "../pages/Dashboard/StudentHome/StudentHome";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addclasses",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "manageclasses",
        element: <ManageClasses></ManageClasses>,
      },
      // Instructor
      {
        path: "selectedclasses",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "instructorhome",
        element: <InstructorHome></InstructorHome>,
      },
      // Student
      {
        path: "myClass",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "studenthome",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClass></EnrolledClass>,
      },
    ],
  },
]);
