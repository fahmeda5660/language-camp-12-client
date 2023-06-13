import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
  const { data: payments = [] } = useQuery(["payments"], async () => {
    const res = await axiosSecure.get("/payments");
    return res.data;
  });
    return (
        <div className="w-full">
      <SectionTitle
        heading={"Payment"}
        heading1={"History"}
        subHeading={"See Payment History"}
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead className=" text-white bg-[#2094f3]">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Tx Id</th>
              <th>Paid Amount</th>
              <th>Class</th>
              <th>Student Email</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
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
            {payments?.map((singlePaymentData, index) => (
              <tr key={singlePaymentData.payments}>
                <th>{index + 1}</th>
                <td>{new Date(singlePaymentData.date).toLocaleDateString('en-US')}</td>
                <td>{singlePaymentData.transactionId}</td>
                <td>{singlePaymentData.price}</td>
                <td>{singlePaymentData.className}</td>
                <td>{singlePaymentData.email}</td>
                <td>{singlePaymentData.instructorName}</td>
                <td>{singlePaymentData.instructorEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default PaymentHistory;