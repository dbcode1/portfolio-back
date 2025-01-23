import React, { useState, useContext } from "react";
import { useLocation, NavLink } from "react-router-dom";

const Nav = () => {
  function Item({ name, path }) {
    return (
      <NavLink
        className={({ isActive, isPending }) =>
          isPending ? "link pending" : isActive ? "link active" : ""
        }
        to={path}
        viewTransition
      >
        {name}
      </NavLink>
    );
  }
  // render nav based on route
  let location = useLocation();
  const home = location.pathname == "/";

  return (
    <ul className="nav">
      <li>
        <Item className="nav-link" name="Home" path="/">
          ITEM
        </Item>
      </li>
      <li>
        <Item name="Work" path="/work" viewTransition>
          ITEM
        </Item>
      </li>
      <li>
        <Item name="Contact" path="/contact" viewTransition></Item>
      </li>
    </ul>
  );
};

export default Nav;
