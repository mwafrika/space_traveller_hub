import { NavLink } from 'react-router-dom';
import React from 'react';
import classes from './NavBar.module.css';
import planet1 from '../assets/planet1.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rocket  ',
    style: classes.rocket,
  },

  {
    id: 2,
    path: '/books',
    text: 'Dragon ',
    style: classes.dragon,
  },
  {
    id: 3,
    path: '/catagories',
    text: 'My Profile ',
    style: classes.myProfile,
  },
];
const NavBar = () => (
  <>
    <header className={classes.header}>
      <div className={classes.logo}>
        <img className={classes.logoImg} src={planet1} alt="planet logo" />
        <h2>Space Travelers Hub</h2>
      </div>
      <ul className={classes.navBar}>
        {links.map((link) => (
          <li key={link.id} className={`${classes.navLink} ${link.style}`}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  </>
);

export default NavBar;