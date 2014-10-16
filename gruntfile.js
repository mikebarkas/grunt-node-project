module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      target: {
        files: {
          'js/scripts.js' : ['_/components/js/*.js']
        } //files
      } //target
    } //uglify
  }) //initconfig
} //exports
