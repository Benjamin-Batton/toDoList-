const { sourcePath } = require("../utils/paths");
const loaderSvgInline = require("../loaders/loaderSvgInline");

module.exports = {
	test: /\.svg$/,
	include: [sourcePath],
	use: ["@svgr/webpack"],
};
