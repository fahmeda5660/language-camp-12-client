import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./PopularClasses.css";
import PopularButton from "../../../components/PopularButton/PopularButton";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { FaFacebook, FaLink, FaLinkedin, FaMailchimp, FaTwitter } from "react-icons/fa";

const PopularClasses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useAxiosSecure();
  const { data: popularClass = [] } = useQuery(["popularClass"], async () => {
    const res = await axiosSecure.get("/popularClasses");
    // console.log("popularClass",res.data);
    return res.data;
  });
  const { data: selectedClassData = [], refetch } = useQuery({
    queryKey: ['selectedClassData'],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    }
  })
  const handleAddToCart = (singleclass) => {
    if (user && user?.email) {
      const { _id, className, instructor, image, price, seats, email } = singleclass;
      const cartedClass = {
        classId: _id,
        className,
        instructor,
        email: user?.email,
        instructorEmail: email,
        image,
        price,
        seats,
      };
      fetch("https://language-camps-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to Enroll classes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

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
              <div className="card card-compact md:w-96 lg:w-96 w-full h-[600px] bg-base-100 shadow-xl image_wrapper">
                <figure className="relative">
                  <img
                    className="w-full h-72"
                    src={singlePopularClasses.image}
                    alt="Class Photo"
                  />
                  <div className="overlay overlay_5">
                    {/* <p>Learn More</p> */}
                    <a href="#" class="icon1">
                      <FaLink></FaLink>
                    </a>
                    </div>
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
                    <button disabled={isAdmin || isInstructor} onClick={() => handleAddToCart(singlePopularClasses)}>
                      <PopularButton isDisabled={selectedClassData.findIndex(obj => obj.classId === singlePopularClasses._id) >= 0 || isAdmin || isInstructor} buttonText={"Select Class"}></PopularButton>
                    </button>
                    {/* <PopularButton  buttonText={"Enroll Class"}></PopularButton> */}
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
