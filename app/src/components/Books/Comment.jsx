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
      <p>{comment.text}</p>
      <div style={styles.comment.author}>
        <strong>{comment.User.username}</strong> - <span style={{ alignSelf:"flex-end" }}> {formatedDateWithHour} </span>
      </div>
    </div>
  );
};

export default Comment;