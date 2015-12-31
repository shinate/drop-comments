var fs = require('fs');
var DC = require('../index');
var SC = require('strip-comments');

var content = fs.readFileSync(__dirname+'/ex.js').toString();

console.log('\n\n\n========> strip-comments <===================');
console.log(SC(content));

console.log('\n\n\n========> drop-comments <====================');
console.log(DC(content, null, {beautify:true}));