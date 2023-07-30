const axios = require("axios");

exports.addlog = async (log) => {
  const BASE_URL = "https://gentle-boot-bass.cyclic.app";
  const PATH = "/addlog";
  return axios.post(BASE_URL + PATH, log);
};
