/**
 * Created by luzhin.dm on 31.03.2016.
 */
'use strict';

var gulp = require('gulp'),
		watch = require('gulp-watch'),
		prefixer = require('gulp-autoprefixer'),
		uglify = require('gulp-uglify'),
		sass = require('gulp-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		rigger = require('gulp-rigger'),
		cssmin = require('gulp-cssmin'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		rimraf = require('rimraf'),
		browserSync = require("browser-sync"),
		plumber = require("gulp-plumber"),
		reload =browserSync.reload;


var path = {
	build: {
		html: 'build/',
		elements: 'build/elements',
		js: 'build/js',
		css: 'build/css',
		images: 'build/images',
		fonts: 'build/fonts/'
	},

	src: {
		html: 'src/*.html',
		elements: 'src/templates/elements/*.html',
		js: ['src/js/main.js','src/js/angular.min.js'],
		style: ['src/style/main.scss','src/style/font-awesome.scss'],
		images: 'src/images/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},

	watch: {
		html: 'src/**/*.html',
		elements: 'src/templates/elements/*.html',
		js: 'src/js/**/*.js',
		style: 'src/style/**/*.scss',
		images: 'src/images/**/*.*',
		fonts: 'src/fonts/**/*.*'
	},
	clean: './build'
};

var config = {
	server: {
		baseDir: "./build"
	},
	tunnel: false,
	host: 'localhost',
	port: 7000,
	logePrefix: "test",
	open: false
};

gulp.task('html:build', function() {
	gulp.src(path.src.html)
			.pipe(rigger())
			.pipe(gulp.dest(path.build.html))
			.pipe(reload({stream: true}));
});

gulp.task('elements:build', function() {
	gulp.src(path.src.elements)
			.pipe(rigger())
			.pipe(gulp.dest(path.build.elements))
			.pipe(reload({stream: true}));
});

gulp.task('js:build', function() {
	gulp.src(path.src.js)
			.pipe(rigger())
			.pipe(sourcemaps.init())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(path.build.js))
			.pipe(reload({stream: true}));
});

gulp.task('style:build', function() {
	gulp.src(path.src.style)
			.pipe(plumber({errorHandler: log}))
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(prefixer())
			.pipe(cssmin())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(path.build.css))
			.pipe(reload({stream: true}));
});

gulp.task('images:build', function(){
	gulp.src(path.src.images)
			.pipe(imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
			}))
			.pipe(gulp.dest(path.build.images))
			.pipe(reload({stream: true}));
});

gulp.task('fonts:build', function () {
	gulp.src(path.src.fonts)
			.pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
	'html:build',
	'elements:build',
	'style:build',
	'js:build',
	'fonts:build',
	'images:build'
]);

gulp.task('watch', function() {
	watch([path.watch.html], function(event, cb){
		gulp.start('html:build');
	});
	watch([path.watch.html], function(event, cb){
		gulp.start('elements:build');
	});
	watch([path.watch.style], function(event, cb){
		gulp.start('style:build');
	});
	watch([path.watch.js], function(event, cb){
		gulp.start('js:build');
	});
	watch([path.watch.images], function(event, cb){
		gulp.start('images:build');
	});
	watch([path.watch.fonts], function(event, cb){
		gulp.start('fonts:build');
	});
});

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('build/css'));
});
gulp.task('js', function(){
	return gulp.src('js/*.js')
			.pipe(js())
			.pipe(gulp.dest('build/js'));
});
function log(error) {
	console.log(error);
}

gulp.task('webserver', function(){
	browserSync(config);
});

gulp.task('clean', function (cb){
	rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);
