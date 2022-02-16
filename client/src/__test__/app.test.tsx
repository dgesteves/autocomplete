import { render, screen } from "@testing-library/react";
import App from "../app";

describe("App component", () => {
  test("component renders as expected", () => {
    render(<App />);

    const divElement = screen.getByTestId("app");
    expect(divElement).toBeInTheDocument();
  });
});
