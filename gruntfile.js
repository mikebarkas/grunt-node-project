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
      // Relaod server, default port.
      options: { livereload: true},

      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      }, //scripts

      html: {
        files: ['*.html']
      } //html

    } //watch

  }) //initconfig

  // Default task, started without params.
  grunt.registerTask('default', 'watch');

} //exports
