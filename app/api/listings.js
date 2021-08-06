import client from "./client";

const endPoint = "/listings";

const getListings = (a, b, c) => client.get(endPoint);

export default {
  getListings,
};
