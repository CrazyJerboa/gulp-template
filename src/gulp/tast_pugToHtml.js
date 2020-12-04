const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const pugLinter = require('gulp-pug-linter');
const htmlValidator = require('gulp-w3c-html-validator');
const bemValidator = require('gulp-html-bem-validator');
const htmlbeautify = require('gulp-html-beautify');

module.exports = pugToHtml = () => {
    return gulp.src('src/pages/**/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({
            reporter: 'default'
        }))
        .pipe(pug())
        .pipe(htmlValidator())
        .pipe(bemValidator())
        .pipe(htmlbeautify({
            indentSize: 2,
            unformatted: ['abbr', 'area', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'ins', 'kbd', 'keygen', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small', 'strong', 'sub', 'sup', 'template', 'time', 'u', 'var', 'wbr', 'text', 'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt']
        }))
        .pipe(gulp.dest('build'))
}