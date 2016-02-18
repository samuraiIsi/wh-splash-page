var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	uglify = require('gulp-uglify'),
	loading = require('gulp-load-plugins')();
	
gulp.task('scripts', function(){
	return gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/js'));  
});

gulp.task('styles', function(){
	return sass('scss/**/*.scss', {style: 'compressed'})
	.pipe(gulp.dest('css/'));
	
});

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']); 
});

gulp.task('serve', function() {
    loading.connect.server({
        port: 8044,
        root: './'
    });
});

gulp.task('default', ['scripts', 'styles', 'watch', 'serve']);


