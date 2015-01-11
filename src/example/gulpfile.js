var gulp = require('gulp');
var path = require('path');
var args = require('yargs').argv;

var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-angular-templatecache': 'templateCache',
    'gulp-angular-htmlify': 'htmlify'
  }
});

var vars = require('./gulp/vars')(args.base ? 'base' : 'bootstrap');

require('./gulp/clean')(gulp, vars, $, args);
require('./gulp/less')(gulp, vars, $);
require('./gulp/scripts')(gulp, vars, $);
require('./gulp/templates')(gulp, vars, $, args);
// require('./gulp/fonts')(gulp, vars, $, args);
// require('./gulp/testing')(gulp, vars, $, args);

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch([ vars.less, vars.scripts[2], vars.scripts[3], vars.scripts[4], vars.templates, '*.jade' ], [ 'templates', 'template_index', 'less', 'scripts']);
});


gulp.task('default', ['clean', 'templates', 'template_index', 'scripts', 'less', 'watch']);