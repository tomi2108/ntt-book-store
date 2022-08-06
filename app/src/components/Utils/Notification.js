import { AppContext } from "App";
import { useContext } from "react";

const Notification = ({ notification }) => {
  const { styles } = useContext(AppContext);
  return (
    <span style={styles.notification(notification)}>
      {notification || "placeholder"}
    </span>
  );
};

export default Notification;
