import { Rating } from "@mui/material";
import { AppContext } from "App";
import { useContext } from "react";

const Review = ({ review }) => {
  const { styles } = useContext(AppContext);

  const formatedDateWithHour = new Date(review.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/Sao_Paulo",
  });


  return (
    <div style={styles.review.container}>
      <p>{review.text}</p>
      <Rating value={review.rating} readOnly />
      <div style={styles.review.author}>
        <strong>{review.User.username}</strong> - <span style={{ alignSelf:"flex-end" }}> {formatedDateWithHour} </span>
      </div>
    </div>
  );
};

export default Review;