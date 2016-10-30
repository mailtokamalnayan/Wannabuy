'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';

import path from 'path';
import chalk from 'chalk';
import del from 'del';

import config from '../config.js';

function onWatchAdd(filePath) {
  gutil.log(`File ${chalk.underline.green(filePath)} has been added.`);
}

function onWatchChange(filePath) {
  gutil.log(`File ${chalk.underline.yellow(filePath)} was changed.`);
}

// TODO: Also remove map files for js and css where exist
function onWatchRemove(filePath) {
  const filePathFromSrc = path.relative(path.resolve(config.scripts.src), filePath);
  const destFilePath = path.resolve(config.scripts.dist, filePathFromSrc);
  del.sync(destFilePath);

  gutil.log(`File ${chalk.underline.red(filePath)} has been removed.`);
}

function onWatchError(error) {
  gutil.log(chalk.underline.red('Error in watch task'));
  gutil.log(error);
}

export function addEventsHandlers(watcher) {
  return watcher
    .on('add', onWatchAdd)
    .on('change', onWatchChange)
    .on('unlink', onWatchRemove)
    .on('error', onWatchError);
}