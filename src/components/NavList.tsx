import React, { Fragment } from 'react';

import styles from '../styles/NavList.module.css';

const NavList = ({
  path,
  name,
  type,
}: {
  path: string;
  name: string;
  type?: string;
}) => {
  return (
    <Fragment>
      <li className={styles['nav-item']}>
        <a href={path} className={styles['nav-item__link']}>
          {name}
        </a>
      </li>
    </Fragment>
  );
};

export default NavList;
