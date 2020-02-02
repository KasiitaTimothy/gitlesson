var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssvars = require('postcss-simple-vars'),
  nestedcss = require('postcss-nested'),
  cssImport = require('postcss-import'),
  cssMixin = require('postcss-mixins');

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/css/style.css')
    .pipe(postcss([cssImport, cssMixin, cssvars, nestedcss, autoprefixer]))
    .on('error', function (erroInfo) {
      console.log(erroInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
