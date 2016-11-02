'use strict';

import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

gulp.task('deploy', (done) => {

  return gulp.src('./build/**/*')

  .pipe(ghPages({
     'remoteUrl' : 'git@github.com:mailtokamalnayan/wannabuy.git'
  })).on('end', () => {
  	done();
  })

  
});