const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = scriptsComponents = () => {
    return gulp.src('src/components/**/*.js')
        .pipe(concat('components.js'))
        .pipe(gulp.dest('src/assets/scripts'));
}