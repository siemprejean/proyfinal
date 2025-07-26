
const dotenv = require('dotenv');

process.chdir(__dirname);

dotenv.config();

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('Type of DATABASE_URL:', typeof process.env.DATABASE_URL);

// Attempt to import `sails` dependency, as well as `rc` (for loading `.sailsrc` files).
let sails;
let rc;

try {
  /* eslint-disable global-require */
  sails = require('sails');
  rc = require('sails/accessible/rc');
  /* eslint-enable global-require */
} catch (error) {
  /* eslint-disable no-console */
  console.error("Encountered an error when attempting to require('sails'):");
  console.error(error.stack);
  console.error('--');
  console.error('To run an app using `node app.js`, you need to have Sails installed');
  console.error("locally (`./node_modules/sails`).  To do that, just make sure you're");
  console.error('in the same directory as your app and run `npm install`.');
  console.error();
  console.error('If Sails is installed globally (i.e. `npm install -g sails`) you can');
  console.error('also run this app with `sails lift`.  Running with `sails lift` will');
  console.error('not run this file (`app.js`), but it will do exactly the same thing.');
  console.error("(It even uses your app directory's local Sails install, if possible.)");
  /* eslint-enable no-console */

  process.exit(1);
}

// Start server
sails.lift(rc('sails'));
