import { useField } from "hooks/useField.js";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUser } from "services/users.js";
import styles from "styles/styles.js";

const LoginForm = ({ logIn, setNotification, sendToRegister }) => {
  const usernameInput = useField("text");
  const passwordInput = useField("password");

  const navigate = useNavigate();

  const handleLogin = (evt) => {
    evt.preventDefault();
    if (!usernameInput.value) return setNotification("Enter username");
    if (!passwordInput.value) return setNotification("Enter password");

    getUser(usernameInput.value, passwordInput.value)
      .then((user) => {
        logIn(user);
        navigate("/");
      })
      .catch((error) => {
        const { message } = error;
        setNotification(message);
      });
  };

  return (
    <>
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            style={styles.input}
            type={usernameInput.type}
            onChange={usernameInput.onChange}
            value={usernameInput.value}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            style={styles.input}
            type={passwordInput.type}
            onChange={passwordInput.onChange}
            value={passwordInput.value}
          />
        </Form.Group>

        <Button style={{ marginTop: "30px" }} type="submit">
          Log In
        </Button>
      </Form>
      <p>
        {" "}
        {"Don't have an accout?"}
        <Button onClick={sendToRegister} variant="link">
          Register
        </Button>
      </p>
    </>
  );
};

export default LoginForm;
