/*
 * Gruntfile for ngCordovaMocks
 * http://www.ecofic.com
 *
 */

'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        banner: '/*\nCopyright <%= grunt.template.today("mm-dd-yyyy") %> Ecofic LLC \n' +
                'http://www.ecofic.com\n\n' +
                'Licensed under the Apache License, Version 2.0 (the "License");\n' +
                'you may not use this file except in compliance with the License.\n' +
                'You may obtain a copy of the License at\n\n' +
                '    http://www.apache.org/licenses/LICENSE-2.0\n\n' +
                'Unless required by applicable law or agreed to in writing, software\n' +
                'distributed under the License is distributed on an "AS IS" BASIS,\n' +
                'WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
                'See the License for the specific language governing permissions and\n' +
                'limitations under the License.\n' +
                '*/',

        clean: {
            mocks: [
                'dist/**/*'
            ]
        },

        concat: {
            mocks: {
                src: [ 'src/*.js' ],
                dest: 'dist/ngCordovaMocks.js'
            },
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    'node_modules/*',
                    'dist/*',
                    'src/vendor/*'
                ]
            },
            mocks: {
                files: {
                    src: [ 'src/**/*.js' ]
                }
            }
        },

        jasmine: {
            mocks: {
                src: 'dist/ngCordovaMocks.min.js',
                options: {
                    specs: 'test/*.js',
                    vendor: [
                        'bower_components/angularjs/angular.min.js',
                        'bower_components/angular-mocks/angular-mocks.js'
                    ]
                }
            }
        },

        uglify: {
            mocks: {
                files: {
                    'dist/ngCordovaMocks.min.js': ['dist/ngCordovaMocks.js']
                },
                options: {
                    compress: true,
                    preserveComments: false
                }
            }
        },

        usebanner: {
            mocks: {
                options: {
                    position: 'top',
                    linebreak: true,
                    banner: '<%= banner %>'
                },
                files: {
                    src: [ 'dist/ngCordovaMocks.js', 'dist/ngCordovaMocks.min.js' ]
                }
            }
        }
    });

    // load all grunt task details
    require('load-grunt-tasks')(grunt);

    // show elapsed time at the end
    require('time-grunt')(grunt);     

    // Setup the "test" task
    grunt.registerTask('test', ['clean', 'concat:mocks', 'uglify:mocks', 'usebanner:mocks', 'jasmine:mocks']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint:mocks', 'test']);    
};