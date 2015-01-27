'use strict';
module.exports = function (str) {

  var ht = require('halftone');

  console.log(ht.Halftone.Util.average([1,2]));

  console.log(str || 'Rainbow');
};
