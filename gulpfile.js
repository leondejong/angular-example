var gulp = require('gulp');
var $ = require('gulp-load-plugins')({ lazy: true });
var open = require('gulp-open');
var copy = require('gulp-copy');
var del = require('del');

var config = {
  build: './dst/build.js',
  plugins: [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js'
  ],
  index: {
    run: 'index.html',
    aot: 'src/assets/aot.html',
    gz: 'src/assets/gzip.html',
    jit: 'src/assets/jit.html'
  },
  dir: {
    root: './',
    src: './src',
    dst: './dst',
    jit: './jit',
    aot: './aot',
    assets: './src/assets'
  }
};

gulp.task('help', $.taskListing);
gulp.task('default', ['help']);

gulp.task('gzip', function () {
  var source = [].concat(config.plugins, config.build);
  return gulp.src(source)
    .pipe($.gzip())
    .pipe(gulp.dest(config.dir.dst));
});

gulp.task('copy-gzip', ['gzip', 'clean-index'], function () {
  return copyIndex(config.index.gz);
});

gulp.task('copy-aot', ['clean-index'], function () {
  return copyIndex(config.index.aot);
});

gulp.task('copy-jit', ['clean-index'], function () {
  return copyIndex(config.index.jit);
});

gulp.task('copy-assets', function () {
  return copyFiles([
    config.dir.src + '/**/*.css',
    config.dir.src + '/**/*.html'
  ], config.dir.jit);
});

gulp.task('clean', ['clean-index', 'clean-jit', 'clean-aot', 'clean-dst']);

gulp.task('clean-index', function (done) {
  del([config.index.run]).then(paths => {
    done();
  });
});

gulp.task('clean-jit', function (done) {
  del([config.dir.jit]);
});

gulp.task('clean-aot', function (done) {
  del([config.dir.aot]);
});

gulp.task('clean-dst', function (done) {
  del([config.dir.dst]);
});

gulp.task('open-browser', function(){
  gulp.src(__filename)
  .pipe(open({uri: 'http://127.0.0.1:3000'}));
});

function copyIndex(source) {
  return gulp.src(source)
    .pipe($.rename(config.index.run))
    .pipe(gulp.dest(config.dir.root));
}

function copyFiles(source, destination) {
  return gulp.src(source)
    .pipe(copy(destination));
}

function log() {
  var parameters = Array.prototype.slice.call(arguments);
  $.util.log.apply($.util, arguments);
}

module.exports = gulp;
