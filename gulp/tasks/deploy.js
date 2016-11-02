'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import ghPages from 'gulp-gh-pages';

gulp.task('deploy', (done) => {

  return gulp
  .src('./build/**/*')
  .pipe(ghPages({
    'remoteUrl' : 'git@github.com:mailtokamalnayan/wannabuy.git'
  })).on('end', () => {
  	gutil.log( gutil.colors.green('✓ File deployed - ctrl+c to exit') );
  })

  done()
});