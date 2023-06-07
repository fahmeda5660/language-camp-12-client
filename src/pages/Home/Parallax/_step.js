import { FaAngleRight } from "react-icons/fa";
import parallaxImg from "../../../assets/parallax/lang.png";
import parallaxImg1 from "../../../assets/parallax/learn-language-resources.jpg";

const Parallax = () => {
  return (
    <div
      className="bg-fixed text-white my-20 bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36"
      style={{
        backgroundImage: `url(${parallaxImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
        <p className="text-white text-2xl font-semibold mt-4 text-center">Frequently asked questions</p>
      <div className="w-full h-screen md:flex lg:flex justify-center items-center gap-2">
        
        <div>
          <img className="w-11/12 h-96 rounded-lg" src={parallaxImg1} alt="" />
        </div>
        <div>
          
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                What's a typical day like at the summer camps?
              </div>
              <div className="collapse-content">
                <ul>
                  <li className="mt-[20px] flex items-center  justify-center md:justify-normal lg:justify-normal">
                    <FaAngleRight></FaAngleRight>
                    <span>07:00-08:00 Breakfast</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
                    <FaAngleRight></FaAngleRight>
                    <span>08:30-12:30 Classes (inc. Project language)</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
                    <FaAngleRight></FaAngleRight>
                    <span>12:30-13:30 Lunch</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
                    <FaAngleRight></FaAngleRight>
                    <span>14:00-18:00 Activities or excursions</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-normal lg:justify-normal">
                    <FaAngleRight></FaAngleRight>
                    <span>15:30-19:30 Free time & dinner</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Which languages can I learn during a summer camp?
              </div>
              <div className="collapse-content">
                <p>English, German, French, Chineese.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Importance of Summer Camp?
              </div>
              <div className="collapse-content">
                <ul>
                  <li>Children grow fast. </li>
                  <li>Each summer marks new milestones.</li>
                  <li> Learning new things.</li>
                  <li>Becoming more consolidated and independent human beings.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
// 