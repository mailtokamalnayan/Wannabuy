'use strict';

import gulp from 'gulp';

import jeditor from 'gulp-json-editor';
import beautify from 'gulp-jsbeautify';
import streamify from 'gulp-streamify';

export function sanitize(done) {
  gulp.src("./app/data/products.json", {base: './'})

 .pipe(streamify(jeditor(function (data) {
      var rows = data.rows;
      var products = [];
      var root = {};
      
      for (var i=0,  len=rows.length; i < len; i++) {
        products[i] = {};
        products[i]['name'] = rows[i]['name'];
        products[i]['reason'] = rows[i]['reason'];
        products[i]['price'] = rows[i]['price'];
        products[i]['store'] = rows[i]['store'];
        products[i]['storeUrl'] = rows[i]['storeurl'];
        products[i]['itemUrl'] = rows[i]['itemurl'];
        products[i]['imageUrl'] = rows[i]['imageurl'];
        products[i]['reasonUrl'] = rows[i]['reasonurl'];
      }
      
      return root = {
        'products' : products
      }

  })))

  .pipe(beautify({brace_style: 'expand'}))
  .pipe(gulp.dest("./"))
  .once('end', () => {
  	done();
    process.exit();
  });  
}