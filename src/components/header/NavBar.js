/* eslint-disable jsx-quotes */
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from '../../assets/styles/NavBar.module.css';
import planet1 from '../../assets/images/planet1.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rocket  ',
    style: classes.rocket,
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
    style: classes.dragon,
  },
  {
    id: 3,
    path: '/dragons',
    text: 'Dragon ',
    style: classes.dragon,
  },
  {
    id: 4,
    path: '/myprofile',
    text: 'My Profile ',
    style: classes.myProfile,
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <img className={classes.logoImg} src={planet1} alt='planet logo' />
          <h2>Space Travelers Hub</h2>
        </div>
        <nav className={classes.navBar}>
          <ul className={classes.menu}>
            {links.map((link) => (
              <li key={link.id} className={`${classes.navLink} ${link.style}`}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => (isActive
                    ? { textDecoration: 'underline' }
                    : { textDecoration: 'none' })}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav className={classes.navBarMenu}>
          <ul className={`${classes.menuNav} ${open ? classes.showMenu : ''}`}>
            {links.map((link) => (
              <li key={link.id} className={`${classes.navLink} ${link.style}`}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => (isActive
                    ? { textDecoration: 'underline' }
                    : { textDecoration: 'none' })}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>

          <button type='button' className={classes.myLogo} onClick={toggleMenu}>
            {open ? (
              <FontAwesomeIcon icon={faXmark} className={classes.cross} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
