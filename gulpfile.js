//Gulp runs on top of node. We're writing ES modules (common for browser) that use import to import modules, and export default to export modules. Node is written in a different module system, called common.js

const { src, dest, series } = require('gulp');

const static = function () {
	//pipe takes the command on the left hand side and passes it into the brackets
	return src('src/static/data/*.*').pipe(dest('dist/data'));
};

//function to make our 404 show instead of netlify's
function redirect() {
	return src('./_redirects').pipe(dest('./dist'));
}

exports.default = series(static, redirect);
