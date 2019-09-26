import { login } from "../../server";
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async getLogin(context: any, payload: object) {
      console.log(payload);
      let result = await login(payload);
      window.localStorage.setItem("token", result.data.sessionKey);
    }
  }
};
