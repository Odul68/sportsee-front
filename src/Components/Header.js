import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

/**
 * Header NavBar with logo and links
 * @component
 * @returns component
 */

export default function Header() {
  return (
    <nav className="navBar">
      <Link to="/" className="siteName">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <NavLink to="/" className="navBarLink">
          Accueil
        </NavLink>
        <NavLink to="/" className="navBarLink">
          Profil
        </NavLink>
        <NavLink to="/" className="navBarLink">
          Réglage
        </NavLink>
        <NavLink to="/" className="navBarLink">
          Communauté
        </NavLink>
      </ul>
    </nav>
  );
}
