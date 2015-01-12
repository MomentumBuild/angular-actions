module.exports = function(gulp, vars, $, args) {

	var root = {
		less: [
			'templates/' + args.style + '/' + args.type + '.less',
			'templates/' + args.style + '/core.less',
			
		],
		jade: 'templates/' + args.style + '/' + args.type + '.jade',
		dest: 'app/pages/'
	};

	var err = new $.util.PluginError({
	  plugin: 'clean-vars',
	  message: 'You need to use both style and type. For example: gulp create --type petition --style base',
	  showStack: true
	});

	gulp.task('clean-vars', function () {  
	 	gulp.src('gulp/vars.js', {read: false})
	 		.pipe(args.style !== undefined && args.type !== undefined ? $.clean({force: true}) : err);
	});

	gulp.task('move-vars', function() {
		gulp.src('gulp/' + args.style + '-vars.js')
			.pipe($.rename('vars.js'))
	    	.pipe(gulp.dest('./gulp/'))
	});

	gulp.task('clean-templates', function () {  
	 	gulp.src(root.dest, {read: false})
	 		.pipe($.clean({force: true}));
	});

	gulp.task('move-less', function() {
		gulp.src(root.less)
	    	.pipe(gulp.dest(root.dest))
	});

	gulp.task('move-jade', function() {
		gulp.src(root.jade)
			.pipe($.rename('action.jade'))
	    	.pipe(gulp.dest(root.dest))
	});

}