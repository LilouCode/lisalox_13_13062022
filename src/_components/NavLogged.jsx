import React, { useCallback } from "react";
import { useDispatch} from "react-redux";
import { logout } from "../_slices/auth";
import { NavLink } from "react-router-dom";
const NavLogged = () => {
    const dispatch = useDispatch();
    const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <div>
      <NavLink to={"/User"} className="main-nav-item">
        <i className="fa fa-user-circle"></i>
      </NavLink>
      <div>
        <NavLink onClick={logOut} to="/">
        <i className="fa fa-sign-out"></i>
        Sign Out
        </NavLink>
      </div>
    </div>
  );
};
export default NavLogged;
