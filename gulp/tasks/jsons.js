const gulp = require('gulp'),
    config = require('../config'),
    $ = require('gulp-load-plugins')();

gulp.task('jsons', () => {
    return gulp.src(config.jsons.src, {since: gulp.lastRun('jsons')})
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Jsons',
                    message: err.message
                }
            })
}))
.pipe($.changed(config.jsons.dest))
    .pipe($.debug({title: 'jsons'}))
    .pipe($.cache($.flatten()))
    .pipe(gulp.dest(config.jsons.dest));
});