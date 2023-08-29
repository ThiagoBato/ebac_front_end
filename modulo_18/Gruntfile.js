module.exports = function (grunt) {
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

    grunt.registerTask("default", ["less:production", "uglify"]);
};
