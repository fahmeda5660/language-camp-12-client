import "./PopularInstructor.css";
import PopularButton from "../../../components/PopularButton/PopularButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaFacebook, FaLinkedin, FaMailchimp, FaTwitter } from "react-icons/fa";

const PopularInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: popularInstructors = [] } = useQuery(
    ["popularInstructors"],
    async () => {
      const res = await axiosSecure.get("/popularInstructor");
      console.log("popularInstructors", res.data);
      return res.data;
    }
  );
  return (
    <div id="popularInstructor" className="container mx-auto px-8 mb-20">
      <SectionTitle
        heading={"Popular"}
        heading1={"Instructors"}
        subHeading={"Most Students Choice"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {popularInstructors?.map((instructor) => (
          <div
            key={instructor._id}
            className="md:col-span-4 lg:col-span-4 col-span-1"
          >
            <div>
              <div className="card card-compact md:w-96 lg:w-96 w-full h-[600px] bg-base-100 shadow-xl image_wrapper">
                <figure className="relative">
                  <img
                    className="w-full h-56"
                    src={instructor.image}
                    alt="Class Photo"
                  />
                  <div className="overlay_3 overlay_4">
                    <div className="flex justify-center items-center gap-4">
                    <a href="#" class="icon">
                      <FaFacebook></FaFacebook>
                    </a>
                    <a href="#" class="icon">
                      <FaTwitter></FaTwitter>
                    </a>
                    <a href="#" class="icon">
                      <FaLinkedin></FaLinkedin>
                    </a>
                    </div>
                    </div>
                </figure>
                <div className="card-body break-words">
                  <h2 className="card-title text-2xl">
                    Instructor Name: {instructor.instructor}
                  </h2>
                  <p className="text-xl ">Instructor Email: {instructor.instructorEmail}</p>
                  <p className="text-xl">Class: {instructor.className}</p>
                  <div className="card-actions justify-end">
                    <PopularButton buttonText={"See Classes"}></PopularButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
