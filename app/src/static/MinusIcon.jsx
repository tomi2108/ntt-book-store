
const MinusIcon = ({ color,width,height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 42"
    style={{
      width: width,
      height: height,
      cursor: "pointer",
      enableBackground: "new 0 0 42 42",
    }}
    xmlSpace="preserve"
  >
    <path style={{ fill:color }} d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H37.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
  </svg>
);

export default MinusIcon;
