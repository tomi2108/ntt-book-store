import { AppContext } from "App";
import { useContext } from "react";
import { Form } from "react-bootstrap";

const FormGroup = ({ label, type, onChange, value, name, ...otherProps }) => {
  const { styles } = useContext(AppContext);

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        style={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        {...otherProps}
      />
    </Form.Group>
  );
};

export default FormGroup;
