'use strict';

var read = require('./index');
var vfs = require('vinyl-fs');
var through = require('through2');
var chai = require('chai');
var chaiStr = require('chai-string');
var gutil = require('gulp-util');

chai.use(chaiStr);

var expect = chai.expect;

describe('gulp-file-reader', function () {
  it('should read the file and put its content in Vinyl#contents property as string when no argument passed',
      function (done) {
    vfs.src('LICENSE', { read: false })
        .pipe(read())
        .pipe(through.obj(function (file, encoding, done2) {
          expect(file.isBuffer()).to.equal(true);
          expect(file.contents.toString()).to.startWith("MIT License");
          done2();
        }))
        .on('finish', function () {
          done();
        });
  });

  it('should read the file and put its content in Vinyl#contents property as string when true passed',
      function (done) {
    vfs.src('LICENSE', { read: false })
        .pipe(read(true))
        .pipe(through.obj(function (file, encoding, done2) {
          expect(file.isBuffer()).to.equal(true);
          expect(file.contents.toString()).to.startWith("MIT License");
          done2();
        }))
        .on('finish', function () {
          done();
        });
  });

  it('should put the file stream in Vinyl#contents property when false passed',
      function (done) {
    vfs.src('LICENSE', { read: false })
        .pipe(read(false))
        .pipe(through.obj(function (file, encoding, done2) {
          expect(file.isStream()).to.equal(true);
          done2();
        }))
        .on('finish', function () {
          done();
        });
  });

  it('should throw when null passed', function () {
    expect(function () {
      read(null);
    }).to.throw(gutil.PluginError);
  });

  it('should throw when not boolean passed', function () {
    expect(function () {
      read(1);
    }).to.throw(gutil.PluginError);
  });
});
