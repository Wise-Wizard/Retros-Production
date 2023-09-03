import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutline from "@mui/icons-material/StarBorderOutlined";

function Rating(props) {
  return (
    <>
      <div className="rating">
        <span>
          <i>
            {props.value >= 1 ? (
              <StarIcon />
            ) : props.value >= 0.5 ? (
              <StarHalfIcon />
            ) : (
              <StarOutline />
            )}
          </i>
        </span>
        <span>
          <i>
            {props.value >= 2 ? (
              <StarIcon />
            ) : props.value >= 1.5 ? (
              <StarHalfIcon />
            ) : (
              <StarOutline />
            )}
          </i>
        </span>
        <span>
          <i>
            {props.value >= 3 ? (
              <StarIcon />
            ) : props.value >= 2.5 ? (
              <StarHalfIcon />
            ) : (
              <StarOutline />
            )}
          </i>
        </span>
        <span>
          <i>
            {props.value >= 4 ? (
              <StarIcon />
            ) : props.value >= 3.5 ? (
              <StarHalfIcon />
            ) : (
              <StarOutline />
            )}
          </i>
        </span>
        <span>
          <i>
            {props.value >= 5 ? (
              <StarIcon />
            ) : props.value >= 4.5 ? (
              <StarHalfIcon />
            ) : (
              <StarOutline />
            )}
          </i>
        </span>
      </div>
    </>
  );
}

export default Rating;
