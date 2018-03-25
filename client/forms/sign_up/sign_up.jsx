import React, { Component } from 'react';
import { Field, clearSubmitErrors, reduxForm } from 'redux-form';

import Form, { Row, Buttons } from 'forms/form';

class SignUp extends Component {
  render() {
    const { error, handleSubmit, submitting, submitSucceeded } = this.props;

    return (
      <Form error={error} handleSubmit={handleSubmit}>
        <Row>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </Row>
        <Row>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </Row>
        <Buttons>
          <button type="submit">{ submitting || submitSucceeded ? 'Signing Up...' : 'Sign Up' }</button>
        </Buttons>
      </Form>
    );
  }
}

export default reduxForm({ 
  form: 'signUp',
  onChange: (values, dispatch, props) => {
    if (props.error) dispatch(clearSubmitErrors('signUp'));
  }
})(SignUp);
