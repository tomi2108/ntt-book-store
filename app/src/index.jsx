import App from "App";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router history={BrowserRouter}>
    <App />
  </Router>
);
