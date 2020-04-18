const {dest, series, src, task, watch, parallel} = require('gulp');
const sass  = require('gulp-sass')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const cssnano = require('gulp-cssnano');
var eslint = require('gulp-eslint');

function buildCss(cb) {
    return src('./app/scss/**/*.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(cssnano())
        .pipe(dest('./app/css'))
        .on('end', function(){
            cb();
        })
        .on('error', function(){
            console.log("Error");
        });
}

task('eslint', (cb) => {
    return src(['./app/js/**/*.js'])
      .pipe(eslint({
        baseConfig: {
          "ecmaFeatures": {
             "jsx": true
           }
        }
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
      .on('end', () => {
          cb();
      });
});

task('sass', buildCss);

task('watch', () => {
    watch('./app/scss/**/*.scss', buildCss)
});

task('default', series('eslint', 'sass', 'watch'));

task('clean', function(){
    return src(['./app/css/*'], {read:false})
        .pipe(clean());
});

task('rebuild', series('clean', 'default'));
