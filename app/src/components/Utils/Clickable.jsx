import "styles/Clickable.css";

const Clickable = ({ onClick, children, ...otherProps }) => {
  return (
    <button {...otherProps} id="clickable" onClick={onClick}>
      {children}
    </button>
  );
};

export default Clickable;
