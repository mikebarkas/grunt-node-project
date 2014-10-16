module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.initConfig({

    uglify: {
      target: {
        files: {
          'js/scripts.js' : ['_/components/js/*.js']
        } //files
      } //target
    }, //uglify

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, //compass

    watch: {
      // Relaod server, default port.
      options: { livereload: true},

      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      }, //scripts
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      }, //sass

      html: {
        files: ['*.html']
      } //html

    } //watch

  }) //initconfig

  // Default task, started without params.
  grunt.registerTask('default', 'watch');

} //exports
