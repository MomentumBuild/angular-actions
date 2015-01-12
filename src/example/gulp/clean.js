module.exports = function(gulp, vars, $, args) {
gulp.task('clean', function () {  
  return gulp.src(vars.root, {read: false})
    .pipe($.clean({force: true}));
});
}