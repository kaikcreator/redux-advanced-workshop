var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './scss/*.scss';
var output = './style';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(input)
    // Run Sass on those files, log errors to console
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(output));
});

