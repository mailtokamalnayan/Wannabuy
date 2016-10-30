'use strict';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import gulp from 'gulp';
import sass from 'gulp-sass';
import newer from 'gulp-newer';
import sourcemaps from 'gulp-sourcemaps';

import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import willChange from 'postcss-will-change';
import vmin from 'postcss-vmin';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';

import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';

import { server } from './serve.js';

export function styles(done) {

  const processors = [
    willChange(),
    vmin(),
    mqpacker(),
    cssnano(),
    autoprefixer({ browsers: ['ie >= 10', 'ie_mob >= 10', 'ff >= 30', 'chrome >= 34', 'safari >= 7', 'opera >= 23', 'ios >= 7', 'android >= 4.4', 'bb >= 10'] })
  ];

  return gulp.src([
    `${config.styles.src}**/*.scss`,
    '!**/_*/**' // Ignores Sass partials to `gulp.src` for best performance
  ])
  .pipe( plumber({ errorHandler }) )
  .pipe( sourcemaps.init() )
  .pipe( newer(config.styles.dist) )
  .pipe( sass() )
  .pipe( postcss(processors) )
  .pipe( sourcemaps.write('./') )
  .pipe( gulp.dest(config.styles.dist) )
  .pipe( server.stream({match: '**/*.css'}) );
  done();
}