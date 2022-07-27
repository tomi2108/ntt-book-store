import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm.js";
import Notification from "../components/Notification.js";
import RegisterForm from "../components/RegisterForm.js";
import styles from "../styles/styles.js";

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