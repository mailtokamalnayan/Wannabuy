'use strict';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import gulp from 'gulp';
import plumber from 'gulp-plumber';

export function fonts(done) {

  gulp.src( config.fonts.src + '**/*' )
  .pipe( plumber({ errorHandler }) )
  .pipe( gulp.dest(config.fonts.dist) )

  done();
};