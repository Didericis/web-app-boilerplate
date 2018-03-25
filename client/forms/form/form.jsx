import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form as ReduxForm } from 'redux-form';

import styles from './form.css';

export const Row = ({ children }) => (
  <div className={styles.row}>
    {children}
  </div>
);

export const Buttons = ({ children }) => (
  <div className={styles.buttons}>
    {children}
  </div>
);

export default class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  }

  render() {
    const { children, className, error, warning, handleSubmit, style } = this.props;

    return (
      <ReduxForm onSubmit={handleSubmit} className={classNames(styles.main, className)} style={style}>
        {children}
        {error && <div name='sign-up-error' className={styles.error}><strong>{error}</strong></div>}
        {warning && <div name='sign-up-warning' className={styles.warning}><strong>{warning}</strong></div>}
      </ReduxForm>
    );
  }
}
