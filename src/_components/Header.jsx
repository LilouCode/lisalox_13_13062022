import { NavLink } from "react-router-dom";
import argentBankLogo from "../assets/argentBankLogo.png";
import NavLogged from "./NavLogged";
import NavUnregistered from "./NavUnregistered";
import { useSelector } from "react-redux";
function Header() {
    const { user: currentUser } = useSelector((state) => state.auth);
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt={"Argent Bank Logo"}
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {currentUser ? 
      <NavLogged/> : <NavUnregistered/>}
    </nav>
  );
}
export default Header;
