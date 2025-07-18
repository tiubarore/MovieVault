import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

type StarRatingProps = {
  initialRating: number;
  onRatingChange: (newRating: number) => void;
};

export default function StarRating({
  initialRating,
  onRatingChange,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div
      className="flex items-center gap-1 p-2"
      onMouseLeave={() => setHoverRating(0)}
    >
      {stars.map((starNumber) => (
        <FontAwesomeIcon
          key={starNumber}
          icon={
            hoverRating >= starNumber || initialRating >= starNumber
              ? fasStar
              : farStar
          }
          className={`cursor-pointer text-lg transition-all duration-200 hover:scale-125 ${
            hoverRating >= starNumber || initialRating >= starNumber
              ? "text-yellow-400 drop-shadow-lg"
              : "text-gray-500 hover:text-yellow-300"
          }`}
          onMouseEnter={() => setHoverRating(starNumber)}
          onClick={() => onRatingChange(starNumber)}
        />
      ))}
    </div>
  );
}
