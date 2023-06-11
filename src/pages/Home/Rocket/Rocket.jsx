import rocketImg from "../../../assets/footer/footer-rocket.svg"
const Rocket = () => {
  return (
    <div>
      <div className="md:flex lg:flex justify-center items-center gap-4 px-8">
        <p className="text-3xl font-semibold text-center">
          <span className="text-[#2094f3] font-extrabold ">Are you ready? </span>
          We are Waiting for You!
        </p>
        <button className=" w-full md:w-auto lg:w-auto mx-auto md:mx-0 lg:mx-0 px-16 py-6 text-white bg-[#2094f3] text-3xl font-semibold rounded-md mt-3 md:mt-0 lg:mt-0">
          Enroll Now
        </button>
      </div>
      <img className="mt-6" src={rocketImg} alt="" />
    </div>
  );
};

export default Rocket;
