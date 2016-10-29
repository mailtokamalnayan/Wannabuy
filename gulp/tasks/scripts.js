'use strict';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';

import gulp from 'gulp';

import browserify from 'browserify';
import babelify from 'babelify';
import glob from 'glob';
import es from 'event-stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

export function scripts(done) {

  glob('*.js', {cwd: config.scripts.src}, (err, files) => {
    
    if (err) {
      errorHandler(err);
    }

    const tasks = files.map(entry => {
      const b = browserify({
        entries: [entry],
        extensions: ['.js'],
        debug: true,
        cache: {},
        packageCache: {},
        basedir: config.scripts.src,
        transform: ['babelify']
      })

      const bundle = () => {
        return b.bundle()
          .on( 'error', errorHandler )
          .pipe( source(entry) )
          .pipe( buffer() )
          .pipe( sourcemaps.init({loadMaps: true}) )
          .pipe( uglify() )
          .pipe( sourcemaps.write('./') )
          .pipe( gulp.dest(config.scripts.dist) )
      };

      b.on('update', bundle);
      return bundle();
    });

    es.merge(tasks).on('end', done);

  });
}