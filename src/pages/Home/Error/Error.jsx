import bgImg from "../../../assets/error/404.svg";
import { motion } from "framer-motion";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const { error } = useRouteError();
  return (
    <section
      className="flex items-center h-screen p-16  text-gray-900"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* <div><img src={errorImg} alt="" /></div> */}
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-black font-extrabold text-[64px]"
      >
        Oops!
      </motion.div>
        <div className="max-w-md text-center">
          {/* <img src={errorImg} alt="" /> */}
          <p className="text-2xl font-semibold md:text-3xl text-red-600 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn bg-black text-white hover:bg-slate-600">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
