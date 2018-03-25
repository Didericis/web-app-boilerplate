import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PublicNavigation from 'components/public_navigation';
import styles from './public_layout.css';

export default class PublicLayout extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const { children, className, style } = this.props;
    return (
      <div className={classNames(styles.main, className)} style={style}>
        <header>
          <PublicNavigation />
        </header>
        <main>
          {children}
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}
