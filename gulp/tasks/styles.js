'use strict';
const gulp = require('gulp'),
    poststylus = require('poststylus'), //PostCSS adapter for Stylus.
    streamqueue = require('streamqueue'),
    nib = require('nib'), //nib library
    autoprefixer = require('autoprefixer'), //Autoprefixer
    rucksack = require('rucksack-css'), //A little bag of CSS superpowers
    rupture = require('rupture'), //breakpoints media queries in stylus
    config = require('../config'),
    $ = require('gulp-load-plugins')();
const cssParam = {
    paths:  ['node_modules'],
    import: ['nib', 'stylus-mixins', 'rupture'],
    use: [poststylus([rucksack(), autoprefixer({ browsers: ['last 15 versions', 'Explorer >= 9' ]})]), nib(), rupture()]
};
//Jade Templates
gulp.task('styles', () => {
    const stream = streamqueue({ objectMode: true });
    stream.queue(gulp.src(config.css.src));
    stream.queue(gulp.src(config.css.srcLib, {since: gulp.lastRun('styles')}));
    return stream.done()
        .pipe($.plumber({
            errorHandler: $.notify.onError(function(err){
                return{
                    title: 'Stylus',
                    message: err.message
                }
            })
        }))
        .pipe($.debug({title:'css'}))
        // .pipe($.if(devBuild, $.sourcemaps.init()))
        .pipe($.stylus(cssParam))
        // .pipe($.if(devBuild, $.sourcemaps.write()))
        .pipe(gulp.dest(config.css.dest));
});
//Minify CSS
gulp.task('minifyCss', () => {
    return gulp.src(config.css.dest + '*.css')
        .pipe($.plumber({
            errorHandler: $.notify.onError((err) => {
                return{
                    title: 'Stylus custom',
                    message: err.message
                }
            })
        }))
        .pipe($.csso())
        .pipe($.rename({ suffix: '.min'}))
        .pipe(gulp.dest(config.css.dest));
});

gulp.task('stylesBuild', () => {
    const stream = streamqueue({ objectMode: true });
    stream.queue(gulp.src(config.css.src));
    stream.queue(gulp.src(config.css.srcLib, {since: gulp.lastRun('styles')}));
    return stream.done()
      .pipe($.plumber({
          errorHandler: $.notify.onError(function(err){
              return{
                  title: 'Stylus',
                  message: err.message
              }
          })
      }))
      .pipe($.debug({title:'css'}))
      .pipe($.stylus(cssParam))
      .pipe(gulp.dest(config.css.build));
});

//Minify CSS
gulp.task('minifyCssBuild', () => {
    return gulp.src(config.css.build + '*.css')
      .pipe($.plumber({
        errorHandler: $.notify.onError((err) => {
          return{
            title: 'Stylus custom',
            message: err.message
          }
        })
    }))
    .pipe($.csso())
      .pipe($.rename({ suffix: '.min'}))
      .pipe(gulp.dest(config.css.build));
});