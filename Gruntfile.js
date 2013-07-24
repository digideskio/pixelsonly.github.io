module.exports = function(grunt) {
  
  grunt.initConfig({
    less: {
      compile: {
        options: {
          paths: ['assets/less'],
          compress: true,
          yuicompress: true
        },
        files: {
          'assets/css/app.css': 'assets/less/main.less'
        }
      }
    },
    uglify: {
      options: {
        compress: {
          global_defs: {
            "DEBUG": false
          },
          dead_code: true
        }
      },
      my_target: {
        files: {
          'assets/js/app.js': ['assets/js/main.js']
        }
      }
    },
    watch: {
      less: {
        files: ['assets/less/*'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less', 'uglify']);
}