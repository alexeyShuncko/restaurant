import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import csso from 'gulp-csso';
import include from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import { deleteAsync } from 'del';
import gulp from 'gulp';
import browserSync from 'browser-sync';

const { src, dest, series, watch } = gulp;
const sass = gulpSass(dartSass);

function htmlTask() {
  return src('src/**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

function jsTask() {
  return src('src/**.js').pipe(dest('dist'));
}

function imgTask() {
  return src('src/img/*.png').pipe(dest('dist/img'));
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(dest('dist'));
}

function serve() {
  browserSync.init({
    server: './dist',
  });
  watch('src/**/*.*', series(clear, scss, jsTask, imgTask, htmlTask)).on(
    'change',
    browserSync.reload
  );
}

function clear() {
  return deleteAsync('dist');
}
gulp.task('default', series(clear, scss, jsTask, imgTask, htmlTask, serve));
