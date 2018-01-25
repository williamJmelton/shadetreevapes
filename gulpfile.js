// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var server = require('gulp-server-livereload');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload({ start: true }));
});

gulp.task('connect', function() {
    connect.server({
      root: './',
      livereload: true
    });
  });

  gulp.task('webserver', function() {
    gulp.src('./')
      .pipe(server({
        livereload: true,
        directoryListing: true,
        open: true
      }));
  });

// gulp.task('default', function() {
//     livereload.listen();
//     webserver();
//     gulp.watch('sass/**/*.scss', ['styles']);
//     gulp.watch('./*.html', ['html']);
// });

gulp.task('default', ['styles', 'webserver']);