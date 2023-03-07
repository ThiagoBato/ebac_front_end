const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function sassCompiler() {
    return gulp
        .src("./src/sass/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build/css"));
}

function jsUglify() {
    return gulp.src("./src/js/*").pipe(uglify()).pipe(gulp.dest("./build/js"));
}

function imgCompress() {
    return gulp.src("./src/img/*").pipe(imagemin()).pipe(gulp.dest("./build/img"));
}

exports.default = function () {
    gulp.watch("./src/sass", { ignoreInitial: false }, gulp.series(sassCompiler));
    gulp.watch("./src/js", { ignoreInitial: false }, gulp.series(jsUglify));
    gulp.watch("./src/img", { ignoreInitial: false }, gulp.series(imgCompress));
};
