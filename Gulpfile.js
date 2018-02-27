val gulp = require ('gulp');
var sass =require('gulp-sass');

gulp.task('sass',funtion())
{
  gulp.src('scss/*.scss')
  .pipe(sass())

  .pipe(gulp.det('css/compiled.css'));
}
