import axios from "axios";
import authHeader from "./auth-header";


const getUserBoard = () => {
  console.log("getUserBoard")
  const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.body.token) {
      console.log('authHeader() has the token >>>>>>>>>>  ' + user.body.token)
      return axios.post("http://localhost:3001/api/v1/user/profile", 
      {
        Headers: { authorization: 'Bearer ' + user.body.token}
      }
      ); 
    } else {
      return {};
    }
}
const UserService = {
  getUserBoard
};
export default UserService