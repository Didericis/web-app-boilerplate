import _ from 'lodash';

export const PUBLIC = {
  home: '/',
  login: '/log-in',
  signUp: '/sign-up',
};

export const PRIVATE = {
  home: '/',
};

// NB: returns a string that will match all of the routes given,
//     where 'routes' is a hash map (Like the ones above)
export const matchRoutes = (routes) => 
  `/:path(${_.values(routes).map(a => a.substring(1)).join('|')})`;
