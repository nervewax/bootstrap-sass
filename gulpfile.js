// dependencies
var gulp        = require('gulp');
var concat      = require('gulp-concat');
var cleanCss    = require('gulp-clean-css');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var prefix      = require('gulp-autoprefixer');
var rename      = require("gulp-rename");
var livereload  = require("gulp-livereload");

// sass
var css = [
	'./bootstrap/bootstrap.scss'
];

// tasks
gulp.task('css', function () {

	gulp.src(css)
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.init())
	.pipe(prefix({ browsers: ['> 2%', 'IE 9'] }))
	.pipe(concat('bootstrap.css'))
	.pipe(cleanCss({compatibility: 'ie9'}))
	.pipe(rename({
		extname: '.min.css'
	}))
	.pipe(sourcemaps.write('./maps'))
	.pipe(gulp.dest('./css'))
	.pipe(livereload());

});

gulp.task('default', ['css'], function () {

	gulp.watch([
		'./bootstrap/**/*.scss'
	], ['css']);

	livereload.listen();

});
