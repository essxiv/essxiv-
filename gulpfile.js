const path = require('path');

const webpack = require('webpack-stream');

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const less = require('gulp-less');
const watch = require('gulp-watch');

//  file paths
const webpackConfig = require('./webpack.config.js');
const lessStyles = './client/styles/components';

gulp.task('watch', () => {

    let watcher = gulp.watch(lessStyles + '/*.less', [ 'less' ])

    watcher.on('change', (event) => {
        console.log('File: ' + event.path + ' was changed!')
    });
});

gulp.task('less', () => {
    return gulp.src(lessStyles + '/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(concat('AppStylesMin.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./client/dist'));
})

gulp.task('webpack', () => {
    return gulp.src('./webpack.config.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./client/dist'));
})

// gulp.task('run-dev', () => {
//
// })

gulp.task('default', [ 'less', 'webpack', 'watch' ], () => {
    console.log('Gulp is running correctly..');
});