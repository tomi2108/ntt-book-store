import { useState } from "react";
import "styles/NavLinkHover.css";

const ShoppingCartIcon = ({ onClick, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  const stroke = isHovered ? "#0d6efd" : color;

  return (
    <svg
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        width: "20px",
        height: "auto",
        cursor: "pointer",
        marginLeft: "15px",
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-shopping-cart"
    >
      <circle cx={9} cy={21} r={1} style={{ stroke }} />
      <circle cx={20} cy={21} r={1} style={{ stroke }} />
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        style={{ stroke }}
      />
    </svg>
  );
};

export default ShoppingCartIcon;
