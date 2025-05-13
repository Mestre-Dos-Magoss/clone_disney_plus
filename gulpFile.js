const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

// // "**" tudo o que tiver "Usamos mais para pastas"
// //"*" com "Usamos mais para extensoes de arquivos"
function compilaSass(){
   return gulp.src("src/styles/**/*.scss")
   .pipe(sass({outputStyle:"compressed"}))
   .pipe(gulp.dest("dist/styles"));
}

function comprimeJS(){
   return gulp.src("src/scripts/*.js")
   .pipe(uglify())
   .pipe(gulp.dest("./dist/scripts"));
}

function comprimeImagens(){
   return gulp.src("src/imgs/images/**/*",{encoding:false})
   .pipe(imagemin())
   .pipe(gulp.dest("dist/imgs/images"));
}
exports.default = gulp.parallel(comprimeImagens,compilaSass,comprimeJS);

exports.watch = function(){
   gulp.watch("src/styles/**/*.scss", gulp.parallel(compilaSass));
   gulp.watch("src/scripts/*.js", gulp.parallel(comprimeJS));
}

