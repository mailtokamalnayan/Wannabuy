'use strict';

import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

gulp.task('deploy', (done) => {

  gulp.src('./build/**/*')
  .pipe(ghPages({
     'remoteUrl' : 'git@github.com:Ghosh/Hector.git'
  }))

  done();
});