'use strict';
const gulp = require('gulp'),
    browserSync = require('browser-sync').create();  // Synchronised browser testing

//Server locally
gulp.task('server', () => {
    browserSync.init({
        server : './dist',
        port: 8080,
        host: "192.168.0.108"
    });
    browserSync.watch('./dist').on('change', browserSync.reload);
});