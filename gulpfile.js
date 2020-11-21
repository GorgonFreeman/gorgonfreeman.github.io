const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
var injectPartials = require('gulp-inject-partials');

// Static server
gulp.task('start', function() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('src/styles/*.scss', gulp.parallel(['sass']));
  gulp.watch('src/assets/*', gulp.parallel(['assets']));
  gulp.watch('src/html/**/*', gulp.parallel(['html']));
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/styles'))
    .pipe(browserSync.stream());
});

gulp.task('assets', function() {
  return gulp.src('src/assets/*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('html', function() {
  return gulp.src('./src/html/index.html')
    .pipe(injectPartials())
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.parallel(['sass', 'assets', 'html'])); 