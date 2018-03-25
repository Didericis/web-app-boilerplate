import { SubmissionError } from 'redux-form'
import queryString from 'query-string';
import { withProps } from 'recompose';
import { withRouter } from 'react-router';

import Login from 'forms/login';

export default withProps({
  onSubmit(body) {
    return fetch('/log-in', { 
      method: 'POST', 
      credentials: 'same-origin',
      body: JSON.stringify(body), 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.status !== 200) {
        throw new SubmissionError({ password: 'Invalid Credentials', _error: 'Login failed!' });
      }
      window.location.href = queryString.parse(window.location.search).redirect || '/tasks'; 
    })
  },
})(Login);
