const gulp = require('gulp'),
    config = require('../config'),
    pngquant = require('imagemin-pngquant'), // PNG plugin for ImageMin
    $ = require('gulp-load-plugins')();
const imageminParams = {
    progressive: true,
    optimizationLevel: 5,
    use: [pngquant()],
    interlaced: true
};

// Images
gulp.task('images', () => {
    return gulp.src(config.images.src)
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Images',
                    message: err.message
                }
            })
        }))
        .pipe($.changed(config.images.dest))
        .pipe($.debug({title: 'images'}))
        .pipe($.cache($.imagemin(imageminParams)))
        .pipe(gulp.dest(config.images.dest));
});
