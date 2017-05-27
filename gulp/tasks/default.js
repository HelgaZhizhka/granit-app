'use strict';
const gulp = require('gulp'),
    requireDir = require('require-dir');
requireDir('./', { recurse: true });


gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('fonts', 'jsons','templates','styles','scripts','images','svgImages','spritePng','spriteSvg','mainBowerFilesJs'),'minifyCss','uglify')
);

gulp.task('devBuild', gulp.series(
  'clean:dist',
  gulp.parallel('fonts','jsons', 'templates','styles','scripts','images','svgImages','spritePng','spriteSvg','mainBowerFilesJs'))
);

gulp.task('default', gulp.series('devBuild',
    gulp.parallel('server','watch')));


gulp.task('proBuild', gulp.series(
  'cleanBuild',
  gulp.parallel('stylesBuild','scriptsBuild'),'minifyCssBuild')
);