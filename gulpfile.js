const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Static server
gulp.task('start', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});