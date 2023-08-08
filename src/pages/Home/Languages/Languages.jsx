import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import { useEffect, useState } from "react";

import c1 from "../../../assets/country/ch.jpg"
import c2 from "../../../assets/country/che.jpg"
import c3 from "../../../assets/country/eng.jpg"
import c4 from "../../../assets/country/it.jpg"
import c5 from "../../../assets/country/ja.jpg"
import c6 from "../../../assets/country/por.jpg"
import c7 from "../../../assets/country/sp.jpg"
import c8 from "../../../assets/country/de.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Languages = () => {
    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-eta-self.vercel.app/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

    return (
        <div className="container mx-auto p-8 mt-[-40px] bg-[#6eb8f5]">
            <p className="text-white mb-2 text-xl text-center font-['Great_Vibes']"> _____Choose Language_____</p>
            <Marquee className="text-danger" speed={100}>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c1}
                            alt="Shoes"
                            className="min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c2}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c3}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c4}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c5}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c6}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c7}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c8}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c1}
                            alt="Shoes"
                            className="min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c2}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c3}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c4}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c5}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c6}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c7}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
                <div className="card w-24">
                    <figure className="px-3 py-2 ">
                        <img
                            src={c8}
                            alt="Shoes"
                            className=" min-h-[50%] w-24"
                        />
                    </figure>
                </div>
            </Marquee>
        </div>
    );
};

export default Languages;