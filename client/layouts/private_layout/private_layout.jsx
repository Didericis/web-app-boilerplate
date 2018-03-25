import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import styles from './private_layout.css';

export default class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
    footer: PropTypes.node,
    header: PropTypes.node,
  }
  render() {
    const { header, footer } = this.props;

    return (
      <div className={styles.main}>
        <header>
          <button onClick={this.onSetOpen.bind(this, true)} name='sidebar'>
            <FontAwesome name='bars' />
          </button>
          {header}
        </header>
        <main>
          {children}
        </main>
        <footer>
          {footer}
        </footer>
      </div>
    );
  }
};
