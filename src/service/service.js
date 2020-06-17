import api from "../config/api";

class Teste {
  postLogin = (payload) => {
    return api().post(`/api/v1/auth/login`, payload);
  };
  getUser = () => {
    return api().get(`/api/v1/auth/users`);
  };
}

export default new Teste();
