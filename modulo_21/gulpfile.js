/*
npm run build
npm run dev
*/

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function styles() {
    return gulp
        .src("./src/css/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/css"));
}

function images() {
    return gulp.src("./src/img/**/*").pipe(imagemin()).pipe(gulp.dest("./dist/img"));
}

function scripts() {
    return gulp.src("./src/js/*.js").pipe(uglify()).pipe(gulp.dest("./dist/js"));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch("./src/css/*.scss", gulp.parallel(styles));
    gulp.watch("./src/js/*.js", gulp.parallel(scripts));
};
