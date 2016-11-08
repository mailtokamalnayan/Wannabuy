'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import ghPages from 'gulp-gh-pages';

export function deploy(done) {

  return gulp
  .src('./build/**/*')
  .pipe(ghPages({
    'remoteUrl' : 'git@github.com:mailtokamalnayan/wannabuy.git'
  }))
  .once('end', () => {
  	gutil.log( gutil.colors.green('✓ Project deployed - Hurray!') );
  	done();
  	process.exit();
  });

  done()
};