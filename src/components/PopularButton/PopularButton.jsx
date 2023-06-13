import { FaArrowRight } from "react-icons/fa";
import "./PopularButton.css"

const PopularButton = ({buttonText, isDisabled}) => {
    return (
        <div>
           <button disabled={isDisabled} className="btnClass btn4 rounded-lg text-xl mt-2 ">{buttonText}<span className="ml-2"><FaArrowRight></FaArrowRight></span></button> 
        </div>
    );
};
// disabled:bg-slate-300
export default PopularButton;