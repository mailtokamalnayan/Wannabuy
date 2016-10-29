'use strict';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import gulp from 'gulp';

import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';
import plumber from 'gulp-plumber';

export function images(done) {

  gulp.src( config.images.src + '**/*' )
  .pipe( plumber({ errorHandler }) )
  .pipe( imagemin({
      progressive: true,
      interlaced: true,
      use: [pngquant()]
  }) )
  .pipe( gulp.dest(config.images.dist) )

  done();

}