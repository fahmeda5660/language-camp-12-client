import { FaCcStripe, FaTrash } from "react-icons/fa";
import img from "../../../assets/parallax/lang.png"
const MyCart = () => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead className=" text-white bg-[#2094f3]">
            <tr>
              <th>#</th>
              <th>Image </th>
              <th>Name</th>
              <th>Price</th>
              <th>Instructor</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <div className="avatar">
                  <div className="mask rounded-lg w-12 h-12">
                    <img
                      src={img}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>Zemlak</td>
              <td>200</td>
              <td>Daniel</td>
              <td>
                <div className="flex gap-3">
                <FaTrash className="text-xl text-[#2094f3]"></FaTrash>
                <FaCcStripe className="text-2xl text-[#2094f3]"></FaCcStripe>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
