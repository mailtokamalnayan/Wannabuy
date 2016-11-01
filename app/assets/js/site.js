'use strict';

import $ from 'jquery';
import jQuery from 'jquery';

import unveil from './plugins/unveil';


$(document).ready(() => {
  $(".list-item-article figure img").unveil(100, function() {
    $(this).on('load', function() {
      this.style.opacity = 1;
    });
  });
});
