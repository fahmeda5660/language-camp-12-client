import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
// import { useEffect } from "react";
// import { useState } from "react";
// import useAuth from "../../../hooks/useAuth";

const SelectedClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [, refetchCart] = useCart();
  // const [, , refetch] = useClass();

  const { data: selectedClass = [],refetch } = useQuery(["selectedClass"], async () => {
    const res = await axiosSecure.get(`/carts?email=${user?.email}`);
    // console.log("selectedClass",res.data);
    return res.data;
  });
  const handleDelete = (singleSelectedData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${singleSelectedData._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            refetchCart();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  // const {user} = useAuth();
  // const [selectedClass, setselectedClass] = useState([]);

  // useEffect(() => {
  //     fetch(`http://localhost:5000/carts?email=${user?.email}`, {
  //         headers: {Authorizaton: `Barer ${localStorage.getItem("access-token")}`}
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //             console.log("hocche",data);
  //             setselectedClass(data);
  //         });
  //         console.log("kisu ashe");
  // }, []);
  return (
    <div className="w-full">
      <SectionTitle
        heading={"Selected"}
        heading1={"Class"}
        subHeading={"My Class"}
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead className=" text-white bg-[#2094f3]">
            <tr>
              <th>#</th>
              <th>Classes Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                <th>index</th>
                <td>image</td>
                <td></td>
                <td>Instructor name</td>
                <td>price</td>
                <td>pay</td>
                <td>Action</td>
              </tr> */}
            {selectedClass?.map((singleSelectedData, index) => (
              <tr key={singleSelectedData._id}>
                <th>{index + 1}</th>
                <td>{singleSelectedData.className}</td>
                <td>{singleSelectedData.instructor}</td>
                <td>{singleSelectedData.price}</td>
                <td>
                  <Link to="/dashboard/payment" state={{price: singleSelectedData.price}}>
                    <button className="btn btn-xs bg-[#2094f3] text-white hover:text-black">
                      Pay
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(singleSelectedData)}
                    className="btn btn-xs bg-[#2094f3] text-white hover:text-black"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
