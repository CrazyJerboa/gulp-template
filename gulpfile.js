const gulp = require('gulp');

const pugToHtml = require('./src/gulp/tast_pugToHtml');
const styles = require('./src/gulp/task_styles');
const stylesComponents = require('./src/gulp/task_stylesComponents');
const stylesPages = require('./src/gulp/task_stylesPages');
const stylesLibs = require('./src/gulp/task_stylesLibs');
const scripts = require('./src/gulp/task_scripts');
const scriptsComponents = require('./src/gulp/task_scriptsComponents');
const scriptsLibs = require('./src/gulp/task_scriptsLibs');
const imageMinify = require('./src/gulp/task_imageMinify');
const fontsCopy = require('./src/gulp/task_fontsCopy');

const watch = require('./src/gulp/task_watch');

const clean = require('./src/gulp/task_clean');

const lighthouse = require('./src/gulp/task_lighthouse');

const dev = gulp.series(stylesComponents, stylesPages, scriptsComponents, scriptsLibs, gulp.parallel(imageMinify, styles, stylesLibs, scripts, pugToHtml, fontsCopy));

const build = gulp.series(clean, dev);

// module.exports.start = gulp.series(pugToHtml, styles, stylesLibs, scripts, scriptsLibs, imageMinify);

module.exports.clean = gulp.series(clean);
module.exports.build = gulp.series(build)

module.exports.watch = gulp.series(build, watch);

module.exports.lighthouse = gulp.series(build, lighthouse);
