
const ManageClasses = () => {
    return (
        <div className="w-full">
      <p>Total classs:{classs.length}</p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead className=" text-white bg-[#2094f3]">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classs.map((class, index) => (
              <tr key={class._id}>
                <th>{index + 1}</th>
                <td>{class.name}</td>
                <td>{class.email}</td>
                <td>
                  {class.role === "instructor" ? (
                    "Instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(class)}
                      className="btn btn-ghost bg-[#2094f3] text-white"
                    >
                      <FaclassShield></FaclassShield>
                    </button>
                  )}
                </td>
                <td>
                  {class.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(class)}
                      className="btn btn-ghost bg-[#2094f3] text-white"
                    >
                      <FaclassShield></FaclassShield>
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-ghost bg-[#2094f3]  text-white">
                    <FaTrashAlt></FaTrashAlt>
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

export default ManageClasses;