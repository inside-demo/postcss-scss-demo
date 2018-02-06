var sass = require('node-sass');
sass.render({
  file: 'src/main.scss'
}, function(err, result) { 
	console.log(result.css.toString());
});