import weights from "../images/weights.png";
import biking from "../images/biking.png";
import swimming from "../images/swimming.png";
import yoga from "../images/yoga.png";
import { NavLink } from "react-router-dom";

/**
 * Vertical Footer
 * @component
 * @returns component with links to each page
 */

export default function Footer() {
  return (
    <footer>
      <ul className="iconMenu">
        <NavLink to="/" className="navBarLink">
          <img src={yoga} alt="yogaIcon" />
        </NavLink>
        <NavLink to="/" className="navBarLink">
          <img src={swimming} alt="swimmingIcon" />
        </NavLink>
        <NavLink to="/" className="navBarLink">
          <img src={biking} alt="bikingIcon" />
        </NavLink>
        <NavLink to="/" className="navBarLink">
          <img src={weights} alt="weightsIcon" />
        </NavLink>
      </ul>
      <p>Copiryght, SportSee 2020</p>
    </footer>
  );
}
