const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

gulp.task('css', function () {
  return gulp.src('app/public/css/main.css')
    .pipe(concat('main.css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/public/css'))
})

gulp.task('js', function () {
  return gulp.src(['app/public/scripts/*.js'])
    .pipe(concat('scripts.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/public/scripts'))
})

gulp.task('copy-views', function () {
  return gulp.src(['app/views/**/*.ejs'])
    .pipe(gulp.dest('dist/views'))
})

gulp.task('copy-routes', function () {
  return gulp.src(['app/routes/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/routes'))
})

gulp.task('copy-controllers', function () {
  return gulp.src(['app/controllers/**/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/controllers'))
})

gulp.task('watch', function () {
  gulp.watch('app/*.css', ['css'])
  gulp.watch('app/*.js', ['js'])
})

gulp.task('default', gulp.series('css', 'js', 'copy-views', 'copy-controllers', 'copy-routes'), gulp.parallel('watch'))