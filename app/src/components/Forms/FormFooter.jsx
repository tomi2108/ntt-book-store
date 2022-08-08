import { Button } from "react-bootstrap";

const FormFooter = ({ onClick,text,linkText }) => {
  return (
    <p>
      {" "}
      {text}
      <Button onClick={onClick} variant="link">
        {linkText}
      </Button>
    </p>
  );
};

export default FormFooter;