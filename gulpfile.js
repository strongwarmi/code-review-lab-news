var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');

var config = {
  source: './src/',
  dist: './public/'
};

var paths = {
  assets: "assets/",
  html: "**/*.html",
  img: "img/**",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",

  utils: "utils/**",
  mainJS: "js/**/*.js",
  js:"js/*.js",
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  img: config.source + paths.assets + paths.img,
  js: config.source + paths.assets +  paths.js,

  sass: config.source + paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS
};

gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass", function () {
  gulp.src(sources.rootSass)
      .pipe(sass({
        outputStyle: "expanded"
      }).on("error", sass.logError))
      .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", function () {
  gulp.src(sources.rootJS)
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('img', ()=> {
  gulp.src(sources.img)
      .pipe(gulp.dest(config.dist + paths.assets + "img"));
});

//tareas watch
gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {

  browserSync.reload();
  done();
});

gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('serve', ['nodemon'], function() {
  browserSync.init(null, {
    files: ["public/**/*.*"],
    port: 7000,
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.img, ["img-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.rootJS, ["js-watch"]);
});

gulp.task('nodemon', function (cb) {

  var started = false;

  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});