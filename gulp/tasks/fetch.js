'use strict';

import gulp from 'gulp';
import gulpSheets from 'gulp-google-spreadsheets';


export function fetch(done) {
    return gulpSheets('16FaaUhItrNk7syQ-6hWd2K2dT85j-l2q6wpry0zt1g0')
    .pipe(gulp.dest('./app/data'))
    .once('end', () => {
    	done();
    });
};