'use strict';

const getContents = require('vinyl-fs/lib/src/getContents');

module.exports = function (buffer) {
  // Read the file (default) or just put stream in Vinyl#contents property
  buffer = typeof buffer === 'undefined' ? true : buffer;

  // Read the file and put its content in Vinyl#contents property
  return getContents({ buffer: buffer });
};
