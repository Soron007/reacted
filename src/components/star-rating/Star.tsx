import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

type Props = {
  noOfStars: number;
};

const Star = ({ noOfStars }: Props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex: number) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex: number) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? "filled-star" : "unfilled-star"
            }
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={20}
          />
        );
      })}
    </div>
  );
};

export default Star;
