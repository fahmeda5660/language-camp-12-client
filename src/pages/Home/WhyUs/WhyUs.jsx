import logo from "../../../assets/banner/Jumping-kids.png";
import { FaEnvelope, FaHeadset, FaUserPlus, } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './WhyUs.css'
const WhyUs = () => {
    return (
        <div className="py-8 mt-4 text-white ">
            <SectionTitle
        heading={"Reach"}
        heading1={"Us"}
        subHeading={"Students Query"}
      ></SectionTitle>
            <div className="container mx-auto px-8 divide-y divide-[#dcdade3d]">
                <div className="grid grid-cols-1 md:grid-cols-9 justify-items-center gap-5 mb-2">
                    <div className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
                        <div className="flex items-center justify-center">
                            <p className="bounce-p flex items-center justify-center bg-[#f2f2f2] hover:bg-[#2094f3] text-[#2094f3] hover:text-white   h-24 w-24 rounded-full"><FaEnvelope className="text-5xl "></FaEnvelope></p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-black text-3xl py-2">Get Quote</h2>
                            <p className="text-[#969696]">Find the price of your ideal course</p>
                        </div>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
                        <div className="flex items-center justify-center">
                            <p className=" bounce-p flex items-center justify-center bg-[#f2f2f2] hover:bg-[#2094f3] text-[#2094f3] hover:text-white   h-24 w-24 rounded-full"><FaUserPlus className="text-5xl"></FaUserPlus></p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-black text-3xl py-2">Join Today</h2>
                            <p className="text-[#969696]">Sing Up Now for a Free 30 Day Trial</p>
                        </div>
                    </div>
                    <div className="md:col-span-3 lg:col-span-3 col-span-1 md:text-left lg:text-left text-center">
                        <div className="flex items-center justify-center">
                            <p className="bounce-p flex items-center justify-center bg-[#f2f2f2] hover:bg-[#2094f3] text-[#2094f3] hover:text-white   h-24 w-24 rounded-full"><FaHeadset className="text-5xl "></FaHeadset></p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-black text-3xl py-2">Ask a Question</h2>
                            <p className="text-[#969696]">Not sure what you need? Ask our Advisors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;
