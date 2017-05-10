const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const run = require('gulp-run')
const nodemon = require('gulp-nodemon')
const del = require('del')
const eslint = require('gulp-eslint')

const src = './src'
const dist = './dist'

gulp.task('clean', function () {
  del(`${dist}/*`)
})

gulp.task('build', function () {
  let stream = gulp.src(`${src}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('./', { sourceRoot: `.${src}/` }))
    .pipe(gulp.dest(`${dist}`))
  return stream
})

gulp.task('lint', () => {
  let stream = gulp.src(['src/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
  // .pipe(eslint.failAfterError())
  return stream
})

gulp.task('watch', ['lint', 'build'], function () {
  // gulp.watch(['src/**/*.js', '!node_modules/**'], ['lint'])

  let stream = nodemon({
    script: `${dist}/app.js`,
    watch: src,
    tasks: ['build']
  })

  return stream
})

gulp.task('default', ['clean', 'watch'])
