import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import useCart from "../../../hooks/useCart";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  // console.log(cart);
  
  const location = useLocation();
  const priceDecimal = location.state?.price;
  const price = parseInt(priceDecimal);
  console.log(price);
  return (
    <div className="w-full">
      <SectionTitle
        heading={"Do"}
        heading1={"Payment"}
        subHeading={"Access your Course"}
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} cart={cart}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
