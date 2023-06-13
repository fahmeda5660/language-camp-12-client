import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import SignupCover from "../../assets/footer/signin.png";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [pwMismatch, setPwMismatch] = useState(false);
  // const [disabled, setDisabled] = useState(true);
  const { createUser, profileUpdate, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    if (data?.password !== data?.retypePassword) {
      setPwMismatch(true);
      return;
    } else {
      setPwMismatch(false);
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      //   console.log(data.name, data.photoURL);

      profileUpdate(data.name, data.photoURL)
        .then(() => {
          setUser({
            ...loggedUser,
            displayName: data.name,
            photoURL: data.photoURL,
          });
          // console.log("User updated");
          const saveUser = {
            name: data.name,
            email: data.email,
            image: data.photoURL,
            role: "student",
          };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User login successful.",
                  showConfirmButton: false,
                  timer: 1500,
                });

                // Display the updated name
                // console.log("Updated name:", data.name);
                navigate("/");
              }
            });
          // reset();
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "User login successful.",
          //   showConfirmButton: false,
          //   timer: 1500,
          // });

          // // Display the updated name
          // // console.log("Updated name:", data.name);
          // navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>VashaShikhon | Sign Up</title>
      </Helmet>
      <div className="bg-gradient-to-r from-blue-200 pt-16">
      <img src={SignupCover} className="w-full h-48" alt="" />
        <div className="container text-center pb-20">
          <div className="border max-w-lg mx-auto pt-9 pb-12 px-12 shadow-lg bg-white">
            <h1 className="text-black text-4xl font-bold mb-9">
              Please Register Here
            </h1>
            <form
              className="grid grid-cols-1 mt-5 space-y-3 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                className="input input-bordered rounded-none w-full"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-rose-600">
                  Please enter your full name
                </span>
              )}
              <input
                type="email"
                className="input input-bordered rounded-none w-full"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <span className="text-rose-600">
                  Please enter a valid email
                </span>
              )}
              <input
                type="password"
                className="input input-bordered rounded-none w-full"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase and Special Character
                </p>
              )}

              {errors.password && (
                <span className="text-rose-600">
                  Please retype your password
                </span>
              )}
              <input
                type="password"
                className="input input-bordered rounded-none w-full"
                placeholder="Retype Your Password"
                {...register("retypePassword", { required: true })}
              />
              {pwMismatch ? (
                <p className="text-rose-600">Password mismatch</p>
              ) : (
                ""
              )}
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered rounded-none w-full"
              />
              {errors.photoURL && (
                <span className="text-rose-600">Photo URL is required</span>
              )}
              <input
                disabled={false}
                className="hover:cursor-pointer bg-primary text-white font-semibold py-2"
                type="submit"
                value="Register"
              />
            </form>
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="hover:cursor-pointer hover:underline text-blue-800 mt-3 inline-block"
              >
                Please Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
