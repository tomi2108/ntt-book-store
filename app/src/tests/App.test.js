import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

test("App renders content", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const logo = screen.getByText("LOGO");
  expect(logo).toBeDefined();
});
