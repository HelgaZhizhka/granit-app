const gulp = require('gulp'),
    config = require('../config'),
    svgSprite = require('gulp-svg-sprite'),  //svg sprite
    $ = require('gulp-load-plugins')();

gulp.task('spriteSvg', () => {
    return gulp.src(config.spriteSvg.src)
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'sprite Svg',
                    message: err.message
                }
            })
        }))
        .pipe($.cache($.svgmin(config.svgImages.params)))
        .pipe(svgSprite(config.spriteSvg.params))
        .pipe($.debug({title:'sprite svg'}))
        .pipe($.if('*.styl', gulp.dest(config.spriteSvg.destCss), gulp.dest(config.spriteSvg.destImg)));
});