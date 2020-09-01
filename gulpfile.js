var gulp = require('gulp'),
	inlineCss = require('gulp-inline-css'),
	htmlmin = require('gulp-htmlmin'),
	browserSync = require("browser-sync");


gulp.task('css', function () {
	return gulp.src('app/**/*.html')
		.pipe(inlineCss())
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist/'))
		.pipe(
			browserSync.reload({
				stream: true,
			}),
		);
});

gulp.task('img', function () {
	return gulp.src('app/img/**/*.*')
		.pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function () {
	gulp.watch('app/*.*', gulp.parallel('css'));
});

gulp.task("browser-sync", function () {
	browserSync.init({
		server: {
			baseDir: "dist/",
		},
		host: "192.168.0.104",
	});
});


gulp.task('default', gulp.parallel('css', 'img', 'browser-sync', 'watch'));