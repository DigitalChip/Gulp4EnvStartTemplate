
const jsBuild = () => {
  return $.gulp.src($.path.js.src, {sourcemaps: $.appconfig.isDev})
  // plugins...
  .pipe($.glp.plumber())                                      // не вываливаемся при ошибке
  .pipe($.glp.babel())                                        // Babel. Конфигурация в packege.json
  .pipe($.webpack($.appconfig.webpack))                       // webpack
  .pipe($.gulp.dest($.path.js.dest, {sourcemaps: $.appconfig.isDev}))  
  .pipe($.glp.terser())                                     // Сжатие скриптов (ES standarts support)
  .pipe($.glp.rename({suffix: ".min"}))
  .pipe($.gulp.dest($.path.js.dest, {sourcemaps: $.appconfig.isDev}))
};

module.exports = jsBuild;
