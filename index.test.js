'use strict';

const read = require('./index');
const vfs = require('vinyl-fs');
const through = require('through2');
const chai = require('chai');
const chaiStr = require('chai-string');

chai.use(chaiStr);

const expect = chai.expect;

describe('gulp-file-reader', function () {
  it('should read the file and put its content in Vinyl#contents property as string when no arguments passed',
      function (done) {
  vfs.src('LICENSE')
      .pipe(read())
      .pipe(through.obj(function (file, encoding, done2) {
        expect(file.contents).to.be.an.instanceOf(Buffer);
        expect(file.contents.toString()).to.startWith("MIT License");
        done2();
      }, function () {
        done();
      }));
  });

  it('should read the file and put its content in Vinyl#contents property as string when true passed',
      function (done) {
  vfs.src('LICENSE')
      .pipe(read(true))
      .pipe(through.obj(function (file, encoding, done2) {
        expect(file.contents).to.be.an.instanceOf(Buffer);
        expect(file.contents.toString()).to.startWith("MIT License");
        done2();
      }, function () {
        done();
      }));
  });

  it('should put the file stream in Vinyl#contents property when false passed',
      function (done) {
    vfs.src('LICENSE')
        .pipe(read(false))
        .pipe(through.obj(function (file, encoding, done2) {
          expect(file.contents).to.be.an('object');
          expect(file.contents.read).to.be.a('function');
          done2();
        }, function () {
          done();
        }));
  });
});
