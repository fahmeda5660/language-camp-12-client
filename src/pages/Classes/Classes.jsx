import { useForm } from "react-hook-form";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Classes.css"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PopularButton from "../../components/PopularButton/PopularButton";

const Classes = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: clesses = [], refetch } = useQuery(['classes'], async () => {
      const res = await axiosSecure.get('/AllClasses')
      return res.data;
  })
  return (
    <div id="classInput" className="w-full px-8 pt-20 pb-10 ">
      <SectionTitle
        heading={"All"}
        heading1={"Classes"}
        subHeading={"Let's Try"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {
          clesses.map((singleclass, index) => 
          <div className="md:col-span-4 lg:col-span-4 col-span-1">
          <div className="card card-compact md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-50" src={singleclass.image} alt="Class Photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Name:{singleclass.className}</h2>
              <p className="text-xl">Instructor Name:{singleclass.instructor}</p>
              <p className="text-xl">Available seats:{singleclass.seats}</p>
              <p className="text-xl">Price:{singleclass.price}</p>
              <div className="card-actions justify-end">
                {/* <button className="btnClass btn4 rounded-lg text-xl mt-2">
                  Select Class{" "}
                  <span className="ml-2">
                    <FaArrowRight></FaArrowRight>
                  </span>
                </button> */}
                <PopularButton buttonText={"Enroll Class"}></PopularButton>
              </div>
            </div>
          </div>
        </div>
          )
        }
        
        
      </div>
    </div>
  );
};

export default Classes;
