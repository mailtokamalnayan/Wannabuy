'use strict';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import gulp from 'gulp';
import plumber from 'gulp-plumber';

export function rootfiles(done) {

  //grab everything, which should include htaccess, robots, etc
  const files = [
    '**',
    '.**',
    '!assets', '!assets/**',
    '!templates', '!templates/**',
    '!data', '!data/**'
  ];

  
  gulp.src(files, { cwd: config.root.app })
  .pipe( plumber({ errorHandler }) )
  .pipe( gulp.dest(config.root.build) );
  
  done();
}