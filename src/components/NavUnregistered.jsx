import {NavLink} from 'react-router-dom'
const NavUnregistered = () =>{
    return (
        <div>
        <NavLink className="main-nav-item" to={"/login"}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div> 
    )
}; export default NavUnregistered