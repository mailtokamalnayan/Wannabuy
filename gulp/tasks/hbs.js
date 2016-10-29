'use strict';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import gulp from 'gulp';
import frontMatter from 'gulp-front-matter';
import ext_replace from 'gulp-ext-replace';
import layouts from 'handlebars-layouts';
import hb from 'gulp-hb';
import plumber from 'gulp-plumber';



export function hbs(done) {

  const hbStream = hb()
      // Partials
      .partials('./app/templates/layouts/**/*.hbs')
      .partials('./app/templates/partials/**/*.hbs')

      // Helpers
      .helpers(require('handlebars-helpers'))
      .helpers(require('handlebars-layouts'))
      .helpers('./app/templates/helpers/**.*js')
      

  return gulp.src([
    'app/templates/**/*.hbs',
   '!app/templates/partials/**/*.hbs',
   '!app/templates/layouts/**/*.hbs'
  ])
  .pipe( plumber({ errorHandler }) )
  .pipe(frontMatter({
    property: 'data.page'
  }))
  .pipe( hbStream )
  .pipe( ext_replace('.html') )
  .pipe( gulp.dest(config.templates.dest) );

  done();
}
