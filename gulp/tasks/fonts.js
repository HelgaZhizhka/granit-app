const gulp = require('gulp'),
    config = require('../config'),
    $ = require('gulp-load-plugins')();

gulp.task('fonts', () => {
    return gulp.src(config.fonts.src, {since: gulp.lastRun('fonts')})
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Fonts',
                    message: err.message
                }
            })
        }))
        .pipe($.changed(config.fonts.dest))
        .pipe($.debug({title: 'fonts'}))
        .pipe($.cache($.flatten()))
        .pipe(gulp.dest(config.fonts.dest));
});