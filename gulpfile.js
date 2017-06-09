
/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')(),
    del = require('del'),
    shell = require('gulp-shell'),
	  cordova = require('cordova-lib').cordova.raw; // promises API


var APP_PATH = './app',
    STAGING_PATH = "./staging"
    CORDOVA_PATH = './native/www';


gulp.task('del-cordova', function(cb) {
    del([ CORDOVA_PATH + '/*' ])
        .then(function() {
            cb();
        });
});

gulp.task('compile', [ 'del-cordova' ], function(cb) {
    return gulp.src([ APP_PATH + '/**/*' ])
               .pipe(gulp.dest(CORDOVA_PATH))
               .pipe(gulp.dest(STAGING_PATH));
});

gulp.task('build', [ 'compile' ], function(cb) {
	  process.chdir(__dirname + '/native');
    cordova.build({ platforms : ['android']}).then(function() {
       process.chdir('../');
       cb();
    });
});

gulp.task('emulate', [ 'compile' ], function(cb) {
    process.chdir(__dirname + '/native');
    cordova.run({ platforms: [ 'ios' ] }).then(function() {
	   process.chdir('../');
	   cb();
	});
});

gulp.task('default', function() {
	return gutil.log('Gulp is running!')
});





