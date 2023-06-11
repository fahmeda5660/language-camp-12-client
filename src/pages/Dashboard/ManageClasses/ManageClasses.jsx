import useClass from "../../../hooks/useClass";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
// import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
  const [classes] = useClass();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const handleApprove = (id) => {
    axios.patch(`http://localhost:5000/classes/admin/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        // refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${id.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDelete = (singleClass) => {
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
        axiosSecure.delete(`/class/${singleClass._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="w-full">
      <SectionTitle
        heading={"Add"}
        heading1={"Class"}
        subHeading={"Instructor Job"}
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead className=" text-white bg-[#2094f3]">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Available Seats</th>
              <th>Status</th>
              <th>Action</th>
              <th>Remove</th>
              <th>Instructor Email</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={singleClass.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
                <td>{singleClass.className}</td>
                <td>{singleClass.instructor}</td>
                <td>{singleClass.seats}</td>
                <td>{singleClass.status}</td>
                <td>
                  <div className=" text-[#2094f3] text-xl">
                    {user.role === "admin" ? (
                      "Approved"
                    ) : (
                      <button
                      disabled={singleClass.status == "approved" ||singleClass.status == "rejected"}
                        onClick={() => handleApprove(singleClass._id)}
                        className="btn btn-xs bg-[#2094f3] text-white hover:text-black"
                      >
                        Approve
                      </button>
                    )}

                    <button
                    disabled={singleClass.status == "approved" ||singleClass.status == "rejected"}
                      onClick={() => handleDelete(singleClass)}
                      className="btn btn-xs bg-[#2094f3] text-white hover:text-black"
                    >
                      Deny
                    </button>
                    
                    <button className="btn btn-xs bg-[#2094f3] text-white hover:text-black">
                      feedback
                    </button>
                  </div>
                </td>
                <td><button
                      onClick={() => handleDelete(singleClass)}
                      className="btn btn-xs bg-[#2094f3] text-white hover:text-black"
                    >
                      Delete
                    </button></td>
                <td>{singleClass.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;