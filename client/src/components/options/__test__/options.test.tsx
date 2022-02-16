import { render, screen } from "@testing-library/react";
import Options from "../index";

describe("Options component", () => {
  const props = {
    options: ["Lisbon, Portugal", "Porto, Portugal", "Faro, Portugal"],
    value: "po",
    setValue: jest.fn(),
    setSuggestion: jest.fn(),
  };

  test("component renders as expected", () => {
    render(
      <Options
        options={props.options}
        value={props.value}
        setValue={props.setValue}
        setSuggestion={props.setSuggestion}
      />
    );

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of number of elements passed to options prop", () => {
    render(
      <Options
        options={props.options}
        value={props.value}
        setValue={props.setValue}
        setSuggestion={props.setSuggestion}
      />
    );

    const listElement = screen.getByRole("list");

    expect(listElement.children.length).toBe(3);
  });
});
