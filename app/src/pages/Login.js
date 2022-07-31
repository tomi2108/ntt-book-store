import LoginForm from "components/Forms/LoginForm.js";
import RegisterForm from "components/Forms/RegisterForm.js";
import Notification from "components/Utils/Notification.js";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "styles/styles.js";

const Login = ({ logIn }) => {
  const [notification, setNotification] = useState(null);
  const [registered,setRegistered] = useState(true);


  useEffect(() => {
    if(notification){
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, [notification]);


  return (
    <Container style={styles.login.container}>
      <Notification notification={notification}/>
      <div style={styles.login.form}>
        {
          registered?
            <LoginForm sendToRegister={() => setRegistered(false)} logIn={logIn} setNotification={setNotification} />:
            <RegisterForm sendToLogin={() => setRegistered(true)} setNotification={setNotification} logIn={logIn}/>
        }
      </div>
    </Container>
  );
};

export default Login;