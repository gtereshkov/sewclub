const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const less = require('gulp-less')

gulp.task('css', function(){
    return gulp.src('./src/css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
})
gulp.task('html', function(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream());
})

gulp.task('watch', function(){
    gulp.watch('./src/css/*.less', gulp.series('css'));
    gulp.watch('./src/index.html', gulp.series('html'))
})

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './build'
        },
        open:false,
        notify: false
    });
})

gulp.task('dev', gulp.parallel('watch', 'browserSync'))