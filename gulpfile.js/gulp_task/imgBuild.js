// Сжатие картинок пока отключено, просто копируютмся!
// Гребанный gulp-imagemin....!!!!!!!!

const imgBuild = () => {
    return $.gulp.src($.path.img.src)
    // plugins...
    .pipe($.glp.plumber())
    //.pipe($.glp.newer($.path.img.dest))
    //.pipe($.glp.imagemin($.appconfig.imagemin))
    .pipe($.glp.imagemin({ 
      progressive: true, 
      quality: 10, 
      optimizationLevel: 6 
    }))
    .pipe($.gulp.dest($.path.img.dest))
};

module.exports = imgBuild;
