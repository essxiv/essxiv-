const path = require('path');

const webpack = require('webpack-stream');

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const less = require('gulp-less');
const watch = require('gulp-watch');
const mocha = require('gulp-mocha');

//  file paths
const webpackConfig = require('./webpack.config.js');
const lessStyles = './client/styles/components';
const jsScripts = './client/js/*.js';
const jsLib = './client/js/lib/*.js';

// Watch and Recompile
gulp.task('watch', () => {
    let watcher = gulp.watch(lessStyles + '/*.less', [ 'less' ])
    let scripts = gulp.watch(jsScripts, [ 'scripts' ]);
    let partials = gulp.watch(lessStyles + '/partials/*.less', [ 'less' ])
    let lib = gulp.watch(jsLib, ['scripts']);
    
    watcher.on('change', (event) => {
        console.log('CSS Change: ' + event.path)
    });
    scripts.on('change', (event) => {
        console.log('JavaScript Change: ' + event.path)
    });
    partials.on('change', (event) => {
        console.log('Partials CSS Change: ' + event.path)
    })
    lib.on('change', (event) => {
        console.log('js lib has changed' + event.path);
    })
});

gulp.task('test', () => {
    // return gulp.src('./test/**/*.js', { read: false })
    //     .pipe((mocha({ reporter: 'spec' })))
})

gulp.task('scripts', () => {
    return gulp.src([ jsScripts, jsLib ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./client/dist'))
})

// Less into MinCss
gulp.task('less', () => {
    return gulp.src([lessStyles + '/*.less', lessStyles + '/partials/*.less' ])
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concat('AppStylesMin.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./client/dist'));
})

// Webpack Bundler
gulp.task('webpack', () => {
    return gulp.src('./webpack.config.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./client/dist'));
})

gulp.task('default', [ 'test', 'scripts', 'less', 'webpack', 'watch' ], () => {
    console.log('Gulp is running correctly..');
});
