import { AppContext } from "App";
import FormFooter from "components/Forms/FormFooter";
import FormGroup from "components/Forms/FormGroup";
import { useField } from "hooks/useField.js";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUser } from "services/users.js";

const LoginForm = ({ setNotification, sendToRegister }) => {
  const { userActions } = useContext(AppContext);

  const usernameInput = useField("text");
  const passwordInput = useField("password");

  const navigate = useNavigate();

  const handleLogin = (evt) => {
    evt.preventDefault();
    if (!usernameInput.value) return setNotification("Enter username");
    if (!passwordInput.value) return setNotification("Enter password");

    getUser(usernameInput.value, passwordInput.value)
      .then((user) => {
        userActions.logIn(user);
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
        <FormGroup
          label="Username"
          {...usernameInput}
        />
        <FormGroup
          label="Password"
          {...passwordInput}
        />
        <Button style={{ marginTop: "30px" }} type="submit">
          Log In
        </Button>
      </Form>
      <FormFooter onClick={sendToRegister} text="Don't have an account?" linkText="Register"/>
    </>
  );
};

export default LoginForm;
