import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/banner/1.png";
import img2 from "../../../assets/banner/2.png";
import img3 from "../../../assets/banner/3.png";
import img4 from "../../../assets/banner/4.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <div className="relative">
          <img src={img1} />
          <div className="absolute inset-0 inset-y-[35%]">
            <p className=" text-white px-[25%] font-bold text-xl md:text-7xl lg:text-7xl">
              LANGUAGE CAMPS
            </p>
            <p className=" text-white  px-[25%] font-bold text-xs md:text-2xl lg:text-2xl">
              Fast, effective language learning for kids in a fun-packed
              environment.
            </p>
          </div>
        </div>
      </div>
      <div>
      <div className="relative">
          <img src={img2} />
          <div className="absolute inset-0 inset-y-[35%]">
            <p className=" text-white px-[25%] font-bold text-xl md:text-7xl lg:text-7xl">
              LANGUAGE CAMPS
            </p>
            <p className=" text-white  px-[25%] font-bold text-xs md:text-2xl lg:text-2xl">
            Builds listening, speaking, reading and writing skills
            </p>
          </div>
        </div>
      </div>
      <div>
      <div className="relative">
          <img src={img3} />
          <div className="absolute inset-0 inset-y-[35%]">
            <p className=" text-white px-[25%] font-bold text-xl md:text-7xl lg:text-7xl">
              LANGUAGE CAMPS
            </p>
            <p className=" text-white  px-[25%] font-bold text-xs md:text-2xl lg:text-2xl">
            Gives confidence in using a language in real life situations
            </p>
          </div>
        </div>
      </div>
      <div>
      <div className="relative">
          <img src={img4} />
          <div className="absolute inset-0 inset-y-[35%]">
            <p className=" text-white px-[25%] font-bold text-xl md:text-7xl lg:text-7xl">
              LANGUAGE CAMPS
            </p>
            <p className=" text-white  px-[25%] font-bold text-xs md:text-2xl lg:text-2xl">
            Learning a foreign language is good for kids and good for the world
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
