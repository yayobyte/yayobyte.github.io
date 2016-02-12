/**
 * Created by VP08 on 10/02/2016.
 */
var concat = require('gulp-concat');
var gulp = require('gulp');
var src = './src';
var dist = './dist';


gulp.task('scripts', function() {
    return gulp.src([
        src + '/js/vendor/**/*.js',
        src + '/js/*.js'
    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest(dist + '/js'));
});

gulp.task('styles', function() {
    return gulp.src([src + '/css/vendor/**/*.css', src + '/css/*.js'])
        .pipe(concat('all.css'))
        .pipe(gulp.dest(dist + '/css'));
});

gulp.task('index', function() {
    return gulp.src(src + '/index.html')
        .pipe(gulp.dest(dist));
});

gulp.task('watchers', function(){
    gulp.watch(src + '/**/*.js', ['scripts']);
});


gulp.task('default', [
    'index',
    'scripts',
    'styles'
])


