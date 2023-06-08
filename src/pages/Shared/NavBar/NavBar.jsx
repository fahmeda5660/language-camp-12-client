
import { Link } from "react-router-dom";
import ActiveLink from "../../../ActiveLink/ActiveLink";


const NavBar = () => {
    // const { user, logOut } = useContext(AuthContext);


    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.log(error));
    // }

    const navOptions = <>
        <li><ActiveLink to="/">Home</ActiveLink></li>
        <li><ActiveLink to="/menu">Instructors</ActiveLink></li>
        <li><ActiveLink to="/order/salad">Classes</ActiveLink></li>
        <li><ActiveLink to="/order/salad">Dashboard</ActiveLink></li>
        <li><ActiveLink to="/order/salad">User profile</ActiveLink></li>
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Vasha ShikhonGhor</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to="/signup">
                <button>Sign Up</button>
              </Link>
                </div>
            </div>
        </>
    );
};

export default NavBar;