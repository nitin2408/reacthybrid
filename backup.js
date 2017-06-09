// //create a default task and just log a message
	


// gulp.task('native', function(done) {
//   process.chdir('native/');
//   done();
// });


// // gulp.task('native:clean', function(done) {
  
// // });


//  gulp.task('native:copy', function(done) {
//  	var b = gulp.src("staging/*.html")
//   	var a = gulp.src("staging/*/**");
//   	process.chdir('native/');
//   	done();
//   	b.pipe(gulp.dest("www/"))
//     a.pipe(gulp.dest("www/"))
// });

//  gulp.task('html:copy',function(){
//    gulp.src("app/*.html")
//    .pipe(gulp.dest("staging/"))
//  })

//  gulp.task('build:copy', ['html:copy'],function(){
//    gulp.src("app/*/**")
//    .pipe(gulp.dest("staging/"))
//  })

//  gulp.task("build", ["build:copy", "native:copy"], function(){
//  	process.chdir("native/");
//     return cordova.build();
//  })

    


var config = {
    cordova: {
      base: ''
    },

    cordovacli: {
      options: {
        path: 'native'
      },
      // cordova: {
      //   options: {
      //     command: ['create','platform','plugin','prepare','build'],
      //     platforms: ['ios','android'],
      //     plugins: ['device',
      //       'network-information',
      //       'inappbrowser',
      //       'https://github.com/katzer/cordova-plugin-badge.git',
      //       'https://github.com/phonegap-build/PushPlugin.git',
      //       'https://github.com/mkuklis/phonegap-websocket'
      //     ],
      //     path: '<%= yeoman.native %>',
      //     id: 'com.ovrc.ovrc',
      //     name: 'OvrC'
      //   }
      // },
      create: {
        options: {
          command: 'create',
          id: 'com.ovrc.ovrc',
          name: 'OvrC'
        }
      },
      add_platforms: {
        options: {
          command: 'platform',
          action: 'add',
          platforms: ['ios', 'android']
        }
      },
      add_plugins: {
        options: {
          command: ['plugin','prepare'],
          action: 'add',
          plugins: [
            'device',
            'network-information',
             'inappbrowser',
            'https://github.com/katzer/cordova-plugin-badge.git',
            'https://github.com/phonegap-build/PushPlugin.git',
            'https://github.com/mkuklis/phonegap-websocket'
          ]
        }
      },
      build_ios: {
        options: {
          command: 'build',
          platforms: ['ios']
        }
      },
      build_android: {
        options: {
          command: 'build',
          platforms: ['android']
        }
      },
      run_ios: {
        options: {
          command: 'run',
          platforms: ['ios']
        }
      },
      run_android: {
        options: {
          command: 'run',
          platforms: ['android'] ,
          args: ['--release','--device']
        }
      },
      test_android: {
        options: {
          command: 'run',
          platforms: ['android'] ,
          args: ['--device']
        }
      },
      emulate_android: {
        options: {
          command: 'emulate',
          platforms: ['android']
        }
      },
      emulate_ios: {
        options: {
          command: 'emulate',
          platforms: ['ios']
        }
      },
      release_ios: {
          options: {
              command: 'build',
              platforms: ['ios'],
              args : ['--release']
          }
      },
      build_android_and_sign : {
        options: {
          command: 'build',
          platforms: ['android'],
          args : ['--release']
        }
      }
    }

  };


