'use strict';

// --------------------------------------------------
// Imports
// --------------------------------------------------

// Required modules
const browserify = require('browserify');
const colors     = require('colors');
const gulp       = require('gulp');
const clean      = require('gulp-clean');
const reactify   = require('reactify');
const source     = require('vinyl-source-stream');

// --------------------------------------------------
// Gulp Tasks
// --------------------------------------------------

gulp.task('clean', function() {
  return gulp.src('app/dist', { read: false })
    .pipe(clean());
});

gulp.task('bundle', ['clean'], function() {
  return browserify({
    entries: 'app/src/main.jsx',
    debug: true
  }).transform(reactify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('app/dist'));
});

gulp.task('copy', ['bundle'], function() {
  return gulp.src(['app/src/index.html', 'app/lib/bootstrap-css/css/bootstrap.min.css', 'app/src/style.css'])
    .pipe(gulp.dest('app/dist'));
});

gulp.task('default', ['copy'], function() {
  console.log('Gulp completed...'.cyan);
});
