const html = () => {
    return $.gulp.src($.path.html.src)
    // plugins...
    .pipe($.glp.plumber({
      errorHandler: false
      // errorHandler: $.glp,=.notify.onError(error =>({
      //   title: "HTML Task",
      //   message: error.message 
      // }))
    }))
    .pipe($.glp.fileInclude())
    .pipe($.glp.htmlmin( $.appconfig.htmlmin))
    .pipe($.gulp.dest($.path.html.dest))
;
}
module.exports = html;
