module.exports = function(gulp, vars, $) {

	gulp.task('scripts', function() {
	  gulp.src(vars.scripts)
	    .pipe($.concat('app.js'))
	    .pipe(gulp.dest(vars.root))
	    .pipe($.rename('app.min.js'))
	    .pipe($.uglify({mangle: false}))
	    .pipe(gulp.dest(vars.root))
	    .pipe($.filesize())
	    .on('error', $.util.log)
	});

}