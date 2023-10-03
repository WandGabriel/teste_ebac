module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': './src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'main.min.css': './src/styles/main.less'
                }
            }
        },
        concurrent: {
            target: ['less']
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        }
    })

    grunt.registerTask('helloGrunt',function(){
        console.log ("Olá, aqui em fala é o GRUNT!")
     })

     grunt.loadNpmTasks('grunt-contrib-less');
     grunt.loadNpmTasks('grunt-concurrent');
     grunt.loadNpmTasks('grunt-contrib-watch');

     grunt.registerTask('default', ['watch']);
}





