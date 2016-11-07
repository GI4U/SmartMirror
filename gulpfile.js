'use strict';

// --------------------------------------------------
// Imports
// --------------------------------------------------

// Required modules
const babelify   = require('babelify');
const browserify = require('browserify');
const colors     = require('colors');
const gulp       = require('gulp');
const clean      = require('gulp-clean');
const source     = require('vinyl-source-stream');

// --------------------------------------------------
// Gulp Tasks
// --------------------------------------------------

// Clean the dist directory
gulp.task('clean', function() {
  return gulp.src('app/dist', { read: false })
    .pipe(clean());
});

// Copy the HTML and CSS files into the dist directory
gulp.task('copy', ['clean'], function() {
  return gulp.src(['app/src/index.html', 'app/lib/bootstrap-css/css/bootstrap.min.css', 'app/src/style.css'])
    .pipe(gulp.dest('app/dist'));
});

// Bundle the JSX components
gulp.task('bundle', ['copy'], function() {
  return browserify({
    entries: './app/src/main.jsx',
    extensions: ['.jsx'],
    debug: true
  }).transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('app/dist'));
});

// Default gulp task to start the toolchain
gulp.task('default', ['bundle']);
