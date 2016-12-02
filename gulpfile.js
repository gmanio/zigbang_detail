/**
 * Created on 2016-11-30.
 * @author: Gman Park
 */

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
// var imageResize = require('gulp-image-resize');
//
// gulp.task('downsize-retina-sprites', function downsizeRetinaSprites() {
//     return gulp.src('src/img/*.png')
//         .pipe(imageResize({width: '50%', height: '50%'}))
//         .pipe(gulp.dest('src/img/1x'));
// });


gulp.task('default', function () {
    var spriteData = gulp.src('src/img/*.png')
        .pipe(spritesmith({
            // retinaSrcFilter: 'src/img/*.png',
            // retinaImgName: 'sprite-2x.png',
            imgName: 'sprite/sprite.png',
            cssName: 'sprite/sprite.css',
            padding: 5
        }));

    return spriteData.pipe(gulp.dest('src'));
});