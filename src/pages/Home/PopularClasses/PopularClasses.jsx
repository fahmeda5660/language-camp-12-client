import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import classimg from "../../../assets/parallax/learn-a-new-language-flags.jpg";
import "./PopularClasses.css";
import PopularButton from "../../../components/PopularButton/PopularButton";
const PopularClasses = () => {
  return (
    <div id="popularClass" className="px-8 mb-20">
      <SectionTitle
        heading={"Popular"}
        heading1={"Classes"}
        subHeading={"Student Enrolled Most"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4 lg:col-span-4 col-span-1">
          <div className="card card-compact md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-50" src={classimg} alt="Class Photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Name:</h2>
              <p className="text-xl">Instructor Name:</p>
              <p className="text-xl">Available seats:</p>
              <p className="text-xl">Price:</p>
              <div className="card-actions justify-end">
                {/* <button className="btnClass btn4 rounded-lg text-xl mt-2">
                  Select Class{" "}
                  <span className="ml-2">
                    <FaArrowRight></FaArrowRight>
                  </span>
                </button> */}
                <PopularButton buttonText={"Select Class"}></PopularButton>
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
              <p className="text-xl">Instructor Name:</p>
              <p className="text-xl">Available seats:</p>
              <p className="text-xl">Price:</p>
              <div className="card-actions justify-end">
               <PopularButton buttonText={"Select Class"}></PopularButton>
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
              <p className="text-xl">Instructor Name:</p>
              <p className="text-xl">Available seats:</p>
              <p className="text-xl">Price:</p>
              <div className="card-actions justify-end">
                {/* <button className="btnClass btn4 rounded-lg text-xl mt-2">Select Class <span className="ml-2"><FaArrowRight></FaArrowRight></span></button> */}
                <PopularButton buttonText={"Select Class"}></PopularButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
