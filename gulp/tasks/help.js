'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';

export function help(done) {

  var help = `
    ${gutil.colors.yellow('Usage:')}
      gulp [command]
    
    ${gutil.colors.yellow('Available commands:')}
      ${gutil.colors.green('gulp')}             Display this help message.
      ${gutil.colors.green('gulp dev')}         Start dev server and watches for changes.
      ${gutil.colors.green('gulp sync')}        Sync data from google sheets to json.
      ${gutil.colors.green('gulp demo')}        Start dev server and opens project in browser.
      ${gutil.colors.green('gulp build')}       Build and optimize files for production.
      ${gutil.colors.green('gulp deploy')}      Deploys files to production.
  `;

  setTimeout(( () => {
    console.log(help);
    done();
  }), 100);
}
