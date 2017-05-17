'use strict';
const gulp = require('gulp'),
	config = require('../config'),
	del = require('del'),
	pugInheritance = require('yellfy-pug-inheritance'),
	$ = require('gulp-load-plugins')();
	
	// Cache
	let pugInheritanceCache = {};
	
	// Root directory that contains your Pug files
	const pugDirectory = config.pug.src;
	
	// Filter for files
	function pugFilter(file, inheritance) {
		const filepath = `${pugDirectory}/${file.relative}`;
		if (inheritance.checkDependency(filepath, global.changedTempalteFile)) {
			console.log(`Compiling: ${filepath}`);
			return true;
		}
		
		return false;
	}

// Templates task
gulp.task('templates', () => {
	return new Promise((resolve, reject) => {
				const changedFile = global.changedTempalteFile;
		const options = {
			changedFile,
			treeCache: pugInheritanceCache
		};
		
		// Update cache for all files or only for specified file
		pugInheritance.updateTree(pugDirectory, options).then((inheritance) => {
			// Save cache for secondary compilations
			pugInheritanceCache = inheritance.tree;
		
			return gulp.src(`${pugDirectory}/*.pug`)
			.pipe($.plumber({
				errorHandler: $.notify.onError((err) => {
					return{
						title: 'Images',
						message: err.message
					}
				})
			}))
			// We can use Cache only for Watch mode
			.pipe($.if(global.watch, $.filter((file) => pugFilter(file, inheritance))))
			.pipe($.pug({ pretty: true }))
			.pipe($.debug({title: 'pug to html'}))
			.pipe(gulp.dest(config.pug.dest))
			.on('end', resolve)
			.on('error', reject);
		});
	});
});