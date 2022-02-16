const response = {
  data: {
    locations: [
      { city: "Lisbon", country: "Portugal" },
      { city: "Porto", country: "Portugal" },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(response),
};
