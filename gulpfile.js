var gulp = require("gulp"),
	minifyCss = require("gulp-clean-css"),
	uglify = require("gulp-uglify"),
	minifyHtml=require("gulp-htmlmin")
	sass = require("gulp-sass"),
	livereload = require("gulp-livereload");

// CSS 压缩
gulp.task("minifyCss", function(){
	gulp.src("css/*.css")
		.pipe(minifyCss())
		.pipe(gulp.dest("dist"));
});

// JS 压缩
gulp.task("minifyJs", function(){
	gulp.src("js/*.js")
		.pipe(uglify({
			compress : true
		}))
		.on("error", function(err){ // 出现错误后，在控制台上打印错误消息
			console.log(err.message);
		})
		.pipe(gulp.dest("dist/js"));
});

//html压缩
gulp.task("minifyHtml",function(){
	gulp.src("html/*.html")
		.pipe(minifyHtml({collapseWhitespace: true}))
		.pipe(gulp.dest("dist/html"));
});

// 编译 SASS
gulp.task("compileSass", function(){
	gulp.src("scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("dist/css"))
		.pipe(livereload());
});

// 监视任务
gulp.task("watch", function(){
	livereload.listen(); // livereload 监听
	// 监视 .scss 文件的修改，自动编译
	// gulp.watch("scss/*.scss", ["compileSass"]);

	// 监视 .html 文件的修改
	gulp.watch(["*.html","**/*.html", "html/*.html","**/*.css", "!node_modules/**/*.css"], function(arg){
		livereload.changed(arg.path);
	});
});

gulp.task("default", ["minifyCss", "minifyJs", "watch"]);