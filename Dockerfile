FROM node:8.5.0
MAINTAINER Didericis <didericis@gmail.com>

ENV NODE_ENV production

# Install Node Modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Load in application code
WORKDIR /opt/app
ADD . /opt/app

# Build app
RUN npm run build

# Setup up env
EXPOSE 3000
LABEL version="0.0.1"

CMD ["node", "server"]
