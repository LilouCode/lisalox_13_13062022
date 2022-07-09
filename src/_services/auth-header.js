export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.body.token) {
      console.log('authHeader() has the token >>>>>>>>>>  ' + user.body.token)
      return { Authorization: `Bearer ` + user.body.token};
    } else {
      return {};
    }
}