const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://47.96.77.64:9632',
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api",
      },
      secure: false
    })
  );
};