import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "../App.js";

test("App renders content", () => {
  render(<App />);
  const button = screen.getByText("Products");
  expect(button).toBeDefined();
});
