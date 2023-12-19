import { Fragment } from 'react';
import styles from '../styles/NavItems.module.css';
import NavList from './NavList';

const NavItems = () => {
  const navLinks = [
    { path: '/home', name: 'Home' },
    { path: '/events', name: 'Events' },
    { path: '/appointments', name: 'Appointments' },
    { path: '/executives', name: 'Executives' },
    {
      path: 'https://bible.usccb.org/readings/calendar',
      name: 'Liturgical Calendar',
      type: 'external',
    },
  ];
  return (
    <Fragment>
      <ul id="primary-navigation" className={styles['nav-items']}>
        {navLinks.map((navLink) => (
          <NavList
            key={navLink.name}
            path={navLink.path}
            name={navLink.name}
            type={navLink.type}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default NavItems;
