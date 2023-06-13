import "./PopularInstructor.css";
import PopularButton from "../../../components/PopularButton/PopularButton";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

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
    <div id="popularInstructor" className="px-8 mb-20">
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
              <div className="card card-compact md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-72"
                    src={instructor.image}
                    alt="Class Photo"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Instructor Name: {instructor.instructor}
                  </h2>
                  <p className="text-xl">Class: {instructor.className}</p>
                  <p className="text-xl">Price: {instructor.price}</p>
                  <p className="text-xl">Seats: {instructor.availableSeat}</p>
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
