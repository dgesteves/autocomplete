import axios from "axios";
import { URL } from "../constants";
import { getLocationsToArray } from "../utils";

export default async function fetchLocations() {
  try {
    const { data } = await axios.get(URL);
    return getLocationsToArray(data.locations);
  } catch (err: any) {
    throw new Error(err);
  }
}
