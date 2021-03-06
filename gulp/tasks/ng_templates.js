/**
 * Creates .js files containing template cache entries for templates used by our ng modules.
 */

var gulp = require('gulp');
var minifyHTML = require('gulp-minify-html');
var templateCache = require('gulp-angular-templatecache');

var config = require('../config').ngTemplates;
var handleErrors = require('../util/handle_errors');

gulp.task('ngTemplates', function() {

  return gulp.src(config.paths)
    .on('error', handleErrors)
    .pipe(minifyHTML({
      quotes: true
    }))
    .pipe(templateCache(config.templateFileName, {
      module: config.ngModuleName,
      moduleSystem: config.moduleSystem,
      root: config.fileRoot
    }))
    .pipe(gulp.dest(config.dest));

});
