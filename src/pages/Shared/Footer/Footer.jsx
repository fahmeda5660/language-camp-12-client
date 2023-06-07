import logo from "../../../assets/banner/Jumping-kids.png"
import footer from "../../../assets/footer/foot.png"
import {  FaAngleRight, FaEnvelope, FaFacebookSquare, FaInstagramSquare, FaMapMarkedAlt,  FaPhoneAlt, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-purple-700 py-[50px] text-white' style={{ backgroundImage: `url(${footer})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%" }}>
            <div className='container mx-auto divide-y divide-[#dcdade3d]'>
                <div className='grid grid-cols-1 md:grid-cols-6 gap-5 pb-12'>
                    <ul className='md:col-span-2 col-span-1 md:text-left lg:text-left text-center'>
                        <img src={logo} className="w-16 h-16 logoFooter mx-auto md:mx-0 lg:mx-0" alt="" />
                        <li className='my-3 leading-6'><i>The #1 app for parents who want to fuel their childrens curiosity, boost academic skills & build a lifelong love of learning. Try it free for 7 days!
</i></li>
                    </ul>
                    <ul className='md:col-span-2 lg:col-span-2 col-span-1 md:text-left lg:text-left text-center'>
                        <li className='footerTitle'>Contact Us</li>
                        <li className='mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal'><FaPhoneAlt className=""></FaPhoneAlt><span className="ml-2">888-401-4678</span></li>
                        <li className='flex items-center justify-center md:justify-normal lg:justify-normal'><FaMapMarkedAlt></FaMapMarkedAlt><span className="ml-2">2155 Rhode Island Avenue, Washington</span></li>
                        <li className='flex items-center justify-center md:justify-normal lg:justify-normal'><FaEnvelope></FaEnvelope><span className="ml-2">curious@worls@gmail.com</span></li>
                    </ul>
                    <div className='md:col-span-2 lg:col-span-2 col-span-1 md:text-left lg:text-left text-center'>
                    <ul className='md:text-left lg:text-left text-center'>
                        <li className='footerTitle'>Need Help?</li>
                        <li className='mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal'><FaAngleRight></FaAngleRight><span>Customer Service</span></li>
                        <li className='flex items-center justify-center md:justify-normal lg:justify-normal'><FaAngleRight></FaAngleRight><span>Replacement Opportunities</span></li>
                        <li className='flex items-center justify-center md:justify-normal lg:justify-normal'><FaAngleRight></FaAngleRight><span>
Mon-Fri 8:30AM - 4:30PM CST</span></li>
                    </ul>
                    </div>

                </div>

                <div className='text-center'>
                    <p className='mt-4'>@2023 <span className="font-bold">VashaShikhonGhor</span>. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;