module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    uglify: {
      target: {
        files: {
          'js/scripts.js' : ['_/components/js/*.js']
        } //files
      } //target
    }, //uglify

    watch: {
      files: ['_/components/js/*.js'],
      tasks: ['uglify']
    } //watch

  }) //initconfig
} //exports
