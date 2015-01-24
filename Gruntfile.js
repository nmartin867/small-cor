module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            server: 'test/server/server.js',
            default_option: {}
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['express', 'karma']);
};