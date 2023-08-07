import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Marqueeing from "../Marqueeing/Marqueeing";
import Parallax from "../Parallax/Parallax";
import Rocket from "../Rocket/Rocket";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Gallery from "../Gallery/Gallery";
import Quote from "../Quote/Quote";
import WhyUs from "../WhyUs/WhyUs";
import Languages from "../Languages/Languages";

const Home = () => {
  const galleryImages = [
    {
      img: 'https://i.ibb.co/s6v9g9h/10.png'
    },
    {
      img: "https://i.ibb.co/M8jBHGh/2.png"
    },
    {
      img: "https://i.ibb.co/Qd0xGzb/3.png"
    },
    {
      img: "https://i.ibb.co/rpT6FK9/4.png"
    },
    {
      img: "https://i.ibb.co/bgMYX7r/5.png"
    },
    {
      img: "https://i.ibb.co/rbk2HBK/6.png"
    },
    {
      img: "https://i.ibb.co/hWKxXNb/7.png"
    },
    {
      img: "https://i.ibb.co/JHXGr5J/8.png"
    },
    {
      img: "https://i.ibb.co/jhby4dd/9.png"
    }
  ]
  return (
    <div>
      <Helmet>
        <title>VashaShikhon | Home</title>
      </Helmet>
      <Banner></Banner>
      {/* <Quote></Quote> */}
      <Languages></Languages>
      <WhyUs></WhyUs>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Gallery galleryImages={galleryImages}></Gallery>
      <Parallax></Parallax>
      <Rocket></Rocket>
      <Marqueeing></Marqueeing>
    </div>
  );
};

export default Home;
