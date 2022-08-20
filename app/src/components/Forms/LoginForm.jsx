import { AppContext } from "App";
import FormFooter from "components/Forms/FormFooter";
import FormGroup from "components/Forms/FormGroup";
import { useFields } from "hooks/utils/useFields.js";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const LoginForm = ({ setNotification, sendToRegister }) => {
  const { styles, userActions } = useContext(AppContext);

  const { fields, onChange,validateComplete } = useFields({ username: { value:"",order:1 }, password: { value:"",order:2 } });

  const navigate = useNavigate();

  const handleLogin = (evt) => {
    evt.preventDefault();

    if(!validateComplete(setNotification)) return;

    userActions.logIn(fields.username.value, fields.password.value)
      .then(() => {
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
          value={fields.username.value}
          onChange={onChange}
        />
        <FormGroup
          label="Password"
          type="password"
          name="password"
          value={fields.password.value}
          onChange={onChange}
        />
        <Button style={styles.login.button} type="submit">
          Log In
        </Button>
      </Form>
      <FormFooter
        onClick={sendToRegister}
        text="Don't have an account?"
        linkText="Register"
      />
    </>
  );
};

export default LoginForm;
