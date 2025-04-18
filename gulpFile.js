const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");


// // "**" tudo o que tiver "Usamos mais para pastas"
// //"*" com "Usamos mais para extensoes de arquivos"
function compilaSass(){
   return gulp.src("src/styles/**/*.scss")
   .pipe(sass({outputStyle:"compressed"}))
   .pipe(gulp.dest("dist/styles"));
}

function comprimeImagens(){
   return gulp.src("src/imgs/images/**/*",{encoding:false})
   .pipe(imagemin())
   .pipe(gulp.dest("dist/imgs/images"));
}
exports.default = gulp.parallel(comprimeImagens,compilaSass);

exports.watch = function(){
   gulp.watch("src/styles/**/*.scss", gulp.parallel(compilaSass));
}

