/*
 * Gruntfile for ngCordovaMocks
 * http://www.ecofic.com
 *
 */

'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        moduleInit: '\n\'use strict\';\n' +
                    'var ngCordovaMocks = angular.module(\'ngCordovaMocks\', []);',
        banner: '/**\n * Copyright (c) <%= grunt.template.today("yyyy") %> Ecofic LLC. All rights reserved.\n' +
                ' * http://www.ecofic.com\n\n' +
                ' * Licensed under the Apache License, Version 2.0 (the "License");\n' +
                ' * you may not use this file except in compliance with the License.\n' +
                ' * You may obtain a copy of the License at\n' +
                ' *   http://www.apache.org/licenses/LICENSE-2.0\n\n' +
                ' * Unless required by applicable law or agreed to in writing, software\n' +
                ' * distributed under the License is distributed on an "AS IS" BASIS,\n' +
                ' * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n\n' +
                ' * See the License for the specific language governing permissions and\n' +
                ' * limitations under the License.\n*/',
        clean: {
            mocks: [
                'dist/**/*'
            ],

            temp: [
                'dist/temp'
            ]
        },

        concat: {
            mocks: {
                src: [ 'dist/temp/*.js' ],
                dest: 'dist/ngCordovaMocks.js'
            },
        },

        ngdocs: {
            options: {
                dest: 'dist/docs',
                scripts: ['../app.min.js'],
                html5Mode: true,
                startPage: '/api',
                title: "ngCordovaMocks Docs",
                titleLink: "/api",
                bestMatch: true
            },
            api: {
                src: [
                    'src/**/*.js', 
                    '!src/**/*.spec.js'
                ],
                title: 'ngCordovaMocks Docs'
            }
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
                src: 'dist/ngCordovaMocks.js',
                options: {
                    specs: 'test/*.js',
                    vendor: [
                        'bower_components/angularjs/angular.min.js',
                        'bower_components/angular-mocks/angular-mocks.js'
                    ]
                }
            }
        },

        replace: {
            mocks: {
                src: [ 'src/**/*.js' ],
                dest: 'dist/temp/',
                replacements: [{
                    from: '<%= banner %>',
                    to: ''
                }]
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
            module: {
                options: {
                    position: 'top',
                    linebreak: true,
                    banner: '<%= moduleInit %>'
                },  
                files: {
                    src: [ 'dist/ngCordovaMocks.js', 'dist/ngCordovaMocks.min.js' ]
                }                
            },
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
    grunt.registerTask('test', ['clean:mocks', 'replace:mocks', 
        'concat:mocks', 'clean:temp', 'usebanner:module', 
        'uglify:mocks', 'usebanner:mocks', 'jasmine:mocks', 'ngdocs:api']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint:mocks', 'test']);    
};