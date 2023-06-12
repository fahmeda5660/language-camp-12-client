import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";

const Payment = () => {
    const [cart] = useCart();
    console.log(cart);
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
  return (
    <div className="w-full">
      <SectionTitle
        heading={"Do"}
        heading1={"Payment"}
        subHeading={"Access your Course"}
      ></SectionTitle>
      
      <Elements stripe={stripePromise}>
                <CheckoutForm ></CheckoutForm>
        </Elements>
    </div>
  );
};

export default Payment;
