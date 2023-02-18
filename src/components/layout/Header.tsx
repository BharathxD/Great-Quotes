import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            className={(isActive) => (isActive ? classes.active : undefined)}
            to="home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(isActive) => (isActive ? classes.active : undefined)}
            to="products"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
