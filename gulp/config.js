'use strict';

const paths = {
  root: {
    app: './app/',
    build: './build/'
  },
  templates: {
    src: './app/templates/',
    partials: './app/templates/partials/',
    layouts: './app/templates/layouts/',
    dest: './build/'
  },
  styles: {
    src: './app/assets/scss/',
    dist: './build/css/'
  },
  scripts: {
    src: './app/assets/js/',
    dist: './build/js/'
  },
  svg: {
    src: './app/assets/svg/',
    dist: './app/templates/partials/sprites/'
  },
  images: {
    src: './app/assets/images/',
    dist: './build/images/'
  },
  fonts: {
    src: './app/assets/fonts/',
    dist: './build/fonts/'
  }
}

export default paths;
