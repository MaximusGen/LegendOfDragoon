import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuToggle, setToggleMenu] = useState(false);

  return (
    <div className="navTransition-right-container">
      <div className="toggle-button">
        {menuToggle ? (
          <RiCloseLine
            color="#fff"
            size={25}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={25}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>

      {menuToggle && (
        <nav className="navTransition-right">
          <div className="navTransition-right_links">
            <p>
              <NavLink to="/">Accueil</NavLink>
            </p>
            <p>
              <NavLink to="#">Personnages</NavLink>
            </p>
            <p>
              <NavLink to="#">Jeu</NavLink>
            </p>
            <p>
              <NavLink to="#">Bestaires</NavLink>
            </p>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
