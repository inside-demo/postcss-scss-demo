var fs = require('fs');
var postcss = require('postcss');

var plugins = [
	require('postcss-nested')(),
	require('postcss-sassy-mixins')()
]

const scss = fs.readFileSync('src/main.scss', 'utf8');

postcss(plugins).process(scss).then(function (result) {
    console.log(result.content );
});