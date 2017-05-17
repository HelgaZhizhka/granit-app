const gulp = require('gulp'),
    config = require('../config'),
    $ = require('gulp-load-plugins')();

// Images
gulp.task('svgImages', () => {
    return gulp.src(config.svgImages.src, {since: gulp.lastRun('svgImages')})
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'svg images',
                    message: err.message
                }
            })
        }))
        .pipe($.changed(config.svgImages.dest))
        .pipe($.debug({title: 'svg images'}))
        .pipe($.cache($.svgmin(config.svgImages.params)))
        .pipe(gulp.dest(config.svgImages.dest));
});
