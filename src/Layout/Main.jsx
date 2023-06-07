import { Outlet } from "react-router-dom";

import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
    // const location = useLocation();
    
    // const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            <NavBar></NavBar>
            {/* { noHeaderFooter || <NavBar></NavBar>} */}
            <Outlet></Outlet>
            {/* { noHeaderFooter || <Footer></Footer>} */}
            <Footer></Footer>
        </div>
    );
};

export default Main;