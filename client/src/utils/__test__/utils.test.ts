import { getLocationsToArray, getSuggestions } from "../index";

describe("Utility functions", () => {
  test("getLocationsToArray Should receive array of objects and return array os strings", () => {
    const locations = [
      { city: "Lisbon", country: "Portugal" },
      { city: "Porto", country: "Portugal" },
    ];
    expect(getLocationsToArray(locations)).toEqual([
      "Lisbon, Portugal",
      "Porto, Portugal",
    ]);
  });

  test("getSuggestions should an array of strings and return a match array with filtered options", () => {
    const options = ["Lisbon, Portugal", "Porto, Portugal", "Faro, Portugal"];
    const value = "fa";

    expect(getSuggestions(options, value)).toEqual(["Faro, Portugal"]);
  });
});
