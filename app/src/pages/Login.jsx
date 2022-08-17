import { AppContext } from "App";
import LoginForm from "components/Forms/LoginForm";
import RegisterForm from "components/Forms/RegisterForm";
import Notification from "components/Utils/Notification";
import { useNotification } from "hooks/utils/useNotification.js";
import { useContext, useState } from "react";
import { Container } from "react-bootstrap";

const Login = () => {
  const { styles } = useContext(AppContext);
  const [notification, setNotification] = useNotification(null);
  const [registered, setRegistered] = useState(true);

  return (
    <Container style={styles.login.container}>
      <Notification notification={notification} />
      <div style={styles.login.form}>
        {registered ? (
          <LoginForm
            sendToRegister={() => setRegistered(false)}
            setNotification={setNotification}
          />
        ) : (
          <RegisterForm
            sendToLogin={() => setRegistered(true)}
            setNotification={setNotification}
          />
        )}
      </div>
    </Container>
  );
};

export default Login;
