var path = require('path');
module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            custom: {
                options: {
                    port: 9000,
                    bases: 'www-root',
                    server: path.resolve('tests/server/server')
                }
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
    grunt.registerTask('test', ['express', 'karma:headless']);
};