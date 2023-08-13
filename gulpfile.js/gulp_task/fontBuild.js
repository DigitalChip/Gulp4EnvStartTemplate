const fontBuild = () => {
    return $.gulp.src($.path.font.src)
    // plugins...
    .pipe($.glp.plumber())                          // не вываливаемся при ошибке
    .pipe($.glp.newer($.path.font.dest))              // пропускать существующие файлы          
    .pipe($.glp.fonter($.appconfig.fonter))           // обработка и конвертация шрифтов                  
    .pipe($.gulp.dest($.path.font.dest))
    .pipe($.glp.ttf2woff2())                        // конвертация шрифтов в woff2              
    .pipe($.gulp.dest($.path.font.dest))
    
};

module.exports = fontBuild;
