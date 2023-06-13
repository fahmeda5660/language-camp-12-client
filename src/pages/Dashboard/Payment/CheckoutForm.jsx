import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const CheckoutForm = ({ singleSelectedData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [,refetchCart] = useCart();
  const priceDecimal = (singleSelectedData.price)
  const price = parseInt(priceDecimal);
  console.log(price);
  // console.log(user.email);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  useEffect(() => {
    // console.log(price);
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // console.log(card);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log('error', error)
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Unknown",
            email: user?.email || "Unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    // console.log("payment intent", paymentIntent);
 
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

    }
    // save payment information to the server
    // const payment = {
    //   email: user?.email,
    //   transactionId: paymentIntent.id,
    //   price,
    //   date: new Date(),
    //   quantity: cart.length,
    //   cartIds: cart.,
    //   classIds: cart.map((classes) => classes.classId),
    //   className: cart.map((classes) => classes.className),
    //   instructorName: cart.map((classes) => classes.instructor),
    //   instructorEmail: cart.map((classes) => classes.email),
    //   image: cart.map((classes) => classes.image),
    //   classPrice: cart.map((classes) => classes.price),
    //   classStatus:"class pending",
    // };
    const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      className: singleSelectedData.className,
      date: new Date(),
      _id: singleSelectedData._id,
      ClassId: singleSelectedData.classId,
      instructorEmail: singleSelectedData.email,
      instructorName: singleSelectedData.instructor,
      status: 'service pending',

  }
    // console.log(payment);
    // console.log(cart);
    axiosSecure.post('/payments', payment)
    .then(res => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          refetchCart(); 
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
    })
  };
  return (
    <>
      <form className="w-2/3 m-16" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm px-6 py-2 mt-6 bg-[#2094f3] text-white hover:text-black"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-rose-600 ml-16">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};
// cartIds: cart.map((classes) => classes._id),
//       classIds: cart.map((classes) => classes.classId),
//       className: cart.map((classes) => classes.className),
//       instructorName: cart.map((classes) => classes.instructor),
//       instructorEmail: cart.map((classes) => classes.email),
//       image: cart.map((classes) => classes.image),
//       classPrice: cart.map((classes) => classes.price),
//       classStatus:"class pending",
export default CheckoutForm;
