import { render, screen } from "@testing-library/react";
import Input from "../index";

describe("Input component", () => {
  const props = {
    value: "Li",
    placeholder: "Search",
    setValue: jest.fn(),
    setShowSuggestions: jest.fn(),
  };

  test("component renders as expected", () => {
    render(
      <Input
        value={props.value}
        placeholder={props.placeholder}
        setValue={props.setValue}
        setShowSuggestions={props.setShowSuggestions}
      />
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("renders placeholder attribute as prop passed", () => {
    render(
      <Input
        value={props.value}
        placeholder={props.placeholder}
        setValue={props.setValue}
        setShowSuggestions={props.setShowSuggestions}
      />
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("placeholder", props.placeholder);
  });

  test("renders value attribute as prop passed", () => {
    render(
      <Input
        value={props.value}
        placeholder={props.placeholder}
        setValue={props.setValue}
        setShowSuggestions={props.setShowSuggestions}
      />
    );
    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    expect(inputElement.value).toBe(props.value);
  });
});
