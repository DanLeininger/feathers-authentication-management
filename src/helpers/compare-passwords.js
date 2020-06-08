const makeDebug = require('debug');
const debug = makeDebug('authLocalMgnt:comparePwds');
const bcrypt = require('bcryptjs');

module.exports = comparePasswords;

function comparePasswords (oldPassword, password, getError) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(oldPassword, password, (err, data1) => {
      
      debug('resetPassword', 'compare', err, data1);
      return (err || !data1) ? reject(getError() || err) : resolve()
    });
  });
}
