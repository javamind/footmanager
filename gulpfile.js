'use strict';

var browserSync = require('browser-sync').create();
var gulp = require('gulp');

// Launches static server
gulp.task('serve', function() {
  browserSync.init({
    startPath: '/index.html',
    server: {
      baseDir: 'app'
    }
  });
  //browserSyncInit(app.basedir);
  gulp.watch('app/**/*.*');
});
