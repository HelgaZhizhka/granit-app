const gulp = require('gulp'),
    config = require('../config'),
    svgSprite = require('gulp-svg-sprite'),  //svg sprite
    $ = require('gulp-load-plugins')();

gulp.task('iconsSvg', () => {
    return gulp.src(config.iconsSvg.src)
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'icons Svg',
                    message: err.message
                }
            })
        }))
        .pipe($.cache($.svgmin(config.svgImages.params)))
        // remove all fill and style declarations in out shapes
        .pipe($.cheerio({
            run: ($) => {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        // cheerio plugin create unnecessary string '>', so replace
        .pipe($.replace('&g t;', '>')) // remove space between 'g' and 't' letters
        // build svg sprite
        .pipe(svgSprite(config.iconsSvg.params))
        .pipe(gulp.dest(config.iconsSvg.destImg));
});