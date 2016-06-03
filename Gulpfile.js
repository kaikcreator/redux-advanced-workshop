var gulp = require('gulp');
var sass = require('gulp-sass');


var sassInputFolder =
'./scss/';
var sassInputStyle = `${sassInputFolder}styles.scss`;
var sassOutput = './style';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(sassInputStyle)
    // Run Sass on those files, log errors to console
    .pipe(sass(sassOptions).on('error', sass.logError))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(sassOutput));
});

//Watch task
gulp.task('sass-watch',function() {
    gulp.watch(`${sassInputFolder}**/*.scss`,['sass']);
});