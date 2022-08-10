import { AppContext } from "App";
import { useContext } from "react";

const Notification = ({ notification, styled }) => {
  const { styles } = useContext(AppContext);
  return (
    <span style={{ ...styles.notification(notification), ...styled }}>
      {notification || "placeholder"}
    </span>
  );
};

export default Notification;
