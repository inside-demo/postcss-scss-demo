var fs = require('fs');
var postcss = require('postcss');
var syntax = require('postcss-scss');

const scss = fs.readFileSync('src/main.scss', 'utf8');

postcss(require('precss')()).process(scss, { parser: syntax, syntax: syntax }).then(function (result) {
    console.log(result.content );
});