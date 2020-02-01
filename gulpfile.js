var gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nestedcss = require('postcss-nested');

gulp.task('default', function () {
  console.log('hahahah gulp task');
});

gulp.task('html', function () {
  console.log('working on html');
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/css/style.css')
    .pipe(postcss([cssvars, nestedcss, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });

});