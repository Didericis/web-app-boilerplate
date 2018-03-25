const config = require('config');
const { host, port, protocol } = config.get('graphql');
const proxy = require('express-http-proxy');
const request = require('request');

module.exports = {
  proxy: proxy(`${host}:${port}`, {
    https: protocol === 'https',
    preserveHostHdr: true,
    proxyReqOptDecorator(proxyReq, srcReq) {
      const token = srcReq.session && srcReq.session.token;
      proxyReq.headers['Authorization'] = `Bearer ${token}`;
      return proxyReq;
    },
  }),
  // TODO: this should be modified so it can look for session info
  request: request.defaults({
    url: `${protocol}://${host}:${port}`,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.get('graphql').token}`,
    },
  }),
};

