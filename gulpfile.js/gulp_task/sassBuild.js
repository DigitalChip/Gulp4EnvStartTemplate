const sassBuild = () => {
    return $.gulp.src($.path.sass.src, {sourcemaps: $.appconfig.isDev})
    // plugins...
    .pipe($.glp.plumber())                                      // не вываливаемся при ошибке
    .pipe($.sass().on('error', $.sass.logError))                  // компилятор sass/scss
    .pipe($.glp.autoprefixer())                                 // автоперфиксер (параметры browserlist в package.json)
    .pipe($.glp.shorthand())                                    // заменяет длинные css свойства на их короткие аналоги
    .pipe($.glp.groupCssMediaQueries())                      // группируем медиа запросы
    .pipe($.gulp.dest($.path.sass.dest, {sourcemaps: $.appconfig.isDev}))
    .pipe($.glp.csso())                                         // сжатие css
    .pipe($.glp.rename({suffix: ".min"}))
    .pipe($.gulp.dest($.path.sass.dest, {sourcemaps: $.appconfig.isDev}));
}

module.exports = sassBuild;
