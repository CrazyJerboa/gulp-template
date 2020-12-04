const gulp = require('gulp');
const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

module.exports = scripts = () => {
    return gulp.src('src/assets/scripts/**.js')
        // .pipe(eslint())
        // .pipe(eslint.format())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build/assets/scripts'));
}
