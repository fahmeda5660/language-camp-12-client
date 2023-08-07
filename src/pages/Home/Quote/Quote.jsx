import logo from "../../../assets/banner/Jumping-kids.png";
import { FaEnvelope, FaHeadset, FaUserPlus,  } from "react-icons/fa";
const Quote = () => {
  return (
    <div
      className="py-8 mt-[-40px] text-white bg-[#2094f3]"
    >
      <div className="container mx-auto px-8 divide-y divide-[#dcdade3d]">
        <div className="grid grid-cols-1 md:grid-cols-9 justify-items-center gap-5 ">
          <div className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
          
              <p className="flex items-center  justify-center md:justify-normal lg:justify-normal"><FaEnvelope className="text-5xl"></FaEnvelope></p>
              <h2 className="text-[#fff199] text-3xl py-2">Get Quote</h2>
              <p text-white>Find the price of your ideal course</p>
          
          </div>
          <div className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
          <p className="flex items-center  justify-center md:justify-normal lg:justify-normal"><FaHeadset className="text-5xl"></FaHeadset></p>
          
              <h2 className="text-[#fff199] text-3xl py-2">Ask a Question</h2>
              <p text-white>Not sure what you need? Ask our Advisors</p>
          
          </div>
          <div className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
          <p className="flex items-center  justify-center md:justify-normal lg:justify-normal"><FaUserPlus className="text-5xl"></FaUserPlus></p>
          
              <h2 className="text-[#fff199] text-3xl py-2">Join Today</h2>
              <p text-white>Sing Up Now for a Free 30 Day Trial</p>
          
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Quote;
