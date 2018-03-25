import { SubmissionError } from 'redux-form'
import queryString from 'query-string';
import { withProps } from 'recompose';

import SignUp from 'forms/sign_up';

export default withProps({
  onSubmit(body) {
    return fetch('/sign-up', { 
      method: 'POST', 
      credentials: 'same-origin',
      body: JSON.stringify(body), 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json().then(body => ({
      status: response.status,
      body
    })))
    .then(response => {
      if (response.status === 400) {
        // TODO: should there be more error parsing here?
        throw new SubmissionError({ password: 'Invalid Credentials', _error: response.body.message || 'blah' });
      } else if (response.status !== 200) {
        throw new SubmissionError({ password: 'Invalid Credentials', _error: 'Sign up failed!' });
      }
      window.location.href = queryString.parse(window.location.search).redirect || '/tasks'; 
    })
  }
})(SignUp);
