module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            options: {
                port: 9000,
                server: 'test/server/server.js'
            }
        },
        karma: {
            headless: {
                singleRun: true,
                browsers: ['PhantomJS'],
                configFile: 'karma.conf.js'
            },
            head: {
                singleRun: true,
                browsers: ['Chrome'],
                configFile: 'karma.conf.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['express', 'karma:headless']);
};