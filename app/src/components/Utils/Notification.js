import styles from "styles/styles.js";

const Notification = ({ notification }) => {
  return (
    <span style={styles.notification(notification)}>
      {notification ||  "placeholder"}
    </span>
  );
};

export default Notification;