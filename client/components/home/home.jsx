import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './home.css';

/**
 * Home
 */
export default class Home extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const { className, style } = this.props;
    return (
      <div className={classNames(styles.main, className)} style={style}>
        <h1>Home</h1>
      </div>
    );
  }
}
