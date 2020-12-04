const gulp = require('gulp');
const plumber = require('gulp-plumber');

module.exports = fontsCopy = () => {
    return gulp.src('src/assets/fonts/**/*')
        .pipe(plumber())
        .pipe(gulp.dest('build/assets/fonts'));
}