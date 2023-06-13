import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./PopularClasses.css";
import PopularButton from "../../../components/PopularButton/PopularButton";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: popularClass = [] } = useQuery(["popularClass"], async () => {
    const res = await axiosSecure.get("/popularClasses");
    // console.log("popularClass",res.data);
    return res.data;
  });
  return (
    <div id="popularClass" className="px-8 mb-20">
      <SectionTitle
        heading={"Popular"}
        heading1={"Classes"}
        subHeading={"Student Enrolled Most"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/*  <div className="md:col-span-4 lg:col-span-4 col-span-1">
          <div className="card card-compact md:w-96 lg:w-96 w-full h-[500px] bg-base-100 shadow-xl">
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
        </div> */}
        {popularClass?.map((singlePopularClasses) => (
          <div
            key={singlePopularClasses._id}
            className="md:col-span-4 lg:col-span-4 col-span-1"
          >
            <div>
              <div className="card card-compact md:w-96 lg:w-96 w-full h-[600px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-full h-72"
                    src={singlePopularClasses.image}
                    alt="Class Photo"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    Name: {singlePopularClasses.className}
                  </h2>
                  <p className="text-xl">
                    Instructor Name: {singlePopularClasses.instructor}
                  </p>
                  <p className="text-xl">
                    Total Enrolled: {singlePopularClasses.enrolled}
                  </p>
                  <p className="text-xl">
                    Available seats: {singlePopularClasses.availableSeat}
                  </p>
                  <p className="text-xl">Price: {singlePopularClasses.price}</p>
                  <div className="card-actions justify-end">
                    <PopularButton buttonText={"Enroll Class"}></PopularButton>
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

export default PopularClasses;
