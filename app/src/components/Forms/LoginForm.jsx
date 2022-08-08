import { AppContext } from "App";
import FormFooter from "components/Forms/FormFooter";
import FormGroup from "components/Forms/FormGroup";
import { useFields } from "hooks/useFields.js";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUser } from "services/users.js";

const LoginForm = ({ setNotification, sendToRegister }) => {
  const { userActions } = useContext(AppContext);

  const { values, onChange } = useFields({ username:"",password:"" });


  const navigate = useNavigate();

  const handleLogin = (evt) => {
    evt.preventDefault();

    if (!values.username) return setNotification("Enter username");
    if (!values.password) return setNotification("Enter password");

    getUser(values.username, values.password)
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
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
        />
        <FormGroup
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
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
