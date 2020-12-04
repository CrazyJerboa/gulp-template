const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const shorthand = require('gulp-shorthand');
const autoprefixer = require('gulp-autoprefixer');

module.exports = styles = () => {
    return gulp.src('src/assets/styles/styles.sass')
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(shorthand())
        .pipe(gulp.dest('build/assets/styles'));
}