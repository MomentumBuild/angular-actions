var gulp = require('gulp');
var concat = require('gulp-concat');
var jade = require('gulp-jade');
var htmlify = require('gulp-angular-htmlify');
var templateCache = require('gulp-angular-templatecache');
var path = require('path');
var less = require('gulp-less');
var jasmine = require('gulp-jasmine');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var paths = {
  module: [
    'app/module.js', 
    'app/controller.js', 
    'app/service.js',
  ],
  moduleTemplate: [ 
    'app/templates.js',
    'app/directives/*.js'
  ],
  templates: 'app/**/*.jade',
  example: 'index.jade',
  root: ['../../dist/'],
  testing: ['../tests/api/**/*.js']
};

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(jade())
    .pipe(htmlify())
    .pipe(templateCache({
        root: "/",
        standalone: false,
        module: "momentum.petition",
      }))
    .pipe(gulp.dest('app/'));
});

gulp.task('module', function() {
  gulp.src(paths.module)
    .pipe(concat('petition.js'))
    .pipe(gulp.dest(paths.root[0]))
    .pipe(concat('petition.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(paths.root[0]))
});

gulp.task('moduleTemplate', function() {
  gulp.src(paths.moduleTemplate)
    .pipe(concat('petition-tpl.js'))
    .pipe(gulp.dest(paths.root[0]))
    .pipe(concat('petition-tpl.min.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest(paths.root[0]))
});

gulp.task('api-testing', function () {
    return gulp.src(paths.testing[0])
        .pipe(jasmine());
});


gulp.task('watch', function() {
  gulp.watch('app/**/*', ['templates', 'module', 'moduleTemplate']);
});


gulp.task('default', ['templates', 'module', 'moduleTemplate', 'watch']);