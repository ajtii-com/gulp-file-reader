'use strict';

var getContents = require('vinyl-fs/lib/src/getContents');
var gutil = require('gulp-util');

module.exports = function (buffer) {
  if (typeof buffer === 'undefined')
    buffer = true;
  else if (typeof buffer !== 'boolean')
    throw new gutil.PluginError('gulp-file-reader',
        "$buffer: expects boolean; " + typeof buffer + " given");

  // Read the file and put its content or stream in Vinyl#contents property
  return getContents({ buffer: buffer });
};
