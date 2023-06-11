import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
const AddClasses = () => {
    const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { className, price, instructor, seats} = data;
          const newClass = {
            className,
            price: parseFloat(price),
            instructor,
            seats,
            image: imgURL,
            status: "pending"
          };
          console.log(newClass);
          axiosSecure.post("/class", newClass).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              // reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div id="classInput" className="w-full px-8 pt-20 pb-10 -mt-16">
      <SectionTitle
        heading={"Add"}
        heading1={"Class"}
        subHeading={"Instructor Job"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex lg:flex gap-4">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Class Name <span className="text-xl text-info">*</span>
              </span>
            </label>
            <input
              type="text"
              defaultValue="English 101"
              placeholder="Class Name"
              {...register("className", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">
                Upload Class Photo<span className="text-xl text-info">*</span>
              </span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered file-input-info w-full rounded-none"
            />
          </div>
        </div>
        <div className="md:flex lg:flex gap-4">
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor Name<span className="text-xl text-info">*</span>
              </span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              placeholder="Instructor Name"
              {...register("instructor", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor Email <span className="text-xl text-info">*</span>
              </span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="Instructor Email"
              {...register("email", { required: true, maxLength: 120 })}
              className="input input-bordered w-full "
            />
          </div>
        </div>

        <div className="md:flex lg:flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                Price<span className="text-xl text-info">*</span>
              </span>
            </label>
            <input
              type="number"
              defaultValue="1001"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">
                Available Seats<span className="text-xl text-info">*</span>
              </span>
            </label>
            <input
              type="number"
              defaultValue="101"
              {...register("seats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>

        {/* <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Upload Class Photo<span className="text-xl text-info">*</span></span>
          </label>
          <input
            type="file" 
            {...register("image", { required: true })}
            className="file-input file-input-bordered file-input-warning w-full rounded-none"
          />
        </div> */}
        <div className="flex justify-center">
          <input
            className="btn btn-xl mt-4 w-[20%] rounded-none hover:bg-info bg-info text-white hover:text-black"
            type="submit"
            value="Add Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClasses;
