// This file exists because we want to use module-alias.
// If we were not using module-alias, this file could
// be removed, and we could use an npm script instead.
require('module-alias/register');
const Mocha = require('mocha');
const glob = require('glob');

const mocha = new Mocha({
  ui: 'bdd-lazy-var/rspec'
});

glob('server/**/*.spec.js', function(err, files) {
  files.forEach(file => mocha.addFile(file));
  mocha.run(function(failures){
    process.on('exit', function () {
      process.exit(failures);
    });
  });
});
