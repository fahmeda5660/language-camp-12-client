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
        <div className="">
          {/* <img src={img1} /> */}
          <div
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            className="w-full h-screen flex justify-center items-center"
          >
            <div>
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
      </div>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            className="w-full h-screen flex justify-center items-center"
          >
            <div>
              <p className=" text-white px-[25%] font-bold text-xl md:text-7xl lg:text-7xl">
                LANGUAGE CAMPS
              </p>
              <p className=" text-white  px-[25%] font-bold text-xs md:text-2xl lg:text-2xl">
                Make this summer exciting, enriching and productive for your
                kids, with our Summer Courses in Speaking
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            className="w-full h-screen flex justify-center items-center"
          >
            <div>
              <p className=" text-white px-[25%] font-bold text-xl md:text-7xl lg:text-7xl">
                LANGUAGE CAMPS
              </p>
              <p className=" text-white  px-[25%] font-bold text-xs md:text-2xl lg:text-2xl">
                Research shows that people who are multilingual may be better at
                processing language and other analytical tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <div
            style={{
              backgroundImage: `url(${img4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
            className="w-full h-screen flex justify-center items-center"
          >
            <div>
              <p className=" text-white px-[25%] font-bold text-xl md:text-7xl lg:text-7xl">
                LANGUAGE CAMPS
              </p>
              <p className=" text-white  px-[25%] font-bold text-xs md:text-2xl lg:text-2xl">
                Language is one of the most important instruments of preserving
                heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
