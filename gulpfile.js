var gulp = require('gulp'),
// var sass = require('gulp-ruby-sass')
	browserSync = require('browser-sync'),
	reload = browserSync.reload

// gulp.task('sass', function(){
// 	return sass('style/main.scss')
// 		.pipe(gulp.dest('css'))
// 		.pipe(reload({stream: true}))
// })

gulp.task('serve', function(){
	
	gulp.watch(['*.html'], {cwd: 'app'}, console.log('changed'))
})

// gulp.watch('scss/*.scss', ['sass']);


gulp.task('default', function(){
	gulp.serve
});