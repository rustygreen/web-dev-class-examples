// Generated on 2015-02-13 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    uglify: {
      my_target: {
        //options: {
        //  sourceMap: true,
        //  sourceMapName: 'path/to/sourcemap.map'
        //},
        files: {
          'dist/output.min.js': ['src/**/*.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify']);
};