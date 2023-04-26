const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('cssnano');

const rename = require("gulp-rename");
const tailwindcss = require("tailwindcss");
const postcss = require("gulp-postcss");
const sass = require('gulp-sass')(require('sass'));

function startingBuild() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions'],
            browsers: [
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 11',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6',
            ],
            cascade: true
        }))

}

gulp.task("build:src", () => {
    return startingBuild()
        .pipe(gulp.dest('./dist'));
})

gulp.task("build:min", () => {
    return startingBuild()
        .pipe(postcss([
            cssnano({
                zindex: false,
                discardComments: {
                    removeAll: true
                }
            })
        ]))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(gulp.dest('./dist'));

})

gulp.task("build:standalone", () => {
    console.log(tailwindcss("tailwind.config.js"))
    return startingBuild()
        .pipe(postcss([
            tailwindcss("tailwind.config.js"),
            cssnano({
                zindex: false,
                discardComments: {
                    removeAll: true
                }
            })
        ]))
        .pipe(rename({
            suffix: ".standalone",
            extname: ".css"
        }))
        .pipe(gulp.dest('./dist'));

})


gulp.task("build", gulp.parallel("build:src", "build:min", "build:standalone"))
