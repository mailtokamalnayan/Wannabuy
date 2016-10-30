'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';

import config from '../config.js';
import errorHandler from '../utils/errorHandler.js';
import { addEventsHandlers } from '../utils/watchHandler.js';

import { hbs } from './hbs';
import { styles } from './styles';
import { scripts } from './scripts';
import { images } from './images';
import { svg } from './svg';
import { fonts } from './fonts';
import { rootfiles } from './rootfiles';
import { reload } from './serve.js';


const watchers = [
  gulp.watch(['./app/templates/**/*.hbs'], gulp.series(hbs, reload)),
  gulp.watch(['./app/docs/**/*.md'], gulp.series(hbs, reload)),
  gulp.watch(['./app/assets/scss/**/*.scss'], gulp.series(styles)),
  gulp.watch(['./app/assets/js/**/*.js'], gulp.series(scripts, reload)),
  gulp.watch(['./app/assets/images/**/*'], gulp.series(images, reload)),
  gulp.watch(['./app/assets/svg/**/*.svg'], gulp.series(svg, reload)),
  gulp.watch(['./app/assets/fonts/**/*'], gulp.series(fonts, reload)),
  gulp.watch(['./app/*'], gulp.series(rootfiles, reload))
]



export function watch(done) {

	watchers.map(watcher => addEventsHandlers(watcher));
	gutil.log(gutil.colors.green('Watching for changes...'))

  done();
}