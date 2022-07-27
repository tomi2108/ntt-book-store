import "../styles/clickable.css";

const Clickable = ({ onClick,children }) => {
  return (
    <button id="clickable" onClick={onClick}>{children}</button>
  );
};

export default Clickable;