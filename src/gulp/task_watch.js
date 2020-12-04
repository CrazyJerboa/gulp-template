const gulp = require('gulp')

const imageMinify = require('./task_imageMinify');
const styles = require('./task_styles');
const stylesPages = require('./task_stylesPages');
const stylesComponents = require('./task_stylesComponents');
const scripts = require('./task_scripts');
const scriptsComponents = require('./task_scriptsComponents');
const pugToHtml = require('./tast_pugToHtml');

const server = require('browser-sync').create()

readyReload = (cb) => {
    server.reload();
    cb();
}

module.exports = watch = (cb) => {
    server.init({
        server: 'build',
        notify: false,
        open: true,
        cors: true
    })

    gulp.watch(
        'src/assets/img/**/*',
        gulp.series(imageMinify, readyReload)
    );

    gulp.watch(
        'src/components/**/*.sass',
        gulp.series(stylesComponents, readyReload)
    );

    gulp.watch(
        'src/pages/**/*.sass',
        gulp.series(stylesPages, readyReload)
    );

    gulp.watch(
        'src/assets/styles/*.sass',
        gulp.series(styles, readyReload)
    );

    gulp.watch(
        'src/assets/scripts/**.js',
        gulp.series(scripts, readyReload)
    );

    gulp.watch(
        'src/components/**/*.js',
        gulp.series(scriptsComponents, scripts, readyReload)
    );

    gulp.watch(
        ['src/pages/**/*.pug', 'src/components/**/*.pug'],
        gulp.series(pugToHtml, readyReload)
    );

    gulp.watch(
        'src/components/**/*.pug',
        gulp.series(readyReload)
    );

    return cb()
}