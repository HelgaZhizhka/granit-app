const gulp = require('gulp'),
    config = require('../config'),
    streamqueue = require('streamqueue'),
    pngquant = require('imagemin-pngquant'), // PNG plugin for ImageMin
    merge = require('merge-stream'),
    buffer = require('vinyl-buffer'),
    $ = require('gulp-load-plugins')();

const imageminParams = {
    progressive: true,
    optimizationLevel: 5,
    use: [pngquant()],
    interlaced: true
};

// PNG Sprites
gulp.task('spritePng', () => {
    // Generate spritesheet
    var spriteData = gulp.src(config.spritePng.src).pipe($.spritesmith(config.spritePng.params));
    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Sprite png',
                    message: err.message
                }
            })
        }))
        .pipe(buffer())
        .pipe($.cache($.imagemin(imageminParams)))
        .pipe($.debug({title:'sprite png'}))
        .pipe(gulp.dest(config.spritePng.destImg));

    // Pipe CSS stream onto disk
    var cssStream = spriteData.css
        .pipe(gulp.dest(config.spritePng.destCss));
    return merge(imgStream, cssStream);
});