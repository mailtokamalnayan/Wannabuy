'use strict';

import gulp from 'gulp';
import config from '../config.js';

import { help } from './help';
import { hbs } from './hbs';
import { styles } from './styles';
import { scripts } from './scripts';
import { images } from './images';
import { svg } from './svg';
import { fonts } from './fonts';
import { rootfiles } from './rootfiles';
import { serve } from './serve';
import { watch } from './watch';
import { fetch } from './fetch';
import { sanitize } from './sanitize';
import { deploy } from './deploy';

// Define individual taks
gulp.task(help);
gulp.task(hbs);
gulp.task(svg);
gulp.task(styles);
gulp.task(scripts);
gulp.task(fonts);
gulp.task(rootfiles);
gulp.task(images);
gulp.task(serve);
gulp.task(watch);
gulp.task(deploy);

gulp.task(
	'sync',
	gulp.series(fetch, sanitize)
);

// Define composite tasks
gulp.task(
	'default',
	gulp.series('help')
);

gulp.task(
  'dev',
  gulp.series(
    'hbs',
    gulp.parallel('svg', 'styles', 'scripts', 'images', 'fonts', 'rootfiles'),
    'serve',
    'watch'
  )
);

export const dev = gulp.task('dev');