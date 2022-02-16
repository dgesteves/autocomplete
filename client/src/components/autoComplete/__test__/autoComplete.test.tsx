import { render, screen, fireEvent } from "@testing-library/react";
import AutoComplete from "../index";

describe("AutoComplete component", () => {
  const props = {
    options: ["Lisbon, Portugal", "Porto, Portugal", "Faro, Portugal"],
  };

  test("component renders as expected", () => {
    render(<AutoComplete options={props.options} />);

    const divElement = screen.getByTestId("autocomplete");
    expect(divElement).toBeInTheDocument();
  });

  test("component renders same text passed into value prop", () => {
    render(<AutoComplete options={props.options} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "Lisboa" } });

    expect(inputElement.value).toBe("Lisboa");
  });

  test("component dose not renders options since showSuggestions is false", () => {
    render(<AutoComplete options={props.options} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "Lisboa" } });

    const listElement = screen.getByRole("list");

    expect(listElement.children[0]).toBe(undefined);
    expect(listElement.children.length).toBe(0);
  });
});
