module.exports = function(gulp, vars, $, args) {

	var root = {
		src: [
			'templates/'+args.css+'/'+args.type+'.less',
			'templates/'+args.css+'/core.less',
			'templates/'+args.css+'/'+args.type+'.jade',
		],
		dest: 'app/pages/'
	};

	gulp.task('clean-create', function () {  
	 	gulp.src(root.dest, {read: false})
	    	.pipe($.clean({force: true}));
	});

	gulp.task('create', function() {
		gulp.src(root.src)
	    	.pipe(gulp.dest(root.dest));
	});

}