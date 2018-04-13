var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var server = require("browser-sync").create();

gulp.task("styles", function() {
	return gulp.src("src/less/**/*.less")
		.pipe(less())
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(gulp.dest("src/css"))
		.pipe(server.stream());
});

gulp.task("server", ["styles"], function() {
	server.init({
		server: "src"
	});
	gulp.watch("src/less/**/*.less", ["styles"]);
	gulp.watch("src/*.html")
		.on("change", server.reload);	
});
