import { Rating } from "@mui/material";
import { AppContext } from "App";
import Clickable from "components/Utils/Clickable";
import { useContext, useState } from "react";
import { deleteReview } from "services/books";
import CrossIcon from "static/CrossIcon";

const Review = ({ review,setReviews }) => {
  const { user,styles } = useContext(AppContext);
  const [isHovered,setIsHovered] = useState(false);

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

  const handleDelete = () => {
    if(user?.username !== review.User.username) return;
    deleteReview(review.id,review.bookId);
    setReviews(reviews => reviews.filter(r => r.id !== review.id));
  };


  return (
    <div style={styles.review.container} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
      <span style={styles.review.delete}>
        <Clickable style={{ cursor:user?.username === review.User.username? "pointer":"auto" }} onClick={handleDelete}>
          <CrossIcon color={styles.iconColor} style={styles.displayIf(isHovered && user?.username === review.User.username )}  />
        </Clickable>
      </span>
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
