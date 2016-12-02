/**
 * Created on 2016-11-30.
 * @author: Gman Park
 */

var gulp = require('gulp');
var clean = require('gulp-clean');
var spritesmith = require('gulp.spritesmith');
var bundle = require('gulp-bundle-assets');

gulp.task('bundle', function () {
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('src/img/*.png')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            cssName: 'sprite.css',
            padding: 5
        }));

    return spriteData.pipe(gulp.dest('src/sprite'));
});

gulp.task('copy', function () {
    gulp.src('dist/*.css').pipe(gulp.dest('dist/css/'));
    gulp.src('./dist/*.js').pipe(gulp.dest('./dist/js'));
    gulp.src('./src/img/pic/*.{png,svg}').pipe(gulp.dest('./dist/img/pic'));
    gulp.src('./src/sprite/*.{png,svg}').pipe(gulp.dest('./dist/sprite'));

});

gulp.task('clean', function(){
    gulp.src('dist/maps', {read: false}).pipe(clean());
    gulp.src('dist/*.{js,css}', {read: false}).pipe(clean());
})

gulp.task('build', ['bundle'], function(){
    gulp.start('copy');
});