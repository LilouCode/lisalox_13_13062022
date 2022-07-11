import axios from "axios";
import authHeader from "./auth-header";

const getUserBoard = () => {
  console.log("getUserBoard has been called");
  console.log("authHeader: ", authHeader());
  return axios({
    method: "POST",
    url: "http://localhost:3001/api/v1/user/profile",
    headers: authHeader(),
  });
};

// const editUserBoard = () => {
//   console.log("editUserBoard has been called");
//   return axios({
//     method: "PUT",
//     url: "http://localhost:3001/api/v1/user/profile",
//     headers: authHeader(),
//     body: editHeader(),
//   });
// };
const userService = { getUserBoard};
export default userService;

// const getUserBoard = async () => {
//   console.log("getUserBoard")
//   let mounted= true
//   console.log( JSON.parse(localStorage.getItem('user')).body.token)
//   const bearerToken = JSON.parse(localStorage.getItem("user")).body.token;
//   try{
//     const reponse = await axios.post("http://localhost:3001/api/v1/user/profile",
//       {
//         headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjU0ZmU3YzE0ODdhOWJiYmNkY2NkNiIsImlhdCI6MTY1Njk0NzM0NCwiZXhwIjoxNjU3MDMzNzQ0fQ.GfubLo_HMHoxpeMFL_OZpmiNC7bNJRRs-kOx3F5Rea0'}
//       })
//     console.log("reponse>>>>>",reponse)
//     if(mounted){
//       const dataUser = reponse
//       return dataUser
//     }

//   } catch{
//     return null
//   }}
// const UserService = {
//   getUserBoard
// };
// export default UserService
