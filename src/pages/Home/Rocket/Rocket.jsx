import rocketImg from "../../../assets/footer/footer-rocket.svg"
const Rocket = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4">
        <p className="text-3xl font-semibold">
          <span className="text-purple-500 font-extrabold">Are you ready? </span>
          We are Waiting for You!
        </p>
        <button className="px-16 py-6 text-white bg-purple-500 text-3xl font-semibold rounded-md mt-3 md:mt-0 lg:mt-0">
          Enroll Now
        </button>
      </div>
      <img src={rocketImg} alt="" />
    </div>
  );
};

export default Rocket;
