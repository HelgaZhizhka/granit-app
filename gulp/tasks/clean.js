'use strict';
const gulp = require('gulp'),
    del = require('del'),
    config = require('../config');

// Clean dist directory
gulp.task('clean', () => {
    return del(config.clean.src);
});

gulp.task('clean:dist', () => {
    return del([
        config.clean.src + '/*.html',
        config.clean.src + '/css/*.*',
        config.clean.src + '/js/*.*',
        '!' + config.clean.src + '/images/*.*',
        '!' + config.clean.src + '/vendor/css/*.*',
        '!' + config.clean.src + '/vendor/js/*.*',
        '!' + config.clean.src + '/*.[png,svg,ico,json]'
    ]);
});


// Clean buil directory
gulp.task('cleanBuild', () => {
    return del([
        config.clean.srcBuild + '/css/*.*',
        config.clean.srcBuild + '/js/*.*',
        '!' + config.clean.srcBuild+ '/*.html',
        '!' + config.clean.srcBuild + '/images/*.*',
        '!' + config.clean.srcBuild + '/vendor/css/*.*',
        '!' + config.clean.srcBuild + '/vendor/js/*.*',
        '!' + config.clean.srcBuild + '/*.[png,svg,ico,json]'
    ]);
});
