// Project path config

const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/*.html",
        watch: pathSrc + "/**/*.html",
        dest: pathDest
    },

    sass: {
        src: pathSrc + "/sass/*.{sass,scss}",
        watch: pathSrc + "/**/*.{sass,scss}",
        dest: pathDest
    },
    
    js: {
      src: pathSrc + "/js/*.js",
      watch: pathSrc + "/**/*.js",
      dest: pathDest + '/js'
    },

    img: {
      src: pathSrc + "/img/**/*.{jpeg,jpg,png,gif,svg}",
      watch: pathSrc + "/**/*.{jpeg,jpg,png,gif,svg}",
      dest: pathDest + '/img'
    },

    font: {
      src: pathSrc + "/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      watch: pathSrc + "/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
      dest: pathDest + '/fonts'
    },
}
