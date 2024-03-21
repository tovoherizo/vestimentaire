import React from 'react'
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div>
      <ul className="lien">
        <NavLink className="link" to={"/Shop"}>All</NavLink>
        <NavLink className="link">Spring-summer</NavLink>
        <NavLink className="link">sweatshirt</NavLink>
        <NavLink className="link">Sneakers</NavLink>
        <NavLink className="link">Gadgets</NavLink>
        <NavLink className="link">Outdoor</NavLink>
      </ul>
    </div>
  );
}

export default Menu