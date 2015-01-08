var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')({
  rename: {
    'gulp-angular-templatecache': 'templateCache',
    'gulp-angular-htmlify': 'htmlify'
  }
});

var paths = {
  scripts: [
    'bower_components/angular/angular.min.js', 
    'bower_components/ng-lodash/build/ng-lodash.min.js', 
    '../../dist/actions.js', 
    '../../dist/actions-tpl.js', 
    // 'bower_components/angular-animate/angular-animate.min.js',
    // 'bower_components/angular-messages/angular-messages.min.js',
    // 'bower_components/angular-resource/angular-resource.min.js',
    // 'bower_components/angular-sanitize/angular-sanitize.min.js',
    // 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    // 'bower_components/angular-strap/dist/angular-strap.min.js',
    // 'bower_components/angular-strap/dist/angular-strap.tpl.min.js',
    // 'bower_components/satellizer/satellizer.min.js',
    // 'bower_components/angular-loading-bar/build/loading-bar.min.js',
    'app/app.js',
    'app/templates.js',
  ],
  css: [ 
    // 'bower_components/ionicons/css/ionicons.min.css',
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    // 'bower_components/animate.css/animate.min.css',
    'app/**/*.less'
  ],
  template_index: 'app/index.jade',
  templates: 'app/pages/**/*.jade',
  root: [ '../../example/' , '../../example/', '../../example/fonts/'],
  testing: ['../tests/api/**/*.js'],
  fonts: ['bower_components/ionicons/fonts/*.*']
};

gulp.task('clean', function () {  
  return gulp.src(paths.root[0], {read: false})
    .pipe(clean());
});

gulp.task('less', function () {
  gulp.src(paths.css)
    .pipe($.concat('style.less'))
    .pipe($.less())
    .pipe($.concat('style.css'))
    .pipe($.minifyCss({keepBreaks:false}))
    .pipe(gulp.dest(paths.root[1]))
    .pipe($.filesize())
    .on('error', $.util.log)
});

gulp.task('fonts', function () {
  gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.root[2]));
});

gulp.task('template_index', function() {
  gulp.src(paths.template_index)
    .pipe($.jade({ pretty: true}))
    .pipe($.htmlify())
    .pipe(gulp.dest('../../example/'));
});

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe($.jade())
    .pipe($.htmlify())
    .pipe($.templateCache({
        // root: "/partials/",
        standalone: false,
        module: "actionExample",
      }))
    .pipe(gulp.dest('app/'));
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe($.concat('app.js'))
    .pipe(gulp.dest(paths.root[0]))
    .pipe($.rename('app.min.js'))
    .pipe($.uglify({mangle: false}))
    .pipe(gulp.dest(paths.root[0]))
    .pipe($.filesize())
    .on('error', $.util.log)
});

gulp.task('api-testing', function () {
    return gulp.src(paths.testing[0])
        .pipe($.jasmine());
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch([ paths.css, paths.scripts, paths.templates, '*.jade' ], ['templates', 'template_index', 'less', 'scripts']);
});


gulp.task('default', ['templates', 'template_index', 'scripts', 'less', 'watch']);