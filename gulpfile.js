var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var src = ['index.js', 'lib/**.js', 'test/**/*.*'];

gulp.task('lint', function() {
  return gulp.src(src)
    .pipe(jshint())
    .pipe(jshint.reporter( 'jshint-stylish' ))
});

gulp.task('test', ['lint'], function(done) {
  return gulp.src('test/*.spec.js', {read: false})
    .pipe(mocha());
});

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('mainStylesheet.hbs'))
    .pipe(gulp.dest('template/partials'));
});

gulp.task('watch', function() {
  gulp.watch(src, ['lint']);
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'lint', 'test', 'connect', 'watch']);





