module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
        project: {
            options: {
                paths: ['src/stylesheets/less', 'src/stylesheets/custom'],
                yuicompress: true
            },
            src: ['src/stylesheets/less/index.less', 'src/stylesheets/less/agency.less', 'src/stylesheets/less/custom.less'],               
            dest: 'src/stylesheets/style.css'
        }
    },
    postcss: {
        options: {
            map: {
                inline: false,
                sourcesContent: false
            },
            processors: [
                require('autoprefixer-core')({
                    browsers: ['last 2 versions']
                })
            ]
        },
        dist: {
            src: 'src/stylesheets/style.css'
        }
    },
    cssmin: {
        options: {
            root: 'src/stylesheets/',
            sourceMap: true,
            restructuring: false
        },
        dist: {
            files: {
                'build/<%= pkg.version %>/css/style.min.css': ['src/stylesheets/style.css']
            }
        }
    },
    uglify: {
        options: {
            sourceMap: true,
            sourceMapName: 'build/<%= pkg.version %>/js/youngleaders.js.map',
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
            src: [
                'bower_components/jquery/dist/jquery.js',
                'src/javascripts/bootstrap.min.js',
                'src/javascripts/classie.js',
                'src/javascripts/cbpAnimatedHeader.js',
                'src/javascripts/agency.js',
                'src/javascripts/youngleaders.js'
            ],
            dest: 'build/<%= pkg.version %>/js/youngleaders.min.js'
        }
    },
    watch: {
        css: {
            files: ['src/stylesheets/less/**/*.less'],
            tasks: ['less', 'postcss', 'cssmin']
        }
    }
});

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.registerTask('default', ['concat', 'less']);
    grunt.registerTask('default', [
        'less',
        'postcss',
        'cssmin',
        'uglify',
        'watch'
    ]);
};
