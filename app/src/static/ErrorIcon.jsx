
const ErrorIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    style={{
      top: "0",
      marginRight: "10px",
      width: "15px",
      height: "15px",
      enableBackground: "new 0 0 80.588 61.158"
    }}
  >
    <path
      style={{
        fill: color
      }}
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zM64 256c0-106.1 86-192 192-192 42.1 0 81 13.7 112.6 36.7L100.7 368.6C77.7 337 64 298.1 64 256zm192 192c-42.1 0-81-13.7-112.6-36.7l267.9-267.9c23 31.7 36.7 70.5 36.7 112.6 0 106.1-86 192-192 192z" />
  </svg>
);

export default ErrorIcon;
