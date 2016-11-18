/**
 * Copyright 2016 Marius Runde
 * 
 * Gulp tasks to make the application ready to go.
 */
'use strict';

// --------------------------------------------------
// Imports
// --------------------------------------------------

// Required modules
const babelify   = require('babelify');
const browserify = require('browserify');
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

// Copy the HTML files into the dist directory
gulp.task('copy_html', ['clean'], function() {
  return gulp.src(['app/src/index.html'])
    .pipe(gulp.dest('app/dist'));
});

// Copy the CSS files into the dist directory
gulp.task('copy_css', ['copy_html'], function() {
  return gulp.src([
    'app/lib/bootstrap-css/css/bootstrap.min.css',
    'app/lib/font-awesome/css/font-awesome.min.css',
    'app/src/style.css'
  ])
    .pipe(gulp.dest('app/dist'));
});

// Copy the fonts into the dist/fonts directory
gulp.task('copy_fonts', ['copy_css'], function() {
  return gulp.src(['app/lib/font-awesome/fonts/*'])
    .pipe(gulp.dest('app/dist/fonts'));
});

// Bundle the JSX components
gulp.task('bundle_jsx', ['copy_fonts'], function() {
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
gulp.task('default', ['bundle_jsx']);

// --------------------------------------------------
// Gulp Tasks without Dependencies
// --------------------------------------------------

// Copy the CSS files into the dist directory
gulp.task('quick_copy_css', function() {
  return gulp.src(['app/src/style.css'])
    .pipe(gulp.dest('app/dist'));
});
