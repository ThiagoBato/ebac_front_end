module.exports = function (grunt) {
    //Grunt initial command to get the script from the package.json
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "dev/css/main.css": "./src/css/main.less",
                },
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "dist/css/main.min.css": "./src/css/main.less",
                },
            },
        },
        uglify: {
            target: {
                files: {
                    "dist/js/main.min.js": "src/js/main.js",
                },
            },
        },
    });
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    //Default taks + [other tasks]
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["less:production", "uglify"]);
};
