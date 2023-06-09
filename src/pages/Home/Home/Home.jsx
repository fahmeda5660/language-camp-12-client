import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Marqueeing from "../Marqueeing/Marqueeing";
import Parallax from "../Parallax/Parallax";
import Rocket from "../Rocket/Rocket";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>VashaShikhon | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Parallax></Parallax>
      <Rocket></Rocket>
      <Marqueeing></Marqueeing>
    </div>
  );
};

export default Home;
