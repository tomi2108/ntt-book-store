import { ThemeContext } from "App";
import LoginForm from "components/Forms/LoginForm.js";
import RegisterForm from "components/Forms/RegisterForm.js";
import Notification from "components/Utils/Notification.js";
import { useNotification } from "hooks/useNotification.js";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";

const Login = ({ logIn }) => {
  const { styles } = useContext(ThemeContext);
  const [notification, setNotification] = useNotification(null);
  const [registered, setRegistered] = useState(true);

  return (
    <Container style={styles.login.container}>
      <Notification notification={notification} />
      <div style={styles.login.form}>
        {registered ? (
          <LoginForm
            sendToRegister={() => setRegistered(false)}
            logIn={logIn}
            setNotification={setNotification}
          />
        ) : (
          <RegisterForm
            sendToLogin={() => setRegistered(true)}
            setNotification={setNotification}
            logIn={logIn}
          />
        )}
      </div>
    </Container>
  );
};

export default Login;
