import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { PUBLIC } from 'constants/routes';
import styles from './public_navigation.css';

export default class PublicNavigation extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const { className, style } = this.props;
    return (
      <div className={classNames(styles.main, className)} style={style}>
        <div className={styles.logo}><Link to='/'><span>Calamore</span></Link></div>
        <div className={styles.spacing} />
        <div className={styles.accountButtons}>
          <Link to={PUBLIC.signUp}>Sign Up</Link>
          <Link to={PUBLIC.login}>Log In</Link>
        </div>
      </div>
    );
  }
}
