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
      img: 'https://i.ibb.co/pXsHrzc/10.png'
    },
    {
      img: "https://i.ibb.co/23KNTZW/2.png"
    },
    {
      img: "https://i.ibb.co/w0nCBLq/3.png"
    },
    {
      img: "https://i.ibb.co/jznwyTH/4.png"
    },
    {
      img: "https://i.ibb.co/Fg15YTF/5.png"
    },
    {
      img: "https://i.ibb.co/y4t0KFs/6.png"
    },
    {
      img: "https://i.ibb.co/jH1KmPn/7.png"
    },
    {
      img: "https://i.ibb.co/TmzSkSM/8.png"
    },
    {
      img: "https://i.ibb.co/tC9fbdg/9.png"
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
