import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const EnrolledClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: payment = [] } = useQuery(["payment"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });
  console.log(payment);
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
              <th>Instructor Email</th>
              <th>Price</th>
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
            {payment?.map((singlePaymentData, index) => (
              <tr key={singlePaymentData._id}>
                <th>{index + 1}</th>
                <td>{singlePaymentData.className}</td>
                <td>{singlePaymentData.instructorName}</td>
                <td>{singlePaymentData.instructorEmail}</td>
                <td>{singlePaymentData.price}</td>
                {/* <td>{singlePaymentData.className[0]}</td>
                <td>{singlePaymentData.instructorName[0]}</td>
                <td>{singlePaymentData.price}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
