module.exports = function(gulp, vars, $) {

	gulp.task('less', function () {
	  gulp.src(vars.less)
	    .pipe($.concat('style.less'))
	    .pipe($.less())
	    .pipe(gulp.dest(vars.root))
	    .pipe($.minifyCss({keepBreaks:false}))
	    .pipe($.rename('style.min.css'))
	    .pipe(gulp.dest(vars.root))
	    .pipe($.filesize())
	    .on('error', $.util.log)
	});

}