const ShoppingCartIcon = ({ onClick, color }) => {
  return (
    <svg
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
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-shopping-cart"
    >
      <circle cx={9} cy={21} r={1} style={{ stroke: color }} />
      <circle cx={20} cy={21} r={1} style={{ stroke: color }} />
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        style={{ stroke: color }}
      />
    </svg>
  );
};

export default ShoppingCartIcon;
