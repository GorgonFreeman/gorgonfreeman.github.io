const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Static server
gulp.task('start', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("src/styles/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/styles"))
    .pipe(browserSync.stream());
});