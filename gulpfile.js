/**
 * Created on 2016-11-30.
 * @author: Gman Park
 */

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {
    var spriteData = gulp.src('src/img/*.png')
        .pipe(spritesmith({
            imgName: 'sprite/sprite.png',
            cssName: 'sprite/sprite.css',
            padding: 5
        }));

    return spriteData.pipe(gulp.dest('src'));
});