import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

const register = (email, password, firstName, lastName) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
    firstName,
    lastName,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.body.token) {
        sessionStorage.setItem("user", JSON.stringify(response.data));
        console.log(JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  sessionStorage.clear();
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};
export default AuthService;
