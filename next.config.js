/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  optimizeFonts: false,
	webpack(config) {
		config.resolve.modules.push(__dirname);
		return config;
	}
}