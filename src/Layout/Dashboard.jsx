import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaCartPlus,
  FaMedrt,
  FaCcStripe,
  FaUserEdit,
  FaEdit,
} from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  //TODO Load data from the server to have dynamic
  //   const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-gradient-to-r from-cyan-500 to-blue-500  text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard">
                  <FaHome></FaHome>Admin Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUserEdit></FaUserEdit> Manage Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageclasses">
                  <FaCalendarAlt></FaCalendarAlt> Manage Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {isInstructor ? (
                <>
                  <li>
                    <NavLink to="/dashboard/">
                      <FaHome></FaHome>Instructor Dashboard
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/addclasses">
                      <FaEdit></FaEdit> Add Classes
                      {/* <div className="badge badge-secondary">+{cart?.length || 0}</div> */}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myClass">
                      <FaCalendarAlt></FaCalendarAlt> My Classes
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard">
                      <FaHome></FaHome>Student Dashboard
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/selectedclasses">
                      <FaCartPlus></FaCartPlus> Selected Classes
                      <div className="badge badge-secondary">
                        +{cart?.length || 0}
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/enrolledclass">
                      <FaMedrt></FaMedrt> Enrolled Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageuser">
                      <FaCcStripe></FaCcStripe> Payment History
                    </NavLink>
                  </li>
                </>
              )}
            </>
          )}
          <div className="divider border-white"></div>
          <li>
            <NavLink to="/"> Home</NavLink>{" "}
          </li>
          <li>
            <NavLink to="/classes"> Classes</NavLink>
          </li>
          <li>
            <NavLink to="/instructor">Instructor</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
