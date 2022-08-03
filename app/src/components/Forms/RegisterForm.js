import { ThemeContext } from "App";
import { useField } from "hooks/useField.js";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createUser } from "services/users.js";

const RegisterForm = ({ logIn, sendToLogin, setNotification }) => {
  const { styles } = useContext(ThemeContext);

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
      <Form onSubmit={handleRegister}>
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
          <Form.Label>Date of birth</Form.Label>
          <Form.Control
            style={styles.input}
            type={dateOfBirthInput.type}
            onChange={dateOfBirthInput.onChange}
            value={dateOfBirthInput.value}
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
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            style={styles.input}
            type={confirmPasswordInput.type}
            onChange={confirmPasswordInput.onChange}
            value={confirmPasswordInput.value}
          />
        </Form.Group>
        <Button style={{ marginTop: "30px" }} type="submit">
          Register
        </Button>
      </Form>
      <p>
        {" "}
        {"Already have an accout?"}
        <Button onClick={sendToLogin} variant="link">
          Log in
        </Button>
      </p>
    </>
  );
};

export default RegisterForm;
