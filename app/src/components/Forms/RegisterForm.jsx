import { AppContext } from "App";
import FormFooter from "components/Forms/FormFooter";
import FormGroup from "components/Forms/FormGroup";
import { useField } from "hooks/useField.js";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createUser } from "services/users.js";

const RegisterForm = ({ sendToLogin, setNotification }) => {
  const { userActions } = useContext(AppContext);

  const usernameInput = useField("text");
  const passwordInput = useField("password");
  const confirmPasswordInput = useField("password");
  const dateOfBirthInput = useField("date");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const age =
      new Date().getFullYear() - new Date(dateOfBirthInput.value).getFullYear();

    if (!usernameInput.value) return setNotification("Enter username");
    if (!passwordInput.value) return setNotification("Enter password");
    if (!confirmPasswordInput.value)
      return setNotification("Enter confirm password");
    if (!dateOfBirthInput.value) return setNotification("Enter date of birth");
    if (passwordInput.value !== confirmPasswordInput.value)
      return setNotification("Passwords do not match");
    if (age < 18) return setNotification("You must be 18 or older to register");

    const userToCreate = {
      username: usernameInput.value,
      password: passwordInput.value,
      dateOfBirth: dateOfBirthInput.value,
    };

    createUser(userToCreate)
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
      <Form onSubmit={handleRegister}>
        <FormGroup
          label="Username"
          {...usernameInput}
        />
        <FormGroup
          label="Date of birth"
          {...dateOfBirthInput}
        />
        <FormGroup
          label="Password"
          {...passwordInput}
        />
        <FormGroup
          label="Confirm password"
          {...confirmPasswordInput}
        />
        <Button style={{ marginTop: "30px" }} type="submit">
          Register
        </Button>
      </Form>
      <FormFooter onClick={sendToLogin} text="Already have an account?" linkText="Login"/>
    </>
  );
};

export default RegisterForm;
