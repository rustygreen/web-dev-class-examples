'use strict';
module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "dist/styles.css": "src/main.less"
        }
      }
    }
  });
};