'use strict';
const gulp = require('gulp'),
    config = require('../config'),
    mainBowerFiles = require('main-bower-files'),  // Copies main files from bower
    $ = require('gulp-load-plugins')();

//Main bower files
gulp.task('mainBowerFilesJs', () => {
    return gulp.src(mainBowerFiles('**/*.js'), {since: gulp.lastRun('mainBowerFilesJs')})
        .pipe($.cache($.flatten()))
        .pipe($.changed(config.mainBowerFiles.destJs))
        .pipe(gulp.dest(config.mainBowerFiles.destJs))
});
gulp.task('mainBowerFilesCss', () => {
    return gulp.src(mainBowerFiles('**/*.css'), {since: gulp.lastRun('mainBowerFilesCss')})
        .pipe($.cache($.flatten()))
        .pipe($.changed(config.mainBowerFiles.destCss))
        .pipe(gulp.dest(config.mainBowerFiles.destCss))
});
gulp.task('mainBowerFilesFonts', () => {
    return gulp.src(mainBowerFiles('**/fonts/*.*'), {since: gulp.lastRun('mainBowerFilesFonts')})
        .pipe($.cache($.flatten()))
        .pipe($.changed(config.mainBowerFiles.destFonts))
        .pipe(gulp.dest(config.mainBowerFiles.destFonts))
});
gulp.task('mainBowerFilesImages', () => {
    return gulp.src(mainBowerFiles('**/img/*.*'), {since: gulp.lastRun('mainBowerFilesImages')})
        .pipe($.cache($.flatten()))
        .pipe($.changed(config.mainBowerFiles.destImg))
        .pipe(gulp.dest(config.mainBowerFiles.destImg))
});
