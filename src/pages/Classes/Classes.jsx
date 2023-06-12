import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Classes.css"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PopularButton from "../../components/PopularButton/PopularButton";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  const { user } = useContext(AuthContext);
  // const [, refetch] useCart();
  const [axiosSecure] = useAxiosSecure();

  const navigate = useNavigate();
  const location = useLocation();

  const { data: clesses = [], refetch } = useQuery(['classes'], async () => {
      const res = await axiosSecure.get('/AllClasses')
      return res.data;
  })
  const handleAddToCart = singleclass => {
    if(user && user?.email){
      const {_id, className,instructor, image,price,seats, } = singleclass;
        const cartedClass = {classId: _id, className,instructor,email: user?.email,image,price,seats }
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartedClass)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                refetch(); // refetch cart to update the number of items in the cart
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class added on the cart.',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    else{
        Swal.fire({
            title: 'Please login to Enroll classes',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from: location}})
            }
          })
    }
}


  return (
    <div id="classInput" className="w-full px-8 pt-20 pb-10 ">
      <SectionTitle
        heading={"All"}
        heading1={"Classes"}
        subHeading={"Let's Try"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {
          clesses.map((singleclass) => 
          <div key={singleclass._id} className="md:col-span-4 lg:col-span-4 col-span-1">
          <div className="card card-compact md:w-96 lg:w-96 w-full bg-base-100 shadow-xl">
            <figure>
              <img className="w-full h-72" src={singleclass.image} alt="Class Photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Name:{singleclass.className}</h2>
              <p className="text-xl">Instructor Name:{singleclass.instructor}</p>
              <p className="text-xl">Available seats:{singleclass.seats}</p>
              <p className="text-xl">Price:{singleclass.price}</p>
              <div className="card-actions justify-end">
                <button onClick={() => handleAddToCart(singleclass)}><PopularButton buttonText={"Enroll Class"}></PopularButton></button>
                {/* <PopularButton buttonText={"Enroll Class"}></PopularButton> */}
              </div>
            </div>
          </div>
        </div>
          )
        }
        
      </div>
    </div>
  );
};

export default Classes;
