import React, { Component } from 'react';
import { Field, clearSubmitErrors, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { compose, withProps } from 'recompose';

import Form, { Row, Buttons } from 'forms/form';

class Login extends Component {
  render() {
    const { error, warning, handleSubmit, submitting, submitSucceeded } = this.props;

    return (
      <Form error={error} warning={warning} handleSubmit={handleSubmit}>
        <Row>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </Row>
        <Row>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </Row>
        <Buttons>
          <button >Forgot Password</button>
          <button type="submit">{ submitting || submitSucceeded ? 'Logging In...' : 'Login' }</button>
        </Buttons>
      </Form>
    );
  }
}

export default compose(
  withRouter, 
  reduxForm({ 
    form: 'login',
    onChange: (values, dispatch, props) => {
      if (props.error) dispatch(clearSubmitErrors('login'));
      if (props.location.hash) props.history.replace({ location: { ...props.location, hash: null }});
    }
  }),
  withProps(({ location: { hash } }) => ({
    warning: (() => {
      if (hash === '#auto-logout') return 'Automatically logged out due to inactivity';
    })(),
  })),
)(Login);
