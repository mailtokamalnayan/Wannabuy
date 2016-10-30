'use strict';

import gutil from 'gulp-util';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import browserSync from 'browser-sync';

export const server = browserSync.create();

export function reload(done) {
  server.reload();
  done();
}

var time = gutil.date(new Date(), "HH:MM:ss");

export function serve(done) {
  server.init({
    notify: false,
    open: false,
    logPrefix: gutil.colors.grey(time),
    server: ['./build'],
    port: 3000
  }, done);
}