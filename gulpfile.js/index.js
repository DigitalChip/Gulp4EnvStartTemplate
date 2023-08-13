// Глобальная переменная $ с объектом с настройками и плагинами доступена
// во всех модулях (сокращаем длину кода, что бы не импортировать одни и теже модули в каждом модуле)

global.$ = {
  // Packages
  gulp: require("gulp"),
  glp: require("gulp-load-plugins")(),              // загрузчик плагинов
  browserSync: require("browser-sync").create({ camelize: true }),
  sass: require('gulp-sass')(require('sass')),      // компилятор sass/scss
  webpack: require("webpack-stream"),               // сборщик webpack

  // Configurations
  path: require("./gulp_config/path"),
  appconfig: require("./gulp_config/appconfig")
}

// === IMPORT TASKS:
const server = require ("./gulp_task/server");
const clear = require ("./gulp_task/clear");
const html = require("./gulp_task/html");
const sassBuild = require("./gulp_task/sassBuild");
const jsBuild = require("./gulp_task/jsBuild");
const imgBuild = require("./gulp_task/imgBuild");
const fontBuild = require("./gulp_task/fontBuild");

// === WATCHERS:
const watcher = () =>{
  $.gulp.watch($.path.html.watch, html).on("all", $.browserSync.reload);
  $.gulp.watch($.path.sass.watch, sassBuild).on("all", $.browserSync.reload);
  $.gulp.watch($.path.js.watch, jsBuild).on("all", $.browserSync.reload);
  $.gulp.watch($.path.img.watch, imgBuild).on("all", $.browserSync.reload);
  $.gulp.watch($.path.font.watch, fontBuild).on("all", $.browserSync.reload);
}

// Building
const build = $.gulp.series( 
  clear,
  $.gulp.parallel(imgBuild, fontBuild, jsBuild, sassBuild, html),
);

// Dev
const dev = $.gulp.series( 
  build,
  $.gulp.parallel(watcher, server) 
  );


// === EXPORT TASKS:
exports.sass = sassBuild;
exports.html = html;
exports.js = jsBuild;
exports.img = imgBuild;
exports.font = fontBuild;
exports.clear = clear;

// Final (default) exports
exports.default = $.appconfig.isProd? build : dev;
