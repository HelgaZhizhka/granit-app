const gulp = require('gulp'),
    config = require('../config'),
    $ = require('gulp-load-plugins')();

gulp.task('favicons', () => {
    return gulp.src(config.favicons.src, {since: gulp.lastRun('favicons')})
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Favicons',
                    message: err.message
                }
            })
        }))
        .pipe($.changed(config.favicons.dest))
        .pipe($.debug({title: 'favicons'}))
        .pipe($.cache($.flatten()))
        .pipe(gulp.dest(config.favicons.dest));
});