import { FaArrowRight } from "react-icons/fa";
import "./PopularButton.css"

const PopularButton = () => {
    return (
        <div>
           <button className="btnClass btn4 rounded-lg text-xl mt-2">Select Class <span className="ml-2"><FaArrowRight></FaArrowRight></span></button> 
        </div>
    );
};

export default PopularButton;