'use strict';
const gulp = require('gulp'),
    streamqueue = require('streamqueue'),
    config = require('../config'),
    $ = require('gulp-load-plugins')();
//Jade Templates
gulp.task('scripts', () => {
    const stream = streamqueue({ objectMode: true });
    stream.queue(gulp.src(config.scripts.src));
    stream.queue(gulp.src(config.scripts.srcLib, {since: gulp.lastRun('scripts')}));
    return stream.done()
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Js',
                    message: err.message
                }
            })
        }))
        .pipe($.debug({title: 'js'}))
        .pipe($.rigger())
        .pipe(gulp.dest(config.scripts.dest));
});
// uglify scripts
gulp.task('uglify', () => {
    const stream = streamqueue({ objectMode: true });
    stream.queue(gulp.src(config.scripts.src));
    stream.queue(gulp.src(config.scripts.srcLib));
    return stream.done()
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Js',
                    message: err.message
                }
            })
        }))
        .pipe($.uglify())
        .pipe($.rename({ suffix: '.min'}))
        .pipe(gulp.dest(config.scripts.dest));
});


gulp.task('scriptsBuild', () => {
    const stream = streamqueue({ objectMode: true });
    stream.queue(gulp.src(config.scripts.src));
    stream.queue(gulp.src(config.scripts.srcLib, {since: gulp.lastRun('scripts')}));
    return stream.done()
      .pipe($.plumber({
          errorHandler: $.notify.onError((err) => {
              return{
                  title: 'Js',
                  message: err.message
              }
          })
    }))
    .pipe($.debug({title: 'js'}))
      .pipe($.rigger())
      .pipe(gulp.dest(config.scripts.build));
});

