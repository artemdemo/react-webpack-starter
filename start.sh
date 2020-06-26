#!/bin/sh

# BABEL_ENV related only to babel configuration `babel.config.js`
# Currently we have only 2 configurations:
# * production
# * test
export BABEL_ENV=production

if [ "$NODE_ENV" = "production" ]; then
    cd server
    npm start
else
    npm run server:dev
fi
