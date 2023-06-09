import PopularButton from "../../../components/PopularButton/PopularButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import classimg from "../../../assets/parallax/learn-a-new-language-flags.jpg";
import "./PopularInstructor.css"

const PopularInstructor = () => {
    return (
        <div id="popularInstructor" className="px-8 mb-20">
      <SectionTitle
        heading={"Popular"}
        heading1={"Instructors"}
        subHeading={"Most Students Choice"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4 lg:col-span-4 col-span-1">
          <div className="card card-compact md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-50" src={classimg} alt="Class Photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Name:</h2>
              <p className="text-xl">Email:</p>
              <div className="card-actions justify-end">
                {/* <button className="btnClass btn4 rounded-lg text-xl mt-2">
                  Select Class{" "}
                  <span className="ml-2">
                    <FaArrowRight></FaArrowRight>
                  </span>
                </button> */}
                <PopularButton buttonText={"See Classes"}></PopularButton>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-4 col-span-1">
          <div className="card card-compact md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-50" src={classimg} alt="Class Photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Name:</h2>
              <p className="text-xl">Email:</p>
              <div className="card-actions justify-end">
                {/* <button className="btnClass btn4 rounded-lg text-xl mt-2">
                  Select Class{" "}
                  <span className="ml-2">
                    <FaArrowRight></FaArrowRight>
                  </span>
                </button> */}
                <PopularButton buttonText={"See Classes"}></PopularButton>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 lg:col-span-4 col-span-1">
          <div className="card card-compact md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-50" src={classimg} alt="Class Photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Name:</h2>
              <p className="text-xl">Email:</p>
              <div className="card-actions justify-end">
                {/* <button className="btnClass btn4 rounded-lg text-xl mt-2">
                  Select Class{" "}
                  <span className="ml-2">
                    <FaArrowRight></FaArrowRight>
                  </span>
                </button> */}
                <PopularButton buttonText={"See Classes"}></PopularButton>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    );
};

export default PopularInstructor;