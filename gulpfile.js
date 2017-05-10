const gulp = require('gulp')
const webserver = require('gulp-webserver')

const src = './src'

// =============================================================================
// Web
gulp.task('web', function() {
    gulp.src(src + '/')
        .pipe(webserver({
            port: 3000,
            livereload: true,
            livereloadport: 8283,
            open: true
        }))
})

gulp.task('default', ['web'])
