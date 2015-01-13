var gulp = require('gulp');
var path = require('path');
var args = require('yargs').argv;
var vars = require('./gulp/vars');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-angular-templatecache': 'templateCache',
    'gulp-angular-htmlify': 'htmlify'
  }
});

// List process
// require('./gulp/list')(gulp, vars, $, args);

// Create process
require('./gulp/create')(gulp, vars, $, args);

// Default process
require('./gulp/clean')(gulp, vars, $, args);
require('./gulp/less')(gulp, vars, $, args);
require('./gulp/scripts')(gulp, vars, $, args);
require('./gulp/templates')(gulp, vars, $, args);
// require('./gulp/fonts')(gulp, vars, $, args);
// require('./gulp/testing')(gulp, vars, $, args);

// Rerun the task when a file changes
require('./gulp/watch')(gulp, vars, $, args);

// Tasks
gulp.task('create', ['clean-vars', 'move-vars', 'clean-templates', 'move-less', 'move-jade']);
// gulp.task('campaigns', ['list-campaigns']);
gulp.task('default', ['clean', 'templates', 'index', 'scripts', 'less', 'watch']);

