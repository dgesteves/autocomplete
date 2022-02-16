import { Location } from "../types";

/**
 * Get an array os objects to transform in an array of strings
 * @param locations - Object like {city:sting,country:sting}
 * @type {(locations: Location[]) => string[]}
 * @returns {string[]} - Returns an array of join strings from object at iteration
 */
export function getLocationsToArray(locations: Location[]): string[] {
  return locations.map((location) => `${location.city}, ${location.country}`);
}

/**
 * Filter an array of strings and return an array with the matching strings
 * @param options - Array of strings like {['Lisboa, Portugal', 'Porto, Portugal']}
 * @param value - string to make to find the match
 * @type {(options: string[], value: string) => string[]}
 * @returns {string[]} - Returns an array filtered by the included value argument to lower case
 */
export function getSuggestions(options: string[], value: string): string[] {
  return options.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );
}
