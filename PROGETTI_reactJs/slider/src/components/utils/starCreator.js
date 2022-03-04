import { BsStar, BsStarHalf, BsStarFill } from "react-icons";

const starCreator = (num) => {
  return Array.from({ length: 5 }, (_, index) => {
    if (num > index + 1) {
      return (
        <BsStarFill key={index} className="star" fill="#fca903"></BsStarFill>
      );
    }
  });
};
export default starCreator;
