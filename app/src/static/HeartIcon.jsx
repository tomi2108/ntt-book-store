import "styles/HeartIcon.css";

const HeartIcon = ({ style,...otherProps }) => (
  <svg
    className="heart-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 295.559 295.559"
    style={style}
    xmlSpace="preserve"
    {...otherProps}
  >
    <path d="M294.626 88.215c-2.388-17.766-9.337-34.209-20.099-47.555-9.956-12.346-22.871-21.525-36.365-25.844-10.026-3.201-19.906-4.824-29.374-4.824-24.577 0-46.313 10.811-62.147 30.678-17.638-20.154-38.392-30.355-61.812-30.357-8.839 0-18.06 1.516-27.408 4.502-13.505 4.32-26.423 13.498-36.382 25.844C10.274 54.004 3.322 70.449.934 88.215c-3.858 28.701 4.289 60.008 23.562 90.533 22.278 35.285 59.255 69.889 109.904 102.848a24.461 24.461 0 0 0 13.381 3.971c4.764 0 9.392-1.373 13.383-3.973 50.646-32.957 87.623-67.561 109.9-102.848 19.271-30.525 27.418-61.83 23.562-90.531z" />
  </svg>
);

export default HeartIcon;