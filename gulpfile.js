var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var runSequence = require("run-sequence");
var del = require("del");

gulp.task("client:build-resources", () => {
    return browserify({"entries": "./client/src/js/index.jsx", "extensions": [ ".jsx", ".js" ], "debug": true})
            .transform(babelify , { "presets": ["es2015", "react"] })
            .bundle()
            .on("error", (error) => {
                console.log("Error: "+ error.message);
            })
            .pipe(source("app-min.js"))
            .pipe(gulp.dest("./dist/client"))
});

gulp.task("client:copy-resources", () => {
    return gulp.src("./client/src/index.html")
            .pipe(gulp.dest("./dist/client"));
});

gulp.task("client:clean" , () => {
    del("./dist/client");
});

gulp.task("client:build", (callback) => {
    runSequence("client:clean", "client:build-resources", "client:copy-resources", callback)
});

gulp.task("client:watch", () => {
    gulp.watch("./client/src/js/**/*[.jsx, .js]", ["client:build-resources"]);
});