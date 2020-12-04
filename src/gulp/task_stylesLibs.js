const gulp = require('gulp');
const plumber = require('gulp-plumber');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

module.exports = stylesLibs = () => {
    return gulp.src('src/assets/libs/**/*.css')
        .pipe(plumber())
        .pipe(concat('libs.min.css'))
        .pipe(cleanCSS({
            debug: true,
            compatibility: '*'
        }, details => {
            console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
        }))
        .pipe(rename({
            basename: 'libs',
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/assets/styles'));
}