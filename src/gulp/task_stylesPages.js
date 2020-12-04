const gulp = require('gulp');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');

module.exports = stylesPages = () => {
    return gulp.src('src/pages/**/*.sass')
        .pipe(plumber())
        .pipe(concat('_pages.sass'))
        .pipe(gulp.dest('src/assets/styles'));
}