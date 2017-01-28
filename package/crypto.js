/**
 *  * Created by rflaperuta on 09/12/16.
 *   */
const debug = require('debug')('node-scratchpad:crypto');
const sodium_api = require('sodium').api;

sumo = function() {
  var password_in = "RODRIGO";

  debug('PASS IN: %s', password_in);

  var password_out = sodium_sumo.crypto_pwhash_str(
	    password_in,
	    sodium_sumo.crypto_pwhash_OPSLIMIT_INTERACTIVE,
	    sodium_sumo.crypto_pwhash_MEMLIMIT_INTERACTIVE);

  debug('PASS OUT: %s', password_out);

  var result = sodium_sumo.crypto_pwhash_str_verify(password_out, password_in);

  debug('PASS OK? : %s', (result) ? 'YES' : 'NO');
}

api = function() {
  var password_in = "RODRIGO";

  debug('PASS IN: %s', password_in);

  var password_out = sodium_api.crypto_pwhash_argon2i_str(
	    new Buffer(password_in),
	    sodium_api.crypto_pwhash_OPSLIMIT_INTERACTIVE,
	    sodium_api.crypto_pwhash_MEMLIMIT_INTERACTIVE);

  debug('PASS OUT: %s', JSON.stringify(password_out));

  var result = sodium_api.crypto_pwhash_argon2i_str_verify(password_out, new Buffer(password_in));

  debug('PASS OK? : %s', (result) ? 'YES' : 'NO');
}

exports = module.exports = {sumo, api};
