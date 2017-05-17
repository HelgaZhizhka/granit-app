"use strict";

//for windows in command come - set NODE_ENV=development
//notation for gulp
//1. include files
//gulp.src('source/**/*.{js,css}')
//2. no read file
//gulp.src('source/**/*.{js,css}',{read:false})
//3. stream contents
//gulp.src('source/**/*.{js,css}',{buffer:false})
//4. current directory - cwd=/my/project
//5. path /my/project/src/
//base - /my/project/src/ ? relative - js/index.js (for gulp dest)

const requireDir = require('require-dir');

global.devBuild = process.env.NODE_ENV !== 'production';

requireDir('./gulp/tasks', { recurse: true });