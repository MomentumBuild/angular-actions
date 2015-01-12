module.exports = function(gulp, vars, $, args) {

  gulp.task('watch', function() {
    gulp.watch([ 
    	vars.less, 
    	vars.scripts[2],
    	vars.scripts[3], 
    	vars.scripts[4], 
    	vars.templates, 
    	'*.jade'
    ], 
    [ 
    	'templates', 
    	'template_index', 
    	'less', 
    	'scripts'
    ]);
  });
  
}