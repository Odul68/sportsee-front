import { NavLink } from "react-router-dom";

/**
 * This function returns the content of the Home page.
 * @returns Homepage with user selection
 */

export default function Home() {
  return (
    <main className="userSelection">
      <h2>Bienvenue sur Sportsee</h2>
      <NavLink to="user/12">
        <button className="userSelectButton">Utilisateur 12</button>
      </NavLink>
      <NavLink to="user/18">
        <button className="userSelectButton">Utilisateur 18</button>
      </NavLink>
    </main>
  );
}
