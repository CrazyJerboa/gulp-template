const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

module.exports = imageMinify = () => {
    return gulp.src('src/assets/img/**/*')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            // imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('build/assets/img'))
}
