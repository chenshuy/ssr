const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const config = require('./build/config');

gulp.task('server', function () {
  nodemon({
    script: './build/www.js',
    watch: ["server"],
    ext: "js json",
    env: {
      'NODE_ENV': 'development'
    }
  }).on('start', function () {
    browserSync.init({
      proxy: 'http://localhost:' + config.port,
      files: [
        "public/static/style/**",
        "server/"
      ],
      port: 3000
    }, function () {
      // console.log("browser refreshed.");
    });
  });
});
