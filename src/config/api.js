import axios from "axios";

const api = () => {
  const type = localStorage.getItem("type");
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://fbb-api.hyst.dev",
    headers: {
      Authorization: `${type} ${token}`,
    },
  });
};

export default api;
