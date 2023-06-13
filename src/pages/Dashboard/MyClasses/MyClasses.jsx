import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [] } = useQuery(["myClasses"], async () => {
    const res = await axiosSecure.get(`/myClass/${user?.email}`);
    console.log(res.data);
    return res.data;
  });
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
              <th>Status</th>
              
              <th>Feedback</th>
              <th>Total Enrollment</th>
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
            {myClasses?.map((SignleMyClasses, index) => (
              <tr key={SignleMyClasses._id}>
                <th>{index + 1}</th>
                <td>{SignleMyClasses.className}</td>
                <td>{SignleMyClasses.instructor}</td>
                <td>{SignleMyClasses.status}</td>
                <td>{SignleMyClasses.feedback}</td>
                <td></td>
                <td>
                  <button className="btn btn-xs bg-[#2094f3] text-white hover:text-black">
                    Update
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

export default MyClasses;
