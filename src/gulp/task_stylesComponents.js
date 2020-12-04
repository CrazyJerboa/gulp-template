const gulp = require('gulp');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

module.exports = stylesComponents = () => {
    return gulp.src('src/components/**/*.sass')
        .pipe(plumber())
        .pipe(concat('_components.sass'))
        .pipe(gulp.dest('src/assets/styles'));
}