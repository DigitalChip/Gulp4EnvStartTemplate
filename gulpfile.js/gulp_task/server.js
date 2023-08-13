// Server
const server = () => {
  $.browserSync.init({
    server: {
      baseDir: $.path.root,
      // Don't show any notifications in the browser.
      notify: false,
      //browser: ["firefox"]
    }
  });
}

module.exports = server;
