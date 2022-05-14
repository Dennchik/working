const gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
	return gulp.src('css/style.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('css/'));
});

const pref = require('gulp-autoprefixer');
exports.pref = () => (
	gulp.src('css/style.css')
		.pipe(pref({
			cascade: false
		}))
		.pipe(gulp.dest('css/'))
);

const cssnano = require('gulp-cssnano');
gulp.task('cssnano ', function () {
	return gulp.src('css/style.css')
		.pipe(cssnano())
		.pipe(gulp.dest('css/'));
});
const autopref = require('autoprefixer-core');
exports.autopref = () => (
	gulp.src('css/style.css')
		.pipe(autopref({
			cascade: false
		}))
		.pipe(gulp.dest('css/'))
);



