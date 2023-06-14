import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PopularButton from "../../components/PopularButton/PopularButton";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
 const {user} = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const navigate = useNavigate();
  const location = useLocation();

  const { data: clesses = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/AllClasses");
    // console.log("allclaasesres",res.data);
    return res.data;
  });
  const { data: selectedClassData = [] } = useQuery(
    ["selectedClassData"],
    async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      
      return res.data;
    }
  );
  // console.log("selectedClassData",selectedClassData);

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
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            // refetch(); // refetch cart to update the number of items in the cart
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
    <div id="classInput" className="w-full px-8 pt-20 pb-10 ">
      <SectionTitle
        heading={"All"}
        heading1={"Classes"}
        subHeading={"Let's Try"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {clesses.map((singleclass) => (
          <div
            key={singleclass._id}
            className="md:col-span-4 lg:col-span-4 col-span-1"
          >
            <div className={`card card-compact md:w-96 lg:w-96 w-full h-[600px] shadow-xl ${!singleclass.enrolled && "bg-red-100"}`}>
              <figure>
                <img
                  className="w-full h-72"
                  src={singleclass.image}
                  alt="Class Photo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  Name:{singleclass.className}
                </h2>
                <p className="text-xl">
                  Instructor Name:{singleclass.instructor}
                </p>
                <p className="text-xl">Total Students:{singleclass?.enrolled}</p>
                <p className="text-xl">Available seats:{singleclass.availableSeat}</p>
                <p className="text-xl">Price:{singleclass.price}</p>
                <div className="card-actions justify-end">
                  {
                    <button disabled={isAdmin || isInstructor} onClick={() => handleAddToCart(singleclass)}>
                    <PopularButton isDisabled={ selectedClassData.findIndex(obj => obj.classId===singleclass._id)>=0|| isAdmin || isInstructor} buttonText={"Select Class"}></PopularButton>
                  </button>
                  }
                  {/* <PopularButton buttonText={"Enroll Class"}></PopularButton> */}
                  {/* selectedClassData.findIndex(obj => obj.classId===singleclass._id)>=0|| */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
