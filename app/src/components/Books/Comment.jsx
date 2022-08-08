import { AppContext } from "App";
import { useContext } from "react";

const Comment = ({ comment }) => {
  const { styles } = useContext(AppContext);

  const formatedDateWithHour = new Date(comment.createdAt).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/Sao_Paulo",
  });


  return (
    <div style={styles.comment.container}>
      <p style={styles.bookCard.subtitle}>
        <strong>{comment.User.username} </strong> - {formatedDateWithHour}
      </p>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;