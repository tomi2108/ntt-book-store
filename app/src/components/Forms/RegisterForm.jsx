import { AppContext } from "App";
import FormFooter from "components/Forms/FormFooter";
import FormGroup from "components/Forms/FormGroup";
import { useFields } from "hooks/useFields.js";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createUser } from "services/users.js";

const RegisterForm = ({ sendToLogin, setNotification }) => {
  const { userActions } = useContext(AppContext);

  const { values, onChange } = useFields({ username: "", password: "",confirmPassword:"",dateOfBirth:"" });

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!values.username) return setNotification("Enter username");
    if (!values.password) return setNotification("Enter password");
    if (!values.confirmPassword) return setNotification("Enter confirm password");
    if (!values.dateOfBirth) return setNotification("Enter date of birth");

    if (values.password !== values.confirmPassword) return setNotification("Passwords do not match");

    const age = new Date().getFullYear() - new Date(values.dateOfBirth).getFullYear();
    if (age < 18) return setNotification("You must be 18 or older to register");


    const userToCreate = {
      username: values.username,
      password: values.password,
      dateOfBirth: values.dateOfBirth,
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
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
        />
        <FormGroup
          label="Date of birth"
          type="date"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={onChange}
        />
        <FormGroup
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <FormGroup
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={onChange}
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
