var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var server = require("browser-sync").create();
var plumber = require("gulp-plumber");
var imagemin = require("gulp-imagemin");
var concat = require("gulp-concat");

gulp.task("styles", function() {
	return gulp.src(["src/less/**/*.less", "!src/less/**/variables.less"])
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest("src/css"))
		.pipe(server.stream());
});

gulp.task("svg", function() {
	return gulp.src('src/img/**/*.svg')
		.pipe(imagemin([
			imagemin.svgo()

		]))
		.pipe(gulp.dest("src/img"));
});

gulp.task("jslibs", function() {
	return gulp.src("src/js/**/*.min.js")
		.pipe(concat("libs.js"))
		.pipe(gulp.dest("src/js"));
});
gulp.task("server", ["styles"], function() {
	server.init({
		server: "src"
	});
	gulp.watch("src/less/**/*.less", ["styles"]);
	gulp.watch("src/*.html")
		.on("change", server.reload);	
});


