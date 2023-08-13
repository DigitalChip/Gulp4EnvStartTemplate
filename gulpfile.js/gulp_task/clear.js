const del = require('del');

// delete folder
const clear = () => {
    return del($.path.root)
  }

module.exports = clear;
