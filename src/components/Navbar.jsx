import { NavLink } from "react-router-dom";

function Navbar() {
  const isActiveUrl = (data) => {
    
    if (data.isActive === true) {
      return "nav-active";
    } else {
      return "nav-inactive";
    }
  };
  return (
    <nav>
      
      <NavLink className={isActiveUrl} to="/">
      <img src="../src/assets/home-icon.png" alt="" />
      </NavLink>
    </nav>
  );
}

export default Navbar;
