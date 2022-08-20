import { AppContext } from "App";
import FormFooter from "components/Forms/FormFooter";
import FormGroup from "components/Forms/FormGroup";
import { useFields } from "hooks/utils/useFields.js";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createUser } from "services/users.js";

const RegisterForm = ({ sendToLogin, setNotification }) => {
  const { styles, userActions } = useContext(AppContext);

  const { fields, onChange,validateComplete } = useFields({
    username: { value: "", order:1 },
    password: { value: "", order:2 },
    confirmPassword: { value: "", order:3 },
    dateOfBirth: { value: "", order:4 }
  });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if(!validateComplete(setNotification)) return;

    if (fields.password.value !== fields.confirmPassword.value)
      return setNotification("Passwords do not match");

    const age =
      new Date().getFullYear() - new Date(fields.dateOfBirth.value).getFullYear();
    if (age < 18) return setNotification("You must be 18 or older to register");

    const userToCreate = {
      username: fields.username.value,
      password: fields.password.value,
      dateOfBirth: fields.dateOfBirth.value
    };

    createUser(userToCreate)
      .then(() => {
        userActions.logIn(fields.username.value,fields.password.value).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        const { message } = error;
        setNotification(message);
      });
  };

  return (
    <>
      <Form onSubmit={handleRegister}>
        <FormGroup
          label="Username"
          type="text"
          name="username"
          value={fields.username.value}
          onChange={onChange}
        />
        <FormGroup
          label="Date of birth"
          type="date"
          name="dateOfBirth"
          value={fields.dateOfBirth.value}
          onChange={onChange}
        />
        <FormGroup
          label="Password"
          type="password"
          name="password"
          value={fields.password.value}
          onChange={onChange}
        />
        <FormGroup
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={fields.confirmPassword.value}
          onChange={onChange}
        />
        <Button style={styles.login.button} type="submit">
          Register
        </Button>
      </Form>
      <FormFooter
        onClick={sendToLogin}
        text="Already have an account?"
        linkText="Login"
      />
    </>
  );
};

export default RegisterForm;
