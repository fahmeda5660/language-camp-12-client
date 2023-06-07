import logo from "../../../assets/banner/Jumping-kids.png";
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebookSquare,
  FaFan,
  FaInstagramSquare,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className=" py-[50px] text-white bg-black"
    >
      <div className="container mx-auto px-8 divide-y divide-[#dcdade3d]">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-5 pb-12">
          <ul className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
            <div className="md:flex gap-2  items-center">
              <img
                src={logo}
                className="w-16 h-16 logoFooter mx-auto md:mx-0 lg:mx-0"
                alt=""
              />
              <li className="text-white text-2xl font-semibold">VashaShikhonGhor</li>
            </div>
            <li className="mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal">
              <FaPhoneAlt className=""></FaPhoneAlt>
              <span className="ml-2">888-401-4678</span>
            </li>
            <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
              <FaMapMarkedAlt></FaMapMarkedAlt>
              <span className="ml-2">2155 Rhode Island Avenue, Washington</span>
            </li>
            <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
              <FaEnvelope></FaEnvelope>
              <span className="ml-2">Vasha@ShikhonGhor@gmail.com</span>
            </li>
            <div className="text-white flex  md:justify-start lg:justify-start justify-center gap-3 mt-[26px] text-center">
                        <FaFacebookSquare className="icon-size "></FaFacebookSquare>
                        <FaInstagramSquare className="icon-size"></FaInstagramSquare>
                        <FaTwitterSquare className="icon-size"></FaTwitterSquare>
                        <FaYoutubeSquare className="icon-size"></FaYoutubeSquare>
                        </div>
          </ul>
          <ul className="md:col-span-2 lg:col-span-2 col-span-1 md:text-left lg:text-left text-center">
            <li className="footerTitle">Courses</li>
            <li className="mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal">
              <FaFan className=""></FaFan>
              <span className="ml-2">English</span>
            </li>
            <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
              <FaFan></FaFan>
              <span className="ml-2">French</span>
            </li>
            <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
              <FaFan></FaFan>
              <span className="ml-2">German</span>
            </li>
            
          </ul>
          <ul className="md:col-span-2 lg:col-span-2 col-span-1 md:text-left lg:text-left text-center">
            <li className="footerTitle">Partners</li>
            <li className="mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal">
              <FaFan className=""></FaFan>
              <span className="ml-2">Studying English</span>
            </li>
            <li className=" flex items-center  justify-center md:justify-normal lg:justify-normal">
              <FaFan className=""></FaFan>
              <span className="ml-2">French BD</span>
            </li>
            <li className=" flex items-center  justify-center md:justify-normal lg:justify-normal">
              <FaFan className=""></FaFan>
              <span className="ml-2">Association of German</span>
            </li>
            
          </ul>
          <div className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
            <ul className="md:text-left lg:text-left text-center">
              <li className="footerTitle">About Vasha Shikhon Ghor</li>
              <li className="mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal">
                <FaAngleRight></FaAngleRight>
                <span>Our Misson & Vision</span>
              </li>
              <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
                <FaAngleRight></FaAngleRight>
                <span>Terms and Conditions</span>
              </li>
              <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
                <FaAngleRight></FaAngleRight>
                <span>Ensuring Security</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="mt-4">
            @2023 <span className="font-bold">VashaShikhonGhor</span>. All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
