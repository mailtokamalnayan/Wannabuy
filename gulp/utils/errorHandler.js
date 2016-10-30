'use strict';

import gutil from 'gulp-util';
import notifier from 'node-notifier';

export default function (error) {

    const errorMessage = `
      Plugin: ${gutil.colors.red(error.plugin)}
      Error: ${gutil.colors.red(error.message)}
    `;

    const lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

    notifier.notify({
      title: 'Task Failed [' + error.plugin + ']',
      subtitle: `${error.relativePath} - Line ${error.line}`,
      message: error.messageOriginal,
    });
    
    gutil.log(errorMessage);
    
    // Prevent watch tasks from freezing
    this.emit('end');
};