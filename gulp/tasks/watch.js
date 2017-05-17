'use strict';
const gulp = require('gulp'),
    watch = require('gulp-watch'), //Watch, that actually is an endless stream
    config = require('../config'),
    requireDir = require('require-dir');
requireDir('./', { recurse: true });


gulp.task('watch', () => {
	  global.watch = true;
    //Watch
    gulp.watch(config.watch.srcPug, gulp.series('templates'))
      .on('all', (event, filepath) => {
      global.changedTempalteFile = filepath.replace(/\\/g, '/');
    });
    gulp.watch(config.watch.srcStyles, gulp.series('styles'));
    gulp.watch(config.watch.srcJs, gulp.series('scripts'));
    gulp.watch(config.watch.srcImg, gulp.series('images'));
    gulp.watch(config.watch.srcSvg, gulp.series('svgImages'));
    gulp.watch(config.watch.srcSpritePng, gulp.series('spritePng'));
    gulp.watch(config.watch.srcSpriteSvg, gulp.series('spriteSvg'));
    // gulp.watch(config.watch.srcIconsSvg, gulp.series('iconsSvg'));
});
