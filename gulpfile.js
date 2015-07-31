var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint');

gulp.task('compile-scss', function() {
    gulp.src('./css/site.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['compile-scss']);
    gulp.watch('./css/site.scss', ['compile-scss']);
})

gulp.task('default', ['compile-scss', 'lint', 'watch']);