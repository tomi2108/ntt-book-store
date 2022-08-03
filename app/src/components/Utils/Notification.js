import { ThemeContext } from "App";
import { useContext } from "react";

const Notification = ({ notification }) => {
  const { styles } = useContext(ThemeContext);
  return (
    <span style={styles.notification(notification)}>
      {notification || "placeholder"}
    </span>
  );
};

export default Notification;
