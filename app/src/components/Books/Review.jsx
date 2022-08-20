import { Rating } from "@mui/material";
import { AppContext } from "App";
import { useContext } from "react";

const Review = ({ review }) => {
  const { styles } = useContext(AppContext);

  const formatedDateWithHour = new Date(review.createdAt).toLocaleString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "America/Sao_Paulo"
    }
  );

  return (
    <div style={styles.review.container}>
      <div style={styles.review.author}>
        <span>  <strong>{review.User.username}</strong> -{" "}{formatedDateWithHour} </span>
      </div>
      <p>{review.text}</p>
      <div style={styles.review.rating}>
        <Rating value={+review.rating} readOnly />
      </div>
    </div>
  );
};

export default Review;
