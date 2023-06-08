import Marquee from "react-fast-marquee";
import marqueeImg1 from "../../../assets/bottom-slider/a1_v2.svg"
import marqueeImg2 from "../../../assets/bottom-slider/a2_v2.svg"
import marqueeImg3 from "../../../assets/bottom-slider/a3_v2.svg"
import marqueeImg4 from "../../../assets/bottom-slider/a4_v2.svg"
import marqueeImg5 from "../../../assets/bottom-slider/a5_v2.svg"
import marqueeImg6 from "../../../assets/bottom-slider/a6_v2.svg"
import marqueeImg7 from "../../../assets/bottom-slider/a7_v2.svg"
import marqueeImg8 from "../../../assets/bottom-slider/a8_v2.svg"
const Marqueeing = () => {
    return (
        <div className='container my-8 px-8'>
            <Marquee className='text-danger' speed={100}>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg1} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg2} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg3} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg4} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg5} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg6} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg7} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                <div className="card w-56">
                    <figure className="px-4 pt-4">
                        <img src={marqueeImg8} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                </div>
                
            </Marquee>
        </div>
    );
};

export default Marqueeing;