const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

module.exports = scriptsLibs = () => {
    return gulp.src('src/assets/libs/**/*.js')
        .pipe(concat('libs.min.js'))
        .pipe(rename({
            basename: 'libs',
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/assets/scripts'))
}