import { useQuery } from "@tanstack/react-query";
import PopularButton from "../../components/PopularButton/PopularButton";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// import useAuth from "../../hooks/useAuth";

const Instructor = () => {
  // const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: instructors = [] } = useQuery(["instructors"], async () => {
    const res = await axiosSecure.get("/instructor");
    console.log("instructors", res.data);
    return res.data;
  });
  return (
    <div id="popularInstructor" className="px-8 mb-20 pt-16">
      <SectionTitle
        heading={"All"}
        heading1={"Instructors"}
        subHeading={"Most Students Choice"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {instructors?.map((instructor) => (
          <div
            key={instructor._id}
            className="md:col-span-4 lg:col-span-4 col-span-1"
          >
            <div>
              <div className="card card-compact md:w-96 lg:w-96 w-full h-[500px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-56"
                    src={instructor.image}
                    alt="Class Photo"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Instructor Name: {instructor.instructor}
                  </h2>
                  <p className="text-xl">Email: {instructor.instructorEmail}</p>
                  <p className="text-xl">Class Name: {instructor.className}</p>
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

export default Instructor;
