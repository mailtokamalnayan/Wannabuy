'use strict';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import gulp from 'gulp';

import es from 'event-stream';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import fs from 'fs';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import cheerio from 'gulp-cheerio';

export function svg(done) {

  var streams = fs.readdirSync(config.svg.src)
    .map( sprite => {
        return gulp
          .src( config.svg.src + sprite + '/*.svg', {base: config.svg.src + sprite} )
          .pipe( plumber({ errorHandler }) )
          .pipe( svgmin() )
          .pipe( svgstore({ inlineSvg: true}) )
          .pipe( cheerio({
            run: function ($, file) {
              $('svg').addClass('hidden');
              $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
          }) )
          .pipe( rename({extname: '.hbs'}) )
    });
  return es
    .merge(streams)
    .pipe( gulp.dest(config.svg.dist) )
    .on('end', done);
}
